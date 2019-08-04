<template lang="pug">
    header
      img(src="../assets/logo.png" width="30px" alt="Лого")
      nav
        div
        router-link(
          :to = 'todo.component'
          replace
          v-bind:key="index"
          v-for="(todo, index) in todos"
          ) {{ todo.name }}
        div
      li.profile
        a(@click="goTo()") Профиль

</template>


<script>

export default {
    name: 'header-page',
    data: () => ({
      todos: [
        { name: 'Главная', component: 'main' },
        { name: 'Новости', component: 'news' },
        { name: 'Анекдоты', component: 'tasks' },
        { name: 'Добавить анекдот', component: '' },
      ],
    }),
    methods: {
        goTo() {
            this.$router.push('profile');
        }
    }
}
</script>

<style scoped>
header{
	display: grid;
	grid-template-columns: max-content auto max-content;
  margin-bottom: 10px;
  border-bottom: 2px solid #96c2e2;
}

header li{
	list-style-type: none;
  display: grid;
	grid-template-columns: auto;
}

header .profile{
	padding: 5px;
  margin-bottom: 10px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
  border: 2px solid #ffffff;
}

header .profile:hover{
  cursor: pointer;
  border-color:#ffa703;
  color: #ffa703;
	transition: all .3s ease-out;
}
nav{
	list-style-type: none;
	display: grid;
	grid-template-columns: auto repeat(4, max-content) auto;
}

nav a{
	padding: 10px;
  padding-bottom: 0;
  margin: 0;
  margin-bottom: -15px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
  /* border-bottom: 2px solid #96c2e200; */
}

nav a:hover{
  color: #ffa703;
  transition: all .3s ease-out;
}

nav a:after {
  content: "\a0";
  display: block;
  margin: 10px 0;
  line-height: 3px;
  border-bottom: 2px solid #96c2e281;
}

nav a:hover::after{
	border-bottom-color:#ffa703;
	transition: all .2s ease-out;
}
</style>
