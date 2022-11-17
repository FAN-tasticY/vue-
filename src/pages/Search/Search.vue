<template>
  <div>
    我是杨帆呀:
    <br>
    我所在的班级是:{{keyword}}
    <br>
    我喜欢的人是:{{this.$route.query.content}}
  </div>
</template>

<script>
export default {
  props:['keyword']
}
</script>

<style>

</style>