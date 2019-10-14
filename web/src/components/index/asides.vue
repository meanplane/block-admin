<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :router="true" :unique-opened="true">
            <div v-for="item in menus" :key="item.path">
                <el-submenu v-if="item.children" :index="item.path">
                    <template slot="title">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <el-tooltip v-if="debug" :content="item.path" placement="top">
                            <span>{{item.name}}</span>
                        </el-tooltip>
                    </template>

                    <div v-for="item1 in item.children" :key="item1.path">
                        <el-submenu v-if="item1.children" :index="item1.path">
                            <template slot="title">
                                <i v-if="item1.icon" :class="item1.icon"></i>
                                <el-tooltip v-if="debug" :content="item1.path" placement="top">
                                    <span>{{item1.name}}</span>
                                </el-tooltip>
                            </template>

                            <div v-for="item2 in item1.children" :key="item2.path">
                                <el-submenu v-if="item2.children" :index="item2.path">
                                    <template slot="title">
                                        <i v-if="item2.icon" :class="item2.icon"></i>
                                        <el-tooltip v-if="debug" :content="item2.path" placement="top">
                                            <span>{{item2.name}}</span>
                                        </el-tooltip>
                                    </template>

                                    <div v-for="item3 in item2.children" :key="item3.path">
                                        <el-submenu v-if="item3.children" :index="item3.path">
                                            <template slot="title">
                                                <i v-if="item3.icon" :class="item3.icon"></i>
                                                <el-tooltip v-if="debug" :content="item3.path" placement="top">
                                                    <span>{{item3.name}}</span>
                                                </el-tooltip>
                                            </template>

                                            <div v-for="item4 in item3.children" :key="item4.path">
                                                <el-submenu v-if="item4.children" :index="item4.path">
                                                    <template slot="title">
                                                        <i v-if="item4.icon" :class="item4.icon"></i>
                                                        <el-tooltip v-if="debug" :content="item4.path" placement="top">
                                                            <span>{{item4.name}}</span>
                                                        </el-tooltip>
                                                    </template>

                                                    <div v-for="item5 in item4.children" :key="item5.path">
                                                        <el-submenu v-if="item5.children" :index="item5.path">
                                                            <template slot="title">
                                                                <i v-if="item5.icon" :class="item5.icon"></i>
                                                                <el-tooltip v-if="debug" :content="item5.path" placement="top">
                                                                    <span>{{item5.name}}</span>
                                                                </el-tooltip>
                                                            </template>

                                                        </el-submenu>
                                                        <el-menu-item v-else :index="item5.path">
                                                            <i v-if="item5.icon" :class="item5.icon"></i>
                                                            <el-tooltip v-if="debug" :content="item5.path" placement="top">
                                                                <span>{{item5.name}}</span>
                                                            </el-tooltip>
                                                        </el-menu-item>
                                                        <div class="mp-divider"/>
                                                    </div>

                                                </el-submenu>
                                                <el-menu-item v-else :index="item4.path">
                                                    <i v-if="item4.icon" :class="item4.icon"></i>
                                                    <el-tooltip v-if="debug" :content="item4.path" placement="top">
                                                        <span>{{item4.name}}</span>
                                                    </el-tooltip>
                                                </el-menu-item>
                                                <div class="mp-divider"/>
                                            </div>
                                        </el-submenu>
                                        <el-menu-item v-else :index="item3.path">
                                            <i v-if="item3.icon" :class="item3.icon"></i>
                                            <el-tooltip v-if="debug" :content="item3.path" placement="top">
                                                <span>{{item3.name}}</span>
                                            </el-tooltip>
                                        </el-menu-item>
                                        <div class="mp-divider"/>
                                    </div>
                                </el-submenu>
                                <el-menu-item v-else :index="item2.path">
                                    <i v-if="item2.icon" :class="item2.icon"></i>
                                    <el-tooltip v-if="debug" :content="item2.path" placement="top">
                                        <span>{{item2.name}}</span>
                                    </el-tooltip>
                                </el-menu-item>
                                <div class="mp-divider"/>
                            </div>

                        </el-submenu>
                        <el-menu-item v-else :index="item1.path">
                            <i v-if="item1.icon" :class="item1.icon"></i>
                            <el-tooltip v-if="debug" :content="item1.path" placement="top">
                                <span>{{item1.name}}</span>
                            </el-tooltip>
                        </el-menu-item>
                        <div class="mp-divider"/>
                    </div>

                </el-submenu>
                <el-menu-item v-else :index="item.path">
                    <i v-if="item.icon" :class="item.icon"></i>
                    <el-tooltip v-if="debug" :content="item.path" placement="top">
                        <span>{{item.name}}</span>
                    </el-tooltip>
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
                debug:true,
                menus: [
                    {
                        name:'系统管理',path:'/admin',icon:'el-icon-message',
                        children:[
                            {name:'管理员',path:'/admin/users'},
                            {name:'后台菜单',path:'/admin/menu'},
                            {name:'日志管理',path:'/admin/log'},
                            {name:'角色管理',path:'/admin/role'},
                            {name:'xxx',path:'/admin/xxx'},
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