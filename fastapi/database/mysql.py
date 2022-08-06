'''
Description:
FilePath: /front-end-demose:/my-projects/cbh-admin/fastapi/database/mysql.py
******************************
Author: 陈炳翰
Date: 2022-07-14 21:25:59
LastEditors: BingYi
LastEditTime: 2022-08-05 10:43:53
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
        # "db2": {
        #     'engine': 'tortoise.backends.mysql',
        #     "credentials": {
        #         'host': os.getenv('DB2_HOST', '127.0.0.1'),
        #         'user': os.getenv('DB2_USER', 'root'),
        #         'password': os.getenv('DB2_PASSWORD', '123456'),
        #         'port': int(os.getenv('DB2_PORT', 3306)),
        #         'database': os.getenv('DB2_DB', 'db2'),
        #     }
        # },
        # "db3": {
        #     'engine': 'tortoise.backends.mysql',
        #     "credentials": {
        #         'host': os.getenv('DB3_HOST', '127.0.0.1'),
        #         'user': os.getenv('DB3_USER', 'root'),
        #         'password': os.getenv('DB3_PASSWORD', '123456'),
        #         'port': int(os.getenv('DB3_PORT', 3306)),
        #         'database': os.getenv('DB3_DB', 'db3'),
        #     }
        # },

    },
    "apps": {
        "base": {
            "models": [
                "models.base", # 基础模型
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
