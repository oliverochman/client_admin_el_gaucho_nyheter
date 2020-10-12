import axios from 'axios'
import headers from './headers'

const Articles = {
  async create(title, content) {
    try {
      let result = await axios.post("/articles", {
        article: {
          title: title,
          content: content
        }
      }, {
        headers: headers()
      })  

      return result.data.message
    } catch(error) {
      console.log(error.response.data)
    }
  }
}

export default Articles