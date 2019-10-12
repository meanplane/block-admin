<template>
    <el-header style="text-align: center; font-size: 12px">
        <el-row :gutter="20">
            <el-col :span="3" style="color: #fff;">
                <h1>后台管理系统</h1>
            </el-col>

            <el-col :span="3" :offset="18">
                <el-dropdown trigger="click" class="mp-hv">
                    <span>
                    <i class="el-icon-mobile-phone"></i>
                        admin
                    <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" style="text-align: center;">
                        <el-dropdown-item>
                            <i class="el-icon-edit"></i>
                            更新资料
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <i class="el-icon-setting"></i>
                            更新密码
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <i class="el-icon-circle-close"></i>
                            退出
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>

    </el-header>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .mp-hv:hover{
        background-color: #C0C4CC;
    }
</style>