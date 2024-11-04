<template>
  <div>
    <div v-if="isLoading">Loading tags...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="popularTags" class="sidebar">
      <p>Popular tags</p>
      <div class="tag-list">
        <router-link v-for="tag in popularTags" :key="tag" :to="{ name: 'tag', params: { slug: tag } }" class="tag-default tag-pill">
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/popularTags'

export default {
  name: 'McvPopularTags',
  data() {
    return {}
  },
  props: {
    limit: {
      required: false,
      type: Number,
      default: 10,
    },
  },
  computed: {
    // popularTags() {
    //   let tags = this.$store.state.popularTags.data
    //   if (!tags) return null
    //   tags = tags.slice(0, this.limit)
    //   return tags
    // },
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
      popularTags: (state) => state.popularTags.data,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  },
}
</script>
