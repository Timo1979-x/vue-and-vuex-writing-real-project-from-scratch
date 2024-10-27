import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
  },
  registerSuccess(state, user) {
    state.isSubmitting = false;
  },
  registerFailure(state) {
    state.isSubmitting = false;
  },
};

const actions = {
  register(ctx, creds) {
    return new Promise((resolve, reject) => {
      ctx.commit('registerStart');
      authApi
        .register(creds)
        .then((r) => {
          console.log(r);
          const user = r.data.user;
          ctx.commit('registerSuccess', user);
          resolve(user);
        })
        .catch((e) => {
          ctx.commit('registerFailure', e.response.data.errors);
          console.log('Error', e);
        });
    });
    // setTimeout(() => {
    //   context.commit('registerStart');
    // }, 1000);
  },
};

export default { state, mutations, actions };
