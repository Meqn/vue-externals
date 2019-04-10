<template>
  <h1>Axios测试</h1>
</template>

<script>
export default {
  mounted() {
    this.$http({
      method: 'get',
      url: 'http://test.portal.hwariot.com/api-base/api/v1/unsigned/app-version/latest/'
    }).then((res) => {
      console.log('result: ', res)
    }).catch((err) => {
      console.error(err)
    })
  }
}
</script>

