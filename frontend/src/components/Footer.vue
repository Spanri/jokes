<template lang="pug">
    footer
      div Разработала&#8194;
        a(href="https://github.com/Spanri" target="_blank") Аня
        | , 2018-2019
</template>


<script>

export default {
  name: 'footer-page',
  data: () => ({

	}),
}
</script>

<style scoped>
footer {
    margin-top: 20px;
    border-top: 2px solid #96c2e2;
    padding: 10px;
    text-align: center;
}

a{
    text-decoration: none;
}

a:-webkit-any-link{
    color: #2c3e50;
}

a:hover{
    color: #2b68a1;
	transition: all .3s ease-out;
}
@media (max-width: 600px) {
  *{
    font-size: 13px;
  }
}
</style>
