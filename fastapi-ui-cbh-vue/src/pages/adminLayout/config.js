import router from '@/router';
import {Message} from 'element-ui'

export const commands = [
    { id: 1, name: "1234", func: "handle1234" },
    {
        id: 2,
        name: "退出登录",
        func: () => {
            localStorage.removeItem("token");
            Message("已退出");
            router.push("/login");
        },
        divided: true,
    },
]