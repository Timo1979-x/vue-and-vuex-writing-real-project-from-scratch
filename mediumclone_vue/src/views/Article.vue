<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }">
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }">
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <span>
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{ name: 'editArticle', params: { slug: this.slug } }"
            >
              <i class="ion-edit" />
              Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i>
              Delete article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <mcv-loading v-if="isLoading" />
      <mcv-error-message v-if="error" :message="error" />
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          TAGLIST
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from '@/store/modules/article'
import McvLoading from '@/components/Loading.vue'
import McvErrorMessage from '@/components/ErrorMessage'
import { mapState } from 'vuex'

export default {
  name: 'McvArticle',
  // data() {
  //   return {
  //     article: null,
  //   }
  // },
  computed: {
    ...mapState({
      article: (state) => state.article.data,
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
    }),
    slug() {
      return this.$route.params.slug
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle, { slug: this.slug })
  },
  components: { McvLoading, McvErrorMessage },
}
</script>
