<template>
  <Row style="height: 100%;width: 100%">
   <!-- <Spin size="large" fix class="demo-spin-container"></Spin>-->
    <Row >
      <Col span="24">
      <Carousel v-model="value1" loop autoplay style="height: 350px">
        <CarouselItem v-for="item,index in carouseItems" :key="index">
          <div class="demo-carousel">
            <img class="carouseImg" :src="$basePath + item.img" >
          </div>
        </CarouselItem>
      </Carousel>
      </Col>
    </Row>
    <Row class="InfoPane">
      <div class="Label"><h2>热门歌曲</h2></div>
      <Carousel v-model="value2" loop >
        <CarouselItem v-for="index in 2">
          <div class="music-card">
            <Row class="rows" :gutter="36"  v-for="row in 3">
              <Col span="8" v-for="col in 3"class="cols" v-if="HotSongs[(3*(row-1) + col-1) + 9*(index-1)]">
                <a class="img" :style="'background: url(http://localhost:8080/project/img/'+HotSongs[(3*(row-1) + col-1) + 9*(index-1)].img+') no-repeat;background-size: cover'"
                   @click="handlePlay(HotSongs[(3*(row-1) + col-1) + 9*(index-1)].id)">
                </a>
                <div class="info">
                  <a href="#"><h3>{{HotSongs[(3*(row-1) + col-1) + 9*(index-1)].name}}</h3></a>
                  <span>{{HotSongs[(3*(row-1) + col-1) + 9*(index-1)].sname}}</span>
                </div>
                <div class="play-button"><Button type="ghost" shape="circle" icon="play" @click="handlePlay(HotSongs[(3*(row-1) + col-1) + 9*(index-1)].id)"></Button></div>
              </Col>
            </Row>
          </div>
        </CarouselItem>
      </Carousel>
      <div class="Label"><h2>热门歌手</h2></div>
      <div class="box2">
        <Row>
          <Button href="#" style="float: right;margin-right: 20px;font-family: 'Meiryo UI'" type="text">更多</Button>
        </Row>
        <Row style="height: 100%">
          <Col :span="4" v-for="item,index in HotSingers" style="height: 200px;margin: 10px auto;background-color: #f8f8f8;border-bottom: 1px solid #e9e9e3" :key="index">
            <img class="singerImg" :src="$basePath + item.img" alt="" ></img>
            <h2>{{HotSingers[index].name}}</h2>
          </Col>
        </Row>
      </div>
    </Row>
  </Row>

</template>
<script>
  import API from '.././api/home.js'
  import bus from '@/common/evenBus.js'
  export default {
    data () {
      return {
        value1: 0,
        value2: 0,
        carouseItems:[],
        HotSongs:[],
        HotSingers:[]
      }
    },
    methods:{

      HandleCarouselItems(){
        API.getCarouselItems()
          .then(response=>{
            this.carouseItems = Object.assign([],response.data)
          })
      },
      HandleHotSongList(){
      API.getHotSongList()
        .then(response=>{
          this.HotSongs = Object.assign([],response.data)
        })
      },
      HandleHotSingerList(){
        API.getHotSingerList()
          .then(response=>{
            this.HotSingers = Object.assign([],response.data)
          })
      },
      handlePlay(id){
        API.getMusicItem(id)
          .then(response=>{
            console.log(response.data.obj)
              bus.$emit("addMusic",response.data.obj)
          })
          .catch(response=>{
              this.$Message.error('服务器未知错误！')
          })
      }
    },
    created(){
      this.HandleCarouselItems();
      this.HandleHotSingerList();
      this.HandleHotSongList();
    }
  }
</script>
<style>
  .singerImg{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 12px;
  }
  .play-button{
    float: right;
    margin-right: 35px;
    margin-top: 25px;
  }
  .info{
    float: left;
    margin-left: 15px;
    margin-top: 10px;
  }
  .cols{
    height: 84px;
    border-bottom: 1px solid #dddddd;
    background-color: #ededed;
  }
  .img{
    height: 84px;
    width: 84px;
    float: left;
  }
  .rows{
    height: 30%;
    margin-top: 1%;
  }
  .music-card{
    height: 320px;
    width: 88%;
    margin: 0 auto;
  }
  .demo-carousel{
    background-color: white;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .InfoPane{
    margin: 0.5%;
    background-color: white;
    height: 400px;
    min-height: 400px;
    overflow-y: auto;
  }
  .box2{
    height: 210px;
  }
  .Label{
    margin-top: 1%;
  }
  .demo-spin-container{
    display: inline-block;
    border: 1px solid #eee;
    position: relative;
  }
  .carouseImg{
    width: 700px;
    height: 325px;
  }

</style>
