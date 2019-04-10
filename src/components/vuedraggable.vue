<template>
  <div>
    <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>

  </div>
</template>

<script>
export default {
  data() {
    return {
      myArray: [
        {
          id: '1111111',
          name: '第一个模块啦'
        }, {
          id: '222343',
          name: '第er个模块啦'
        }, {
          id: '3333333',
          name: '第san个模块啦'
        }, {
          id: '44444444',
          name: '第四个模块啦'
        }
      ]
    }
  }
}
</script>
