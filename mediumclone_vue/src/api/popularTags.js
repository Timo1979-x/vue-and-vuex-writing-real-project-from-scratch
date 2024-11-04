import axios from 'axios'

const getPopularTags = () => axios.get('/tags').then((r) => r.data.tags)

export default { getPopularTags }
