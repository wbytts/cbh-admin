import requests
import time
import json

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX3R5cGUiOmZhbHNlLCJleHAiOjE2NTg1ODQ0MDB9.TUNzpFkgZltnhehGT6xw0ICSlvkh3FXr6edo3Lm_bQs'
}

url = 'http://127.0.0.1:8888/api/v1/admin/role'

def get_next_role_params():
    return json.dumps({
        "role_name": "张三" + str(time.time()),
        "role_status": True,
        "role_desc": "测试用角色"
    })


for i in range(1000):
    res = requests.post(url, headers=headers, data=get_next_role_params())
    print(i, res)



