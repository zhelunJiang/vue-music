import curd from './curd.js'
import axios from './axio_config.js'

export default ({
  ...curd("project/nice-music/home/"),
  getHotSongList(){
    return axios({
      method:'GET',
      url:'project/nice-music/home/getHotSongs',
    })
  },
  getHotSingerList(){
      return axios({
        method:'GET',
        url:'project/nice-music/home/getHotSingers',
      })
  },
  getCarouselItems(){
    return axios({
      method:'GET',
      url:'project/nice-music/home/getCarouselItems',
    })
  },
  getMusicItem(id){
    return axios({
      method:'GET',
      url:'project/nice-music/home/getVo',
      params:{
        id,
      }
    })
  }
})
