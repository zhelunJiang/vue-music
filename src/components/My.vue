<template>
  <div class="main">
    <Row class="imgBox">
      <Col style="margin: 0 auto">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <div class="userImg"></div>
        </Upload>
        <h2>{{entity.nickname}}</h2>
      </Col>
    </Row>
    <Row class="content">
      <Col span="24">
        <Tabs>
          <TabPane label="我的收藏" icon="social-windows">
            <my-collection></my-collection>
          </TabPane>
          <TabPane label="我喜欢" icon="social-windows" disabled>
          </TabPane>
          <TabPane label="播放历史" icon="social-tux">
            <play-history></play-history>
          </TabPane>
          <TabPane label="上传歌曲" icon="social-tux">
            <my-upload></my-upload>
          </TabPane>
          <TabPane label="粉丝与关注" icon="social-tux">
            <fans-and-fucos></fans-and-fucos>
          </TabPane>
          <TabPane label="我的信息" icon="social-tux">
            <my-info></my-info>
          </TabPane>
        </Tabs>
<!--        <router-view></router-view>-->
      </Col>
    </Row>
  </div>
</template>

<script>
  import MyCollection from './MyCollection'
  import PlayHistory from './PlayHistory'
  import MyUpload from './MyUpload'
  import FansAndFucos from './FansAndFucos'
  import MyInfo from './MyInfo'
    export default {
        components:{
          MyCollection,
          PlayHistory,
          MyUpload,
          FansAndFucos,
          MyInfo
        },
      data(){
          return{
            entity:{}
          }
      }
    }
</script>

<style scoped>
  .userImg{
    margin: 5px auto;
    background-color: chartreuse;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
.main{
  height: 100%;
  width: 100%;
}
  .imgBox{
    width: 100%;
    height: 30%;
    background-color: aliceblue;
  }
</style>
