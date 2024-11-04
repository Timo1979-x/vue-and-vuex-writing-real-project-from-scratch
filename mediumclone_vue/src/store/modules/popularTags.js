import popularTagsApi from '@/api/popularTags'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getPopularTagsStart: '[popularTags] getPopularTagsStart',
  getPopularTagsSuccess: '[popularTags] getPopularTagsSussess',
  getPopularTagsFailure: '[popularTags] getPopularTagsFailure',
}

export const actionTypes = {
  getPopularTags: '[popularTags] getPopularTags',
}

const mutations = {
  [mutationTypes.getPopularTagsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getPopularTagsFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getPopularTags](ctx) {
    return new Promise((resolve, reject) => {
      ctx.commit(mutationTypes.getPopularTagsStart)
      popularTagsApi
        .getPopularTags()
        .then((tags) => {
          ctx.commit(mutationTypes.getPopularTagsSuccess, tags)
          resolve(tags)
        })
        .catch((e) => {
          console.log('error', e)
          ctx.commit(mutationTypes.getPopularTagsFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
