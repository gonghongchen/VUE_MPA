<template>
  <div>
    <div>
      <h1>index2</h1>
      <button @click="$router.push('/desc')">跳转到desc页面</button>
      <button @click="jump()">跳转到index1项目首页</button>
    </div>
    <img alt="Vue logo" src="@index2_assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@index2_components/HelloWorld.vue'

export default {
  name: 'index',
  components: {
    HelloWorld
  },
  methods: {
    jump() {
      location.href = process.env.BASE_URL
    }
  },
}
</script>
