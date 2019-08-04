<template lang="pug">
	#app
		header-page
		router-view
		footer-page
</template>

<script>
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'

export default {
	name: 'App',
	components: { HeaderPage, FooterPage }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: calc(100vh - 30px);
	margin: 15px;
	display: grid;
	grid-template-rows: max-content auto max-content;
}
</style>
