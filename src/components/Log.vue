<template>
  <Form ref="form" :model="user" :rules="rule" inline label-position="right" :label-width="75" >
    <FormItem label="用户名:" prop="username">
      <Input type="text" v-model="user.username" placeholder="请输入用户名" style="width: 220px"/>
    </FormItem>
    <FormItem label="密码:" prop="password">
      <Input type="password" v-model="user.password" placeholder="请输入密码"style="width: 220px" />
    </FormItem>
    <FormItem>
      <Button type="primary" size="large"  style="float: left" @click="handleLogin(entity)">登陆</Button>
      <Button type="text">忘记密码？</Button>
      <Button type="success" size="large"  style="float: left;margin-left: 10px">注册</Button>
    </FormItem>
  </Form>
</template>

<script>
  import API from '../api/user.js'
    export default {
        name: "Log",
        data(){
          return{
            user:{},
            rule:{
              username:[
                {required:true,message:'用户名不能为空',trigger: 'blur'},
                {min:2,max:18,message:'字数在2-18个之间',trigger:'blur'}
                ],
              password:[
                {required:true,message:'密码不能为空',trigger: 'blur'},
                {min:6,max:18,message:'字数在6-18个之间',trigger:'blur'}
              ]
            }
          }
        },
        methods:{
          handleLogin(entity){
            this.$refs['form'].validate((valid)=>{
              if (!valid){
                return
              }
            API.login(entity)
              .then(response=>{
                if (response.data.error == 0) {
                  this.$store.commit('login',response.data.obj)
                }
                else{
                  this.Message.warning('账户密码错误')
                }
              })
              .catch(response=>{
                this.$Message.error("服务器未知错误")
            })
            })
          }

        }
    }
</script>

<style scoped>

</style>
