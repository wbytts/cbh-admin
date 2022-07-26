from fastapi import Request, APIRouter
from fastapi.responses import HTMLResponse

router = APIRouter()

@router.get("/admin", tags=["管理端视图"], response_class=HTMLResponse)
async def home(request: Request):
    """
    门户首页
    :param request:
    :return:
    """
    return request.app.state.views.TemplateResponse("index.html", {"request": request})


