<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Signup</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">Need an account?</router-link>
          </p>
          <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors"/>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="username" v-model="username" />
            </fieldset>
            <fieldset class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Email" v-model="email" />
            </fieldset>
            <fieldset class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors.vue';
import { actionTypes } from '@/store/modules/auth';
export default {
  name: 'McvRegister',
  data() {
    return {
      email: 'a2@a.com',
      username: 'Tim2',
      password: '123123123',
    };
  },
  methods: {
    onSubmit() {
      console.log('form submitted');
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((user) => {
          console.log('successfully registered user ', user);
          this.$router.push({ name: 'home' });
        });
    },
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors;
    }
  },
  components: { McvValidationErrors },
};
</script>
