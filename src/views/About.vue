<template>
  <div class="about">
    <h1>每日一句</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res:this.$route.params.name
    }
  },
}
</script>
