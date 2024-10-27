import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage';

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state, user) {
    state.isSubmitting = false;
    state.currentUser = user;
    state.isLoggedIn = true;
  },
  registerFailure(state, errors) {
    state.isSubmitting = false;
    state.validationErrors = errors;
  },
};

const actions = {
  register(ctx, creds) {
    return new Promise((resolve, reject) => {
      ctx.commit('registerStart');
      authApi
        .register(creds)
        .then((r) => {
          const user = r.data.user;
          ctx.commit('registerSuccess', user);
          setItem('accessToken', user.token);
          resolve(user);
        })
        .catch((e) => {
          ctx.commit('registerFailure', e.response.data.errors);
        });
    });
    // setTimeout(() => {
    //   context.commit('registerStart');
    // }, 1000);
  },
};

export default { state, mutations, actions };
