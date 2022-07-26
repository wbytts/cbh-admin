'''
Description: 
FilePath: \fastapi\schemas\role.py
******************************
Author: 陈炳翰
Date: 2022-07-13 20:43:46
LastEditors: 陈炳翰
LastEditTime: 2022-07-21 22:21:17
good good study 📚, day day up ✔️.
'''
# -*- coding:utf-8 -*-
"""
@Des: role schemas
"""

from pydantic import BaseModel, Field
from typing import List, Optional
from schemas.base import ResAntTable
from datetime import datetime


class CreateRole(BaseModel):
    role_name: str = Field(min_length=1, max_length=10, title="角色名称")
    role_status: Optional[bool] = Field(default=False, title="角色状态")
    role_desc: Optional[str] = Field(max_length=255, title="角色描述")


class UpdateRole(BaseModel):
    id: int = Field(title="角色id")
    role_name: str = Field(title="角色名称")
    role_status: Optional[bool] = Field(title="角色状态")
    role_desc: Optional[str] = Field(title="角色描述")


class RoleItem(BaseModel):
    """角色详情"""
    id: int = Field(title="角色id")
    key: int = Field(title="角色名称")
    role_name: str = Field(title="角色名称")
    role_status: Optional[bool] = Field(title="角色状态")
    role_desc: Optional[str] = Field(title="角色描述")
    create_time: datetime = Field(title="创建时间")
    update_time: datetime = Field(title="修改时间")


class RoleList(ResAntTable):
    """角色列表"""
    data: List[RoleItem] = Field(title="角色列表")


class SetAccess(BaseModel):
    """设置权限"""
    role_id: int = Field(title="角色id")
    access: List[int] = Field(default=[], description="权限集合")


class CreateAccess(BaseModel):
    """创建权限"""
    access_name: str = Field("测试", description="权限名称")
    scopes: str = Field("test", description="权限标识")
    parent_id: int = Field(default=0, title="父权限id")
    is_check: bool = Field(default=False, title="是否选中")
    is_menu: bool = Field(default=False, title="是否是菜单")
