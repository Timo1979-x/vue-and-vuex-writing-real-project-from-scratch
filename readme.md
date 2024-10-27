## Что это
Прохождение курса [Vue JS и Vuex - пишем реальный проект с нуля](https://www.udemy.com/course/vue-and-vuex-writing-real-project-from-scratch/?couponCode=LETSLEARNNOW)

## Подготовка
```
npm install -g @vue/cli
vue --version # нужна версия 4.5+
mkdir -p ~/work/realworld-vue
cd ~/work/realworld-vue
vue create mediumclone_vue
```
Выбрать Manually select features и отметить:
  - Choose Vue version
  - babel
  - router
  - vuex
  - linter / formatter

  - Vue version 2
  - Use history mode for router: n
  - Pick a linter / formatter config: ESLint with error prevention only
  - Lint on save
  - Where do you prefer placing config for Babel, ESLint, etc.?: In dedicated config files

Запустить отладочный сервер:
```bash
cd mediumclone_vue
npm run serve
```

поднять свой backend, если лежит api.realworld.io:
```bash
cd ~/work/realworld-vue
git clone https://github.com/EJIqpEP/koa-knex-realworld-example
cd koa-knex-realworld-example
docker compose up --build -d
curl http://localhost:3000/api/tags
```