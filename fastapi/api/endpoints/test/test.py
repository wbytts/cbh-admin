# -*- coding:utf-8 -*-
"""
@Des: 测试
"""
from core.Auth import create_access_token
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException
from models.base import User

import utils


async def test_oath2(data: OAuth2PasswordRequestForm = Depends()):
    # 查询用户名对应的用户数据
    user_data = await User.filter(username=data.username).first().values()
    print('用户数据', user_data)
    print('请求数据', data)
    if user_data is None:
        raise HTTPException(401, "用户名或密码错误")
    else:
        if not utils.password.check_password(data.password, user_data.get('password')):
            raise HTTPException(401, "用户名或密码错误")

    user_type = False
    if not data.scopes:
        raise HTTPException(401, "请选择作用域!")
    if "is_admin" in data.scopes:
        user_type = True

    jwt_data = {
        "user_id": user_data.get('id'),  # data.client_id,
        "user_type": user_type
    }

    jwt_token = create_access_token(data=jwt_data)

    return {"access_token": jwt_token, "token_type": "bearer"}
