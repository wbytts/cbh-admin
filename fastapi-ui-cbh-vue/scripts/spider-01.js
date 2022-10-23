const axios = require('axios');

const url = 'http://www.baidu.com'


axios.get(url).then(res => {
    let html = res.data;
    let reg = /href="(.*?)"/g;
    let result = html.match(reg);
    console.log()
})



