<!--
 * @Author: your name
 * @Date: 2020-06-29 14:44:06
 * @LastEditTime: 2020-06-30 17:05:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personlzx\src\App.vue
--> 
<template>
  <div id="app">
    <!-- <div class="demo1" style="margin-bottom:20px;">
      <span>输入后失去焦点自动复制</span>
      <input type="text" v-copy:[type]="content" v-model="ccc" @input="change">
    </div> -->
    <!-- <div class="demo1">
      <textarea name="" id="" cols="30" rows="10" v-model="textContent"></textarea>
      <button  v-copy:[type]="content"  @click.stop="copyText">复制</button>
    </div> -->
    <!-- <input v-reg:[phone] v-model="phone" /> -->
    <el-input v-reg:[phone] v-model="phone"></el-input>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content:"", 
      ccc:"",
      type:"button",
      textContent:"",
      phone:"",
      regType:'phone'
    }
  },
  methods:{
    change(){
      this.content = this.ccc;
    },
    copyText(){
        this.content = this.textContent;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.onediv{
  width: 100px;
  height: 100px;
  background: red;
}
.demo1{
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.inputdemo{
  width: 50%;
}
</style>
