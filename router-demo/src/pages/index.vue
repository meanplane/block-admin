<template>
    <div>
        <el-container style=" border: 1px solid #eee" direction="vertical">
            <headers/>
            <el-container>
                <asides/>
                <el-main>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                    <el-divider/>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
    import headers from '../components/index/headers.vue';
    import asides from '../components/index/asides.vue';
    export default {
        name:'index',
        components:{headers,asides},
    };
</script>


<style>
</style>