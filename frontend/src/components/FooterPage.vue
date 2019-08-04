<template lang="pug">
    footer
        div Разработали: Гердт Никита, Козлова Анна, Нгуен Ань, 2018
        div.nav
            router-link(
                :to = 'todo.component' 
                replace 
                v-bind:key="index" 
                v-for="(todo, index) in todos"
                ) {{ todo.name }}
</template>


<script>

export default {
    name: 'footer-page',
    data: () => ({
		todos: [
			{ name: 'Контакты ', component: '' },
			{ name: 'О сайте', component: '' },
		],
	}),
}
</script>

<style>
footer {
    margin-top: 20px;
    border-top: 2px solid #96c2e2;
    padding: 10px;
}

footer a{
    text-decoration: none;
}

footer a:-webkit-any-link{
    color: #2c3e50;
}

footer a:hover{
    color: #2b68a1;
	transition: all .3s ease-out;
}
</style>