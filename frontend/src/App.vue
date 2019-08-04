<template lang="pug">
  #app
    header-page
    .home
      router-view
    footer-page
</template>

<script>
import HeaderPage from './components/Header'
import FooterPage from './components/Footer'

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
	color: #2c3e50;
	min-height: calc(100vh - 30px);
	margin: 15px;
	display: grid;
	grid-template-rows: max-content auto max-content;
}
.home{
  /* background-color: #e3f7fa; */
  margin: 0;
  margin-top: 15px;
  height: calc(100% - 55px);
}
</style>
