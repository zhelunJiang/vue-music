<template>
  <Menu active-name="Home" theme="dark" width="auto"  @on-select="handleSelect">
    <MenuItem :name="item.title" v-for="item in root" >
      <Icon :type="item.icon"></Icon>
      <span>{{item.title}}</span>
    </MenuItem>
  </Menu>
</template>

<script>
    export default {
        data(){
          return{
            root:[
              {
                path:'/home',
                title:'Home',
                icon:'document-text'
              }
              ,
              {
                path:'/find',
                title:'Find',
                icon:'chatbubbles'
              }, {
                path:'/rank',
                title:'Rank',
                icon:'heart'
              },{
                path:'/my',
                title:'My',
                icon:'heart-broken  '
              }
            ]
          }
        },
      methods:{
        handleSelect(e){
          e = e.toLowerCase()
          this.$router.push(e);
        }
      }
    }
</script>

<style scoped>

</style>
