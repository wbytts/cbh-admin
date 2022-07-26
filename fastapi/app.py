"""
@Des: app运行时文件
"""
import os
from fastapi import FastAPI, HTTPException, Request, Path
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.openapi.docs import get_redoc_html, get_swagger_ui_html, get_swagger_ui_oauth2_redirect_html
from fastapi.openapi.utils import get_openapi

from starlette.middleware.sessions import SessionMiddleware

from config import settings
from core import Events, Exceptions, Router, Middleware
from tortoise.exceptions import OperationalError, DoesNotExist, IntegrityError, ValidationError
import uvicorn



"""
FastAPI构建在两个主要的python库上：
    starlette 一个低级asgiweb框架 （https://www.starlette.io）
    pydantic 一个基于类型提示的数据验证库（https://pydantic-docs.helpmanual.io/）
"""

# FastAPI公开了一个与ASGI兼容的应用程序，要运行它则需要一个与此协议兼容的web服务器
application: FastAPI = FastAPI(
    debug=settings.APP_DEBUG,
    docs_url=None,
    redoc_url=None,
    swagger_ui_oauth2_redirect_url=settings.SWAGGER_UI_OAUTH2_REDIRECT_URL,
)


# 自定义OpenAPI信息
def custom_openapi():
    if application.openapi_schema:
        return application.openapi_schema
    openapi_schema = get_openapi(
        description=settings.DESCRIPTION,
        version=settings.VERSION,
        title=settings.PROJECT_NAME,
        routes=application.routes,
    )
    openapi_schema["info"]["x-logo"] = {"url": "/static/logo-teal.png"}
    application.openapi_schema = openapi_schema
    return application.openapi_schema


application.openapi = custom_openapi  # type: ignore


# 自定义swagger ui的页面
@application.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=application.openapi_url,
        title=application.title + " - Swagger UI",
        oauth2_redirect_url=application.swagger_ui_oauth2_redirect_url,
        swagger_js_url="/static/swagger-ui/swagger-ui-bundle.js",
        swagger_css_url="/static/swagger-ui/swagger-ui.css",
    )


# swagger_ui_oauth2_redirect_url
@application.get(application.swagger_ui_oauth2_redirect_url, include_in_schema=False)  # type: ignore
async def swagger_ui_redirect():
    return get_swagger_ui_oauth2_redirect_html()


# redoc
@application.get("/redoc", include_in_schema=False)
async def redoc_html():
    return get_redoc_html(
        openapi_url=application.openapi_url,
        title=application.title + " - ReDoc",
        redoc_js_url="/static/redoc/redoc.standalone.js",
    )


@application.get('/cbh-admin/{file_path:path}')
async def cbh_admin(file_path: str = Path(...)):
    if file_path == '' or file_path == 'index' or file_path == 'index.html':
        f = open('/root/projects/cbh-admin/fastapi-ui-cbh-vue/dist/index.html')
        content = f.read()
        # 临时解决 module 引入方式时，使用fastapi提供访问，报错的问题
        content = content.replace('type="module" crossorigin', 'defer')
        f.close()
        return HTMLResponse(content)
    else:
        return FileResponse(f'/root/projects/cbh-admin/fastapi-ui-cbh-vue/dist/{file_path}')




# 事件监听
application.add_event_handler("startup", Events.startup(application))
application.add_event_handler("shutdown", Events.stopping(application))

# 异常错误处理
application.add_exception_handler(HTTPException, Exceptions.http_error_handler)
application.add_exception_handler(RequestValidationError, Exceptions.http422_error_handler)
application.add_exception_handler(Exceptions.UnicornException, Exceptions.unicorn_exception_handler)
application.add_exception_handler(DoesNotExist, Exceptions.mysql_does_not_exist)
application.add_exception_handler(IntegrityError, Exceptions.mysql_integrity_error)
application.add_exception_handler(ValidationError, Exceptions.mysql_validation_error)
application.add_exception_handler(OperationalError, Exceptions.mysql_operational_error)

# 中间件
application.add_middleware(Middleware.BaseMiddleware)


# 允许跨域
application.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=settings.CORS_ALLOW_CREDENTIALS,
    allow_methods=settings.CORS_ALLOW_METHODS,
    allow_headers=settings.CORS_ALLOW_HEADERS,
)


application.add_middleware(
    SessionMiddleware,
    secret_key=settings.SECRET_KEY,
    session_cookie=settings.SESSION_COOKIE,
    max_age=settings.SESSION_MAX_AGE,
)

# 路由
application.include_router(Router.router)

# 静态资源目录
application.mount("/static", StaticFiles(directory=settings.STATIC_DIR), name="static")
application.state.views = Jinja2Templates(directory=settings.TEMPLATE_DIR)

app = application

os.system("chcp & cls")
# uvicorn app:app --reload --port 8888 --host 0.0.0.0
# if __name__ == '__main__':
#     uvicorn.run('app:app', reload=True, port=8888)
