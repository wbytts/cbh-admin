<template>
    <div>
        <div v-if="commands === undefined" class="user-profile">
            <img v-if="headImg" :src="headImg" :style="headStyle" />
            <span v-else>{{headText}}</span>
        </div>
        <div v-else class="user">
            <el-dropdown ref="dropdown"  @command="userControl">
                <div>
                    <img v-if="headImg" :src="headImg" :style="headStyle" v-bind="dropdownFix" />
                    <span v-else>{{headText}}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        v-for="item in commands"
                        :command="item.id"
                        :key="item.id"
                        :divided="item.divided"
                    >{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        commands: {
            type: Array,
            default: undefined,
        },
        headImg: {
            type: String,
            default: undefined,
        },
        headText: {
            type: String,
            default: "头像",
        },
        width: {
            type: Number,
            default: 35,
        },
        height: {
            type: Number,
            default: 35,
        },
        round: {
            type: Boolean,
            default: true,
        },
    },
    /*
        aria-haspopup="list" 
        aria-controls="dropdown-menu-7532" 
        role="button" 
        tabindex="0" 
        class=" el-dropdown-selfdefine" 
    */
    data() {
        return {
            dropdownFix: {
                "aria-haspopup": "list",
                "aria-controls": "dropdown-menu-7532",
                role: "button",
                tabindex: "0",
                class: "el-dropdown-selfdefine",
            },
        };
    },
    methods: {
        userControl(command) {
            const func = this.commands.filter((item) => item.id === command)[0].func;
            func();
        },
        handleMouseEnter() {
            console.log("鼠标进入");
            console.log(this.$refs.dropdown);
            this.$refs.dropdown.visible = true;
        },
        handleMouseLeave() {
            console.log("鼠标离开");
        },
    },
    computed: {
        headStyle() {
            return {
                width: this.width + "px",
                height: this.height + "px",
                borderRadius: this.round ? "50%" : "0",
            };
        },
    },
    mounted() {
        console.log(this.headStyle);
    },
};
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    position: absolute;
    right: 0;
    margin-right: 25px;
    top: 50%;
    transform: translateY(-50%);
    .user-profile {
        text-align: center;
        line-height: 35px;
        border-radius: 50%;
        background: white;
        border: 1px solid white;
        position: relative;
    }
}
</style>