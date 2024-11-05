import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getArticleStart: '[article] getArticleStart',
  getArticleSuccess: '[article] getArticleSuccess',
  getArticleFailure: '[article] getArticleFailure',
}

export const actionTypes = {
  getArticle: '[article] getArticle',
}

const mutations = {
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getArticleFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getArticle](ctx, { slug }) {
    return new Promise((resolve, reject) => {
      ctx.commit(mutationTypes.getArticleStart, slug)
      articleApi
        .getArticle(slug)
        .then((article) => {
          ctx.commit(mutationTypes.getArticleSuccess, article)
          resolve(article)
        })
        .catch((e) => {
          console.log('error', e)
          ctx.commit(mutationTypes.getArticleFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
