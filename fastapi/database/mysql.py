'''
Description:
FilePath: /fastapi/database/mysql.py
******************************
Author: 陈炳翰
Date: 2022-07-14 21:25:59
LastEditors: BingYi
LastEditTime: 2022-10-16 02:05:05
good good study 📚, day day up ✔️.
'''
# -*- coding:utf-8 -*-
"""
@Des: mysql数据库
"""


# -----------------------数据库配置-----------------------------------
from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
import os
DB_ORM_CONFIG = {
    "connections": {
        "base": {
            'engine': 'tortoise.backends.mysql',
            "credentials": {
                'host': os.getenv('MYSQL_HOST', '127.0.0.1'),
                'user': os.getenv('MYSQL_USER', 'root'),
                # 我的 root，cbh的 123456
                'password': os.getenv('MYSQL_PASSWORD', '123456'),
                'port': int(os.getenv('MYSQL_PORT', 3306)),
                'database': os.getenv('MYSQL_DB', 'fastapi'),
                'pool_recycle': 60,
                'connect_timeout': 60,
            },
            'echo': True,  # 数据库日志
        },
    },
    "apps": {
        "base": {
            "models": [
                "models.base", # 基础模型
                "models.collect", # 收集
                "models.game", # 游戏相关表
            ],
            "default_connection": "base"
        },
        # "db2": {"models": ["models.db2"], "default_connection": "db2"},
        # "db3": {"models": ["models.db3"], "default_connection": "db3"}
    },
    'use_tz': False,
    'timezone': 'Asia/Shanghai'
}


async def register_mysql(app: FastAPI):
    # 注册数据库
    register_tortoise(
        app,
        config=DB_ORM_CONFIG,
        generate_schemas=False,  # 是否生成表结构
        add_exception_handlers=False,  # 是否开启异常信息处理
    )
