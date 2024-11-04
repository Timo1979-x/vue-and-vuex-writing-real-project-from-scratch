import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getFeedStart: '[feed] getFeedStart',
  getFeedSuccess: '[feed] getFeedSussess',
  getFeedFailure: '[feed] getFeedFailure',
}

export const actionTypes = {
  getFeed: '[feed] getFeed',
}

const mutations = {
  [mutationTypes.getFeedStart](state) {
    state.isLoading = true
    state.data = null
    // state.error = null
  },
  [mutationTypes.getFeedSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
    // state.error = null
  },
  [mutationTypes.getFeedFailure](state) {
    state.isLoading = false
    // state.data = null
    // state.error = null
  },
}

const actions = {
  [actionTypes.getFeed](ctx, { apiUrl }) {
    return new Promise((resolve, reject) => {
      ctx.commit(mutationTypes.getFeedStart)
      return feedApi
        .getFeed(apiUrl)
        .then((r) => {
          ctx.commit(mutationTypes.getFeedSuccess, r.data)
          resolve(r.data)
        })
        .catch((e) => {
          console.log('error', e)
          ctx.commit(mutationTypes.getFeedFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
