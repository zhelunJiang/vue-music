<template>
  <div>
    <Row class="row1" >
      <Col span="2" style="margin-top: 20px"><h3>类别:</h3></Col>
      <Col span="22">
        <div class="tag" v-for="item in 20">
          <Button type="text" >tag</Button>
        </div>
      </Col>
    </Row>
    <Row class="row2">
      <div class="itemBox" v-for="item in 20"></div>
    </Row>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tagList:{},
        songList:{}
      }
    }
  }
</script>

<style scoped>
  .itemBox{
    border-bottom: 1px solid #e4e4de;
    height: 105px;
    min-width: 200px;
    width: 23.5%;
    margin: 10px;
    float: left;
  }
  .tag{
    background-color: aliceblue;
    margin-top: 20px;
    margin-right: 30px;
    float: left;
    overflow-y: auto;
  }
  .row1{
    border-bottom: 1px solid #e7e7e1;
    margin-top: 20px;
    height: 200px;
  }
  .row2{
    background-color: aliceblue;
    min-height: 550px;
    height: 550px;
    overflow-y: auto;
  }
</style>
