<template>
  <div id="app">
    <div id="nav">
      <div class="img"><img src="./assets/logo.png" alt=""></div>
      <router-link to="/" class="s">首页</router-link>
      <router-link to="/qxlp" class="s">全新楼盘</router-link>
      <router-link to="/eslp" class="s">二手楼盘</router-link>
      <router-link to="/qxsp" class="s">全新商铺</router-link>
      <router-link to="/lsdt" class="s">楼市动态</router-link>
      <router-link to="/lxwm" class="s">联系我们</router-link>
      <Dianhua></Dianhua>
    </div> 
    <router-view/>
   
  </div>
</template>


<script>

import Dianhua from './components/dianhua.vue'

export default {
  methods:{

  },
  components: {
    Dianhua
  }
}
</script>


<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.img{
  float: left;
  margin-right: 20px;
  margin-left: 5%;
}
#nav {
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  line-height: 100px;
  float: left;
}
#nav img{
  display: inline-block;
  vertical-align: middle;
}
.s{
  padding: 0 20px;
  float: left;
}
.s:nth-of-type(1){
  margin-left: 7%;
  text-decoration: none;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
