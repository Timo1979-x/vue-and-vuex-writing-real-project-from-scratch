<template>
  <div>
    <div v-if="isLoading">Loading {{ apiUrl }}</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="feed">
      <div class="article-preview" v-for="(a, i) in feed.articles" :key="i">
        <div class="article-meta">
          <router-link :to="{ name: 'userProfile', params: { slug: a.author.username } }">
            <img :src="a.author.image" />
          </router-link>
          <div class="info">
            <router-link :to="{ name: 'userProfile', params: { slug: a.author.username } }" class="author">{{
              a.author.username
            }}</router-link>
            <span class="date">{{ a.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
            Add to favourites
          </div>
        </div>
        <router-link :to="{ name: 'article', params: {slug: a.slug}}" class="preview-link">
          <h1>{{ a.title }}</h1>
          <p>{{ a.description }}</p>
          <span>read more...</span>
          TAG LIST
        </router-link>
      </div>
      PAGINATION
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/feed'

export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapState({
      feed: (state) => {
        console.log('updating feed', state.feed)
        return state.feed.data
      },
      isLoading: (state) => state.feed.isLoading,
      error: (state) => state.feed.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl })
  },
}
</script>
