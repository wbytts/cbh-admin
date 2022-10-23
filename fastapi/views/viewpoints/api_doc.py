from fastapi import Request, APIRouter
from fastapi.responses import HTMLResponse
import requests

router = APIRouter()

@router.get("/api_doc/", tags=["接口文档页面"], response_class=HTMLResponse)
async def home(request: Request):
    return request.app.state.views.TemplateResponse("api_doc/index.html", {"request": request})


