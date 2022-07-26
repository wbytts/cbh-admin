# -*- coding:utf-8 -*-
"""
@Des: api路由
"""
from fastapi import APIRouter
from api.endpoints.test.test import test_oath2
from api.endpoints.sys import user, role, access, menu
from api.websocket import admin_chat
from api.extends import sms, wechat
import api.endpoints.money_record as money_record

# API路由
api_router = APIRouter(prefix="/api/v1")

"""#################### 系统API ####################"""
api_router.post("/test/oath2", tags=["测试oath2授权"])(test_oath2)  # Swagger文档使用
api_router.include_router(user.router, prefix="/admin", tags=["用户管理"])
api_router.include_router(role.router, prefix="/admin", tags=["角色管理"])
api_router.include_router(access.router, prefix="/admin", tags=["权限管理"])
api_router.include_router(menu.router, prefix="/admin", tags=["菜单管理"])
# websocket
api_router.include_router(admin_chat.router, prefix="/ws", tags=["WebSocket"])

"""#################### 第三方拓展 ####################"""
api_router.include_router(wechat.router, prefix="/wechat", tags=["微信授权"])
api_router.include_router(sms.router, prefix="/sms", tags=["短信接口"])

"""#################### 业务API ####################"""
# money_record
api_router.include_router(money_record.router, prefix="/money_record", tags=["money记录"])
