<template>
  <div>Feed {{ apiUrl }}</div>
</template>

<script>
import { actionTypes } from '@/store/modules/feed'

export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl })
  },
}
</script>
