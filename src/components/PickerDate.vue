<template>
  <div>
    <h1>picker Date</h1>
    
    <VueCtkDateTimePicker v-model="dateTime" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: ''
    }
  }
}
</script>

