<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Signup</h1>
          <div class="text-xs-center">
            <router-link :to="{ name: 'login' }">Need an account?</router-link>
            VALIDATION ERRORS
            <form @submit.prevent="onSubmit">
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="username" />
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input type="password" class="form-control form-control-lg" placeholder="Password" />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
  methods: {
    onSubmit() {
      console.log('form submitted');
      // this.$store.commit('registerStart');
      this.$store
        .dispatch('register', {
          email: 'a1@a.com',
          username: 'Tim1`',
          password: '123456aaaeee',
        })
        .then((user) => {
          console.log('successfully registered user ', user);
        });
    },
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
  },
};
</script>
