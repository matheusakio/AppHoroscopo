import axios from 'axios'

const instance = axios.create({
  baseURL: "https://apiv2.resolvaclub.com/api/horoscope"
})

export default instance;