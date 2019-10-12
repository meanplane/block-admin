// import VueCookies from 'vue-cookies';
// import Vue from 'vue';

// const _this = new Vue();

import axios from 'axios';


axios.defaults.timeout = 10000; //设置请求时间
//设置接口地址
axios.defaults.baseURL = `http://localhost`;
axios.defaults.headers["appname"] = "open";
axios.defaults.headers["appsource"] = "pc";
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";


export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: params}).then(response => {
            let data;
            if (response.status == 200) {
                data = response.data;
                // if (_this.$Func.isInArray(_this.$Const.DECRYPT_URLS, url) && data.result) {
                //     //需要解密
                //     data = _this.$Signature.getDecryptWithAES(data.result);
                //     if (data) {
                //         data = JSON.parse(data);
                //         // if (process.env.NODE_ENV != 'publish') {
                //         //     console.log('data', data);
                //         // }
                //     }
                // }
            }
            resolve(data);
        })
            .catch(err => {
                reject(err)
            })
    })
}

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            let data;
            if (response.status == 200) {
                data = response.data;
                // if (_this.$Func.isInArray(_this.$Const.DECRYPT_URLS, url) && data.result) {
                //     //需要解密
                //     data = _this.$Signature.getDecryptWithAES(data.result);
                //     if (data) {
                //         data = JSON.parse(data);
                //         console.log(process.env.NODE_ENV);
                //         // if (process.env.NODE_ENV != 'publish') {
                //         //     console.log('data', data);
                //         // }
                //     }
                // }
            }
            resolve(data);
        }, err => {
            reject(err)
        })
    })
}

export default axios;