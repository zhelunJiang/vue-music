import axios from './axio_config.js'

export default ({
  login(entity){
    return axios({
      method:'POST',
      url:'project/nice-music/user/login',
      data:{
        entity
      }
    })
  }
})
