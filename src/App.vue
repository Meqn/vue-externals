<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/mandui">mand UI</router-link> |
      <router-link to="/axios">axios</router-link> |
      <router-link to="/swiper">swiper</router-link> |
      <router-link to="/draggable">vuedraggable</router-link> |
      <router-link to="/pickerDate">PickerDate</router-link> |
      <router-link to="/vchart">V-chart</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
