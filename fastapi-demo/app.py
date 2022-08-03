from fastapi import FastAPI, Response

app = FastAPI()


@app.get('/hello')
def hello():
    html = """
    <html>
        <head>
            <meta charset="UTF-8">
            <title>网页</title>
            <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.js"></script>
        </head>
        <body>
            <h1>你好啊</h1>
            <button onclick="getUserInfo()">获取用户信息</button>


            <script>
                const service = axios.create({
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                });
                function getUserInfo() {
                    service.post('http://cbh.com:8000/getUserInfo', {}, {
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                        },
                    }).then(res => {
                        console.log("用户信息", res);
                    })
                }
            </script>
        </body>
    </html>
    """
    return Response(html, 200, {"Content-Type": "text/html"})



@app.post('/getUserInfo')
def get_user_info():
    return {"username": "张三"}


@app.options("/getUserInfo")
def get_user_info_option():
    print("接收到了 getUserInfo 请求,请求方式 OPTION")
    return "asd"
