
<template>
  <div class="layout">
    <Modal
      width="350"
      v-model="modal"
      title="请登陆"
    >
      <log ref="log"></log>
      <div slot="footer">
      </div>
    </Modal>
    <Layout style="height: 100%">
      <Sider  hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu></Menu>
      </Sider>
      <Layout style="height: 100%">
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '1% 1% 0',float: 'left'}" type="navicon-round" size="24"></Icon>
          <Avatar shape="square" icon="person" size="large" class="icon"  v-if="user"/>
          <Button shape="circle" type="success"  class="icon" v-else @click="handleLoginDialog">登陆</Button>
        </Header>

        <Content :style="{margin: '0.5%', minHeight: '260px'} " class="content">
          <router-view></router-view>
        </Content>
        <div class="footer">
        <APlayer  :music="music" :list="musics"  :listFolded="false" listMaxHeight="150px"  repeat="list" :showLrc="true" autoplay/>
        </div>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import bus from '@/common/evenBus.js'
  import Menu from './Menu'
  import APlayer from 'vue-aplayer'
  import Log from './Log'
  export default {
    components:{
      Menu,
      APlayer,
      Log
    },
    data () {
      return {
        modal:false,
        user:null,
        songList:[],
        listMaxHeight:'300px',
        controls:true,
        theme:'',
        isCollapsed: false,
        musics: [],
        music:{},
      }
    },
    created(){
      var _this = this
      bus.$on('addMusic',data=> {
        var musicItem ={
          id:'',
          src:'',
          title:'',
          artist:'',
          pic:'',
          lrc:''
        }
        musicItem.id = data.id
        musicItem.src =this.$baseMusicFile + data.path
        musicItem.pic = this.$basePath + data.img
        musicItem.lrc = this.$baseMusicFile + data.lyc
        musicItem.title = data.name
        musicItem.artist = data.sname
        _this.musics.push(musicItem);
        _this.music = Object.assign({},musicItem)
      })
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      handleLoginDialog(){
        this.modal = true;
      },
    }
  }
</script>
<style>
  .icon{
    float: right;
    margin-right: 10%;
    margin-top: 10px;
  }
 /* .aplayer-info{

    padding-bottom: 10px !important;
  }

  .aplayer-body{
   height: 100%;

  }*/

 .aplayer-info{
   padding-bottom: 10px !important;
   height: 100px !important;
 }
 .aplayer-pic{
   height: 100px !important;
   width: 100px !important;
 }
  .content{
    height: 82%;
    width: 100%;
  }
  .footer{
    z-index:999;

  }
  .layout{
    height: 100%;
    width: 100%;
    border: 1px solid #d7dde4;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    min-width: 1300px;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    height: 7%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .ivu-icon ivu-icon-navicon-round menu-icon{
    float: left;
  }
</style>
