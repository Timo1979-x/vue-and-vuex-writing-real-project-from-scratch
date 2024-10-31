<template>
  <div>
    <div v-if="isLoading">Loading {{ apiUrl }}</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="feed">
      <mcv-pagination :total="feed.articlesCount" :current-page="currentPage" :limit="limit" :url="baseUrl" />

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
          <div class="pull-xs-right">Add to favourites</div>
        </div>
        <router-link :to="{ name: 'article', params: { slug: a.slug } }" class="preview-link">
          <h1>{{ a.title }}</h1>
          <p>{{ a.description }}</p>
          <span>read more...</span>
          TAG LIST
        </router-link>
      </div>
      <mcv-pagination :total="feed.articlesCount" :current-page="currentPage" :limit="limit" :url="baseUrl" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/feed'
import McvPagination from '@/components/Pagination.vue'
import { limit } from '@/helpers/vars'
import qs from 'query-string'

export default {
  name: 'McvFeed',
  data() {
    return {
      limit,
      url: '/',
    }
  },
  props: {
    apiUrl: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapState({
      feed: (state) => {
        return state.feed.data
      },
      isLoading: (state) => state.feed.isLoading,
      error: (state) => state.feed.error,
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset() {
      return (this.currentPage - 1) * limit
    }
  },
  mounted() {
    this.fetchFeed()
  },
  methods: {
    fetchFeed() {
      const parsedUrl = qs.parseUrl(this.apiUrl)
      let newParams = {
        ...parsedUrl.query,
        limit,
        offset: this.offset
      }
      this.$store.dispatch(actionTypes.getFeed, { apiUrl: `${parsedUrl.url}/?${qs.stringify(newParams)}` })
    },
  },
  watch: {
    currentPage(newPage, oldPage) {
      this.fetchFeed()
    },
  },
  components: { McvPagination },
}
</script>
