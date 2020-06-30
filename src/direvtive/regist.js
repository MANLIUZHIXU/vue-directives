/*
 * @Author: your name
 * @Date: 2020-06-29 16:33:00
 * @LastEditTime: 2020-06-30 15:51:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personlzx\src\direvtive\regist.js
 */ 



 import {copy,reg} from './index';

//可注册多个指令，同时放入directives对象中
 const directives = {
     copy,
     reg
 }

export default {
    install(Vue){
        Object.keys(directives).forEach(key => {
            Vue.directive(key,directives[key])
        })
    }
}


