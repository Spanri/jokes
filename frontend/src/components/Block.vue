<template lang="pug">
	#block
		nav
			router-link(
				:to = 'todo.component' 
				replace 
				v-bind:key="index" 
				v-for="(todo, index) in todos"
				) {{ todo.name }}
		router-view
</template>

<script>
export default {
	name: 'HelloWorld',
	data: () => ({
		todos: [
			{ name: 'Главная', component: 'main' },
			{ name: 'Новости', component: 'news' },
			{ name: 'Задачи', component: 'tasks' },
			{ name: 'События', component: '' },
		],
	}),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(4, auto);
}

nav a{
	padding: 10px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
	border-bottom: 2px solid #96c2e2;
	border-top: 2px solid #96c2e2;
}

nav a:hover{
	border-bottom-color:#ffa703;
	transition: all .2s ease-out;
}
</style>
