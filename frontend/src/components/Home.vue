<template lang="pug">
    #home
      .description
        p Это сайтик с анекдотами, которые я взяла из паблика вк "Мои любимые юморески".
        p Последний добавленный анекдот:
      div(:key='index' v-for="(note,index) in notes")
          p {{ note }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'home',
    computed: mapGetters(['notes']),
    beforeMount () {
        this.$store.dispatch('getNotes')
    }
}
</script>

<style scoped>
.description{
  padding: 30px;
  text-align: left;
}
.description p{
  padding: 10px 0;
  margin: 0;
}
</style>
