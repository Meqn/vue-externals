<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <test />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@comp/test.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Test
  }
}
</script>
