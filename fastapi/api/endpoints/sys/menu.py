# encoding: utf-8
"""
@author: wbytts
@desc: 
"""
from fastapi import Request, Query, APIRouter, Security

from core.Auth import check_permissions

router = APIRouter(prefix="/menu")


@router.post("/all", summary="获取全部菜单", dependencies=[Security(check_permissions, scopes=["menu_all"])])
async def get_all_menu():
    pass


