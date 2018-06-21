<template>
  <div>
    <Row style="margin-bottom: 20px">
      <Col span="2"><Button type="success" icon="plus-round">新建收藏夹</Button></Col>
      <Col span="2"><Button type="primary" icon="plus-round">批量删除</Button></Col>
    </Row>
    <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" height="435" size="large"> </Table>
  </div>
</template>

<script>
  var data =[{
    name:'我的歌单1',
    number:20
  }]
  export default {
    data(){
      return{
        data1:data,
        columns1: [
          {
            title: '歌单名称',
            key: 'name',
            render:(h,params)=>{
              return h('Button',{
                props: {
                  type:'text'
                } ,
                on:{
                  click(){
                      //事件
                   }
                }
              },params.row.name)
            }
          },
          {
            title: '歌曲数目',
            key: 'number'
          },
          {
            title: '创建时间',
            key: 'create'
          },
          {
            title: '操作',
            key: 'action',
            width: 300,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    shape:"circle",
                    type: 'primary',
                    icon: "play",
                    size: 'large'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'large',
                    shape:'circle',
                    icon:'close'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }),
                h('Button', {
                  props: {
                    type: 'success',
                    size: 'large',
                    shape:'circle',
                    icon:'edit'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                })
              ]);
            }
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
