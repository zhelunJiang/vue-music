<template>
    <div>
      <Row>
        <Form  :model="entity" :rules="ruleValidate" :label-width="80">
        <Col span="8">
            <FormItem label="昵称" prop="nickname">
              <Input v-model="entity.nickname" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="E-mail" prop="email">
              <Input v-model="entity.email" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="电话" prop="phone">
              <Input v-model="entity.phone" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="性别" prop="gender">
              <RadioGroup v-model="entity.gender"   style="float: left">
                <Radio label="male">女</Radio>
                <Radio label="female">男</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="签名" prop="sign">
              <Input v-model="entity.sign" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."  ></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSwitch()">修改信息</Button>
              <Button type="ghost" @click="handleReset('entity')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Col>
        </Form>
      </Row>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        switch: 'true',
        entity: {
          nickname: '',
          email: '',
          phone:1,
          gender: '',
          sign: ''
        },
        ruleValidate: {
          nickname: [
            { required: true, message: '昵称不能为空', trigger: 'blur' },
            { type: 'string', min: 4, message: '最不能少于2个字', trigger: 'blur'},
            { type: 'string', max: 24, message: '最大不能超过12个字', trigger: 'blur'}
          ],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '手机不能为空', trigger: 'blur' },
            { type: 'number', message: '手机格式错误', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          sign: [
            { type: 'string', max: 300, message: '最大不能超过150个字', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSwitch(){
        this.switch = '1';
        alert(this.switch)
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style scoped>
  .upload-img{
    margin:  15px auto;
    height: 256px;
    width: 256px;
    background-color: azure;
    border-radius: 50%;
  }
</style>
