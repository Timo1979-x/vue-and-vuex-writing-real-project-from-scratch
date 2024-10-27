<template>
  <!-- <div>Here comes sharable validation errors {{ validationErrors }}</div> -->
  <ul class="error-messages">
    <li v-for="e in errorMessages" :key="e">{{ e }}</li>
  </ul>
</template>

<script>
export default {
  name: 'McvValidationErrors',
  props: {
    validationErrors: { type: Object, required: true },
  },
  computed: {
    errorMessages() {
      let result = [];
      for (let key of Object.keys(this.validationErrors)) {
        result.push(this.validationErrors[key].join(', '));
      }
      return result;
    },
  },
};
</script>
