import Vue from 'vue';
import Router from 'vue-router'
// import Index from '../pages/index'
import Login from '../pages/login'
import Content from '../pages/content'
import {fetch} from '../plugins/axios'
import path from 'path'
import fs from 'fs'

Vue.use(Router)

fetch('/').then(res =>{
    window.console.log('res',res);
}).catch(err => window.console.log('err',err) )

let routes = [];

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
var walk = function(dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}
window.console.log(walk(`../pages`))


const router = new Router({
    mode:"history",
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:()=>import(`../pages/index`),
            children:[
                {path:'main',component:Content}
            ]
        },

        {path:'/login',component:Login},
    ]
});

export default router;