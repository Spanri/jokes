<template lang="pug">
    header
        div Лого
        div
        li
            a(@click="goTo()") Профиль
</template>


<script>

export default {
    name: 'header-page',
    methods: {
        goTo() {
            this.$router.push('profile');
        }
    }
}
</script>

<style>
header{
	display: grid;
	grid-template-columns: max-content auto max-content;
    margin-bottom: 10px;
}

header li{
	list-style-type: none;
    display: grid;
	grid-template-columns: auto;
}

header a{
	padding: 10px;
	color: #194561;
	text-transform: uppercase;
	text-decoration: none;
    border: 2px solid #ffffff;
}

header a:hover{
    cursor: pointer;
    border-color:#ffa703;
    color: #ffa703;
	transition: all .3s ease-out;
}
</style>