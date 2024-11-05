import axios from './axios'

const getArticle = (slug) => axios.get(`/articles/${slug}`).then((r) => r.data.article)

export default {
  getArticle,
}
