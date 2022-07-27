export default {
    data() {
        return {
            x: 3,
            title: '你好啊'
        };
    },
    methods: {
        handleClick() {
            console.log('点击')
        }
    },
    mounted() {
        
    },
    render(h) {
        return (
            <div>
                <h1 title={this.title}>{this.x}</h1>
                <el-button onClick={this.handleClick}>按钮</el-button>
            </div>
        );
    },
};
