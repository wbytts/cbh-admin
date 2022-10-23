# -*- coding:utf-8 -*-
"""
@Des: 视图路由
"""
from fastapi import APIRouter
from views.viewpoints import home
from views.viewpoints import api_doc


# 视图路由
views_router = APIRouter()

views_router.include_router(home.router)
views_router.include_router(api_doc.router)

