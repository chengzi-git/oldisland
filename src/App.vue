<template>
  <div class="warpper">
    <div class="container">
      <router-link tag="span" to="/"></router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  <!-- <div class="container">
    <div class="container-title">
      <ul class="class-ul">
        <li class="class-item" v-for="(item,index) in classfiy" :key="item.classid"
         @click="getClass(item.list,index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="container-box" ref="menuWrapper">
      <div>
        <span class="container-box-item" v-for="(item,ind) in list" :key="ind">{{item.name}}</span>
      </div>
    </div>
  </div> -->
</template>
// <script>
// import BScroll from "better-scroll";
// export default {
//   data() {
//     return {
//       classfiy:"",
//       list:[],
//       ind:0
//     }
//   },
//   methods: {
//     getClass(item,index){
//       this.list = item
//       this.ind = index
//       console.log(this.list)
//     },
//     initalScroll(){
//       if (!this.menuScroller) {
//         // 避免内存泄漏，当menuScroller已经被创建时无需再实例化新的BScroll对象
//         this.menuScroller = new BScroll(this.$refs.menuWrapper, {
//           click: true
//         });
//       } else {
//         this.menuScroller.refresh();
//       }
//     }
//   },
//   mounted() {
//     this.axios("api/recipe/class?appkey=7abf24f6809ecf15").then(res => {
//       this.classfiy=res.data.result
//       console.log(this.classfiy);
//       this.$nextTick(() => {
//           this.initalScroll();
//         });
//       if(this.list==""){
//         this.list=this.classfiy[0].list
//       }
//     });
//   }
// };
// </script>
// <style lang="scss" scoped>
// .container{
//   width: 100vw;
//   height: 100vh;
//   .container-title{
//     width: 80px;
//     height: 100%;
//   }
//   .class-ul{
//     width: 100%;
//     height: 100%;
//     list-style: none;
//     background-color: #eee;
//     .class-item{
//       height: 40px;
//       line-height: 40px;
//       text-align: center
//     }
//   }
//   .container-box{
//     height: 100vh;
//     position: fixed;
//     left: 80px;
//     top: 0;
//     text-align: center;
//     .container-box-item{
//       display: inline-block;
//       width: 80px;
//       height: 40px;
//     }
//   }
// }
// </style>

