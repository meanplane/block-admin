<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :router="true" :unique-opened="true">
            <div v-for="item in menus" :key="item.path">
                <el-submenu v-if="item.children" :index="item.path">
                    <template slot="title">
                        <i v-if="item.icon" :class="item.icon"></i>
                        {{item.name}}
                    </template>

                    <div v-for="item1 in item.children" :key="item1.path">
                        <el-submenu v-if="item1.children" :index="item1.path">
                            <template slot="title">
                                <i v-if="item1.icon" :class="item1.icon"></i>
                                {{item1.name}}
                            </template>

                            <div v-for="item2 in item1.children" :key="item2.path">
                                <el-submenu v-if="item2.children" :index="item2.path">
                                    <template slot="title">
                                        <i v-if="item2.icon" :class="item2.icon"></i>
                                        {{item2.name}}
                                    </template>

                                    <div v-for="item3 in item2.children" :key="item3.path">
                                        <el-submenu v-if="item3.children" :index="item3.path">
                                            <template slot="title">
                                                <i v-if="item3.icon" :class="item3.icon"></i>
                                                {{item3.name}}
                                            </template>

                                            <div v-for="item4 in item3.children" :key="item4.path">
                                                <el-submenu v-if="item4.children" :index="item4.path">
                                                    <template slot="title">
                                                        <i v-if="item4.icon" :class="item4.icon"></i>
                                                        {{item4.name}}
                                                    </template>

                                                    <div v-for="item5 in item4.children" :key="item5.path">
                                                        <el-submenu v-if="item5.children" :index="item5.path">
                                                            <template slot="title">
                                                                <i v-if="item5.icon" :class="item5.icon"></i>
                                                                {{item5.name}}
                                                            </template>

                                                        </el-submenu>
                                                        <el-menu-item v-else :index="item5.path">
                                                            <i v-if="item5.icon" :class="item5.icon"></i>
                                                            {{item5.name}}
                                                        </el-menu-item>
                                                        <div class="mp-divider"/>
                                                    </div>

                                                </el-submenu>
                                                <el-menu-item v-else :index="item4.path">
                                                    <i v-if="item4.icon" :class="item4.icon"></i>
                                                    {{item4.name}}
                                                </el-menu-item>
                                                <div class="mp-divider"/>
                                            </div>
                                        </el-submenu>
                                        <el-menu-item v-else :index="item3.path">
                                            <i v-if="item3.icon" :class="item3.icon"></i>
                                            {{item3.name}}
                                        </el-menu-item>
                                        <div class="mp-divider"/>
                                    </div>
                                </el-submenu>
                                <el-menu-item v-else :index="item2.path">
                                    <i v-if="item2.icon" :class="item2.icon"></i>
                                    {{item2.name}}
                                </el-menu-item>
                                <div class="mp-divider"/>
                            </div>

                        </el-submenu>
                        <el-menu-item v-else :index="item1.path">
                            <i v-if="item1.icon" :class="item1.icon"></i>
                            {{item1.name}}
                        </el-menu-item>
                        <div class="mp-divider"/>
                    </div>

                </el-submenu>
                <el-menu-item v-else :index="item.path">
                    <i v-if="item.icon" :class="item.icon"></i>
                    {{item.name}}
                </el-menu-item>
                <div class="mp-divider"/>
            </div>

        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        name:'系统管理',path:'/index',icon:'el-icon-message',
                        children:[
                            {name:'管理员',path:'/index/user'},
                            {name:'后台菜单',path:'/index/menu'},
                            {name:'日志管理',path:'/index/log'},
                            {name:'角色管理',path:'index/role'},
                        ]
                    },
                    {
                        name:'游戏配置',path:'/gameSetting',icon:'el-icon-setting',
                        children:[
                            {name:'推广渠道配置',path:'/gameSetting/channel'},
                            {name:'POC申购补充发放',path:'/gameSetting/menu'},
                            {name:'活动数据统计',path:'/gameSetting/log'},
                            {name:'活动相关配置',path:'/gameSetting/role'},
                        ]
                    },
                ]
            }
        },
        created(){
            this.$get('/menus').then( res =>{
                this.menus = res;
            }).catch(err =>{
                window.console.log('err', err);
            })
        }
    }
</script>

<style scoped>
    .el-aside {
        color: #333;
    }
    .mp-divider{
        height: 1px;
        margin: 0 10px;
        background-color: #eee;
    }
</style>