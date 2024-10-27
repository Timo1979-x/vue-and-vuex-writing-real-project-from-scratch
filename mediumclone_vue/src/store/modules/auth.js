import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage';

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
};

export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailure: '[auth] registerFailure',
  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSuccess',
  loginFailure: '[auth] loginFailure',
};

export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
};

const mutations = {
  [mutationTypes.registerStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.registerSuccess](state, user) {
    state.isSubmitting = false;
    state.currentUser = user;
    state.isLoggedIn = true;
  },
  [mutationTypes.registerFailure](state, errors) {
    state.isSubmitting = false;
    state.validationErrors = errors;
  },
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.loginSuccess](state, user) {
    state.isSubmitting = false;
    state.currentUser = user;
    state.isLoggedIn = true;
  },
  [mutationTypes.loginFailure](state, errors) {
    state.isSubmitting = false;
    state.validationErrors = errors;
  },
};

const actions = {
  [actionTypes.register](ctx, creds) {
    return new Promise((resolve, reject) => {
      ctx.commit(mutationTypes.registerStart);
      authApi
        .register(creds)
        .then((r) => {
          const user = r.data.user;
          ctx.commit(mutationTypes.registerSuccess, user);
          setItem('accessToken', user.token);
          resolve(user);
        })
        .catch((e) => {
          ctx.commit(mutationTypes.registerFailure, e.response.data.errors);
        });
    });
  },
  [actionTypes.login](ctx, creds) {
    return new Promise((resolve, reject) => {
      ctx.commit(mutationTypes.loginStart);
      authApi
        .login(creds)
        .then((r) => {
          const user = r.data.user;
          ctx.commit(mutationTypes.loginSuccess, user);
          setItem('accessToken', user.token);
          resolve(user);
        })
        .catch((e) => {
          ctx.commit(mutationTypes.loginFailure, e.response.data.errors);
        });
    });
  },
};

export default { state, mutations, actions };
