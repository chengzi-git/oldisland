<template>
  <div class="warpper">
    <Header/>
    <List/>
    <Banner/>
    <Install/>
    <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header'
import List from '../components/List'
import Banner from '../components/Banner'
import Install from '../components/Install'
import Footer from '../components/Footer'
export default {
  components:{
    Header,
    List,
    Banner,
    Install,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.warpper{
  background: #f0f0f0;
}
</style>

