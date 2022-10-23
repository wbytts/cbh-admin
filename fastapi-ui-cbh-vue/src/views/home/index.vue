<template>
    <div>
        <input type="file" @change="handleFileChange" multiple />
        <button @click="handleClickSingle">单个上传</button>
        <button @click="handleClickBatch">批量上传</button>
        <el-upload
            action="/flask/upload-list"
            list-type="picture-card"
            :on-preview="handlePerview"
            :on-remove="handleRemove"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            files: null,
            dialogImageUrl:"",
            dialogVisible:false,
        };
    },
    methods: {
        async handleClickSingle() {
            console.log("123");
            const formData = new FormData();
            formData.append("file", this.files[0]);
            let res = await axios.post("/flask/upload", formData);
            console.log(res);
        },
        handleFileChange(event) {
            console.log(event.target.files);
            this.files = event.target.files;
        },
        async handleClickBatch() {
            const formData = new FormData();
            // formData.append("file",this.files);
            // formData.append('arr', [1, 2, 3])
            [...this.files].forEach((value, index) => {
                formData.append("files", value);
            });
            // formData.set(name, value) // 如果有,则覆盖
            let res = await axios.post("/flask/upload-list", formData);
            console.log(res.data);
        },
    },
    computed: {},
    watch: {},
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
