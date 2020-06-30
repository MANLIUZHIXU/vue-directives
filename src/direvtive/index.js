/*
 * @Author: your name
 * @Date: 2020-06-29 16:04:18
 * @LastEditTime: 2020-06-30 17:03:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personlzx\src\direvtive\index.js
 */



/* 
     el:操作的DOM对象
     value:指令所接收到的值
     bind:钩子函数，首次绑定时触发
 */

import { Notify } from 'vant'




//指令-复制
const copy = {
    /* 
        el:操作的DOM对象
        value:指令所接收到的值
        bind:钩子函数，首次绑定时触发
    */
    bind(el, binding) {
        console.log("进入指令")
        //将value（想要复制的内容）定义为全局变量
        el.$value = binding.value;
        //对传入指令的值进行逻辑判断
        el.handler = () => {
            console.log(binding.arg)
            if (!el.$value) {
                // Message('无复制内容');
            } else {
                //根据传入的arg参数判断是点击按钮复制目标文本框内容还是输入框自动复制
                if (binding.arg === "input") {
                    //创建一个输入框用来保存传入的即将复制的内容并且隐藏到视口之外
                    const input = document.createElement('input');
                    input.readOnly = 'readOnly';
                    input.style.position = 'absolute';
                    input.style.left = '-9999px';
                    //将复制内容赋值给隐藏的输入框
                    input.value = el.$value;
                    //将DOM节点添加至DOM树
                    document.body.appendChild(input);
                    //选中值
                    input.select();
                    //复制上方选中的内容
                    document.execCommand('selectAll');
                    const res = document.execCommand('copy');
                    //删除当前选中的内容
                    // document.execCommand('delete');
                    if (res) {
                        // Message('复制成功');
                        //复制成功将隐藏的输入框节点移除
                        document.body.removeChild(input);
                    }
                } else if (binding.arg === "button") {
                    console.log("按钮点击了")
                    const input = document.createElement('input');
                    input.readOnly = 'readOnly';
                    input.style.position = 'absolute';
                    input.style.left = '-9999px';
                    input.value = el.$value;
                    document.body.appendChild(input);
                    input.select();
                    const res = document.execCommand('Copy');
                    if (res) {
                        console.log("成功")
                        Notify({ type: 'success', message: '复制成功' });
                        //复制成功将隐藏的输入框节点移除
                        document.body.removeChild(input);
                    }
                }
            }
        }
        if (binding.arg === "input") {
            //监听触发指令事件（不限制于点击事件）
            el.addEventListener('blur', el.handler)
        } else if (binding.arg === "button") {
            el.addEventListener('click', el.handler)
        }
    },
    //指令传入的值更新时触发
    componentUpdated(el, binding) {
        el.$value = binding.value;
    },
}


//指令-正则验证表单
const reg = {
    bind(el, binding) {
        console.log(el, binding, "指令接到的值")
        el.handler = () => {
            console.log(el.$value, "传入新的值")
            if (!el.$value) {
                Notify({ type: 'danger', message: '当前为必填项' });
                    // el.focus();
            } else {
                if (!(/^1[3456789]\d{9}$/.test(el.$value))) {
                    Notify({ type: 'danger', message: '手机号码格式有误' });
                    // el.focus();
                }
            }
        }
        el.addEventListener('blur', el.handler)
    },
    //指令传入的值更新时触发
    componentUpdated(el, binding) {
        console.log(binding, "指令更新的钩子函数")
        el.$value = binding.arg;
    },
}

export {
    copy,
    reg
} 