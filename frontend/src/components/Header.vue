<template lang="pug">
    header
      div.not-mobile
        img(src="../assets/logo.png" alt="Лого")
        nav
          div
          router-link(
            :to = 'todo.component'
            replace
            v-bind:key="index"
            v-for="(todo, index) in todos"
            ) {{ todo.name }}
          div
        div.profile
          a(@click="goTo()") ИЗБРАННОЕ
      div.mobile
        img(src="../assets/logo.png" alt="Лого")
        nav
          router-link(
            :to = 'todo.component'
            replace
            v-bind:key="index"
            v-for="(todo, index) in todos"
            ) {{ todo.name }}
        div.profile
          a(@click="goTo()") ИЗБРАННОЕ
</template>


<script>

export default {
    name: 'header-page',
    data: () => ({
      todos: [
        { name: 'Главная', component: 'main' },
        { name: 'Рандомное', component: 'random' },
        { name: 'Все анекдоты', component: 'jokes' },
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
.not-mobile, .mobile{
	display: grid;
	grid-template-columns: max-content auto max-content;
  margin-bottom: 10px;
  word-wrap: break-word;
}

.not-mobile{
  border-bottom: 2px solid #96c2e2;
}

header .mobile{
  display: none;
}

header img{
	width: 30px;
}

.profile{
  list-style: none;
}

.not-mobile .profile{
	padding: 5px;
  margin-bottom: 10px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
  border: 2px solid #ffffff;
}

.mobile .profile{
  margin-bottom: 10px;
}

.not-mobile .profile:hover{
  cursor: pointer;
  border-color:#ffa703;
  color: #ffa703;
	transition: all .3s ease-out;
}

.not-mobile nav{
	list-style-type: none;
	display: grid;
	grid-template-columns: auto repeat(4, max-content) auto;
}

.not-mobile nav a{
	padding: 10px;
  padding-bottom: 0;
  margin: 0;
  margin-bottom: -15px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
  /* border-bottom: 2px solid #96c2e200; */
}

.mobile img{
  padding: 5px 0 10px 5px;
}

.mobile a{
	padding: 10px;
  padding-bottom: 0;
  padding-right: 0;
  margin: 0;
  margin-bottom: -15px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
  /* border-bottom: 2px solid #96c2e200; */
}

nav a:hover, .mobile .profile a:hover{
  color: #ffa703;
  transition: all .3s ease-out;
  cursor: pointer;
}

nav a:after, .mobile .profile a:after{
  content: "\a0";
  display: block;
  margin: 10px 0;
  line-height: 3px;
  border-bottom: 2px solid #96c2e281;
}

nav a:hover::after, .mobile .profile a:hover::after{
	border-bottom-color:#ffa703;
	transition: all .2s ease-out;
}
@media (max-width: 600px) {
  nav a, .profile a{
    font-size: 12px;
  }
  header img{
    width: 25px;
  }
}
@media (max-width: 450px) {
  header .not-mobile{
    display: none;
  }
  header .mobile{
    display: block;
  }
}
</style>
