<template lang="pug">
	#block
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

</style>
