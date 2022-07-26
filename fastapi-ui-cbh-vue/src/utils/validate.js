export const validateNoNumber =  (rule, value, callback) => {
    const reg = /^[^0-9]+$/;
    if(value === '' || value === null || value === undefined) {
        callback(new Error('请填写内容'));
    }
    if(!reg.test(value)) {
        callback(new Error('必须是非数字'));
    }
    callback();
}