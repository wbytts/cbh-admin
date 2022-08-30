const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'dist')));
app.listen(9999, '127.0.0.1')
console.log('服务器开启成功');