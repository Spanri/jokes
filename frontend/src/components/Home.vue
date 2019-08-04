<template lang="pug">
    #home
      .description
        p Это сайтик с анекдотами, которые я взяла из паблика вк "Мои любимые юморески".
        p Последний добавленный анекдот:
      p {{last}}
</template>

<script>
import { Note } from '../api/notes'

export default {
    name: 'home',
    data: () => ({
      last: "",
    }),
    created(){
      Note.last(2).then(r => {
        r.items[1].text == "" ?
          this.last = "Там нет текста, а всякие картинки я постить не буду." :
          this.last = r.items[1].text;
      })
    }
}
</script>

<style scoped>
#home{
  background-color: #e3f7fa;
}
.description{
  padding: 30px;
  padding-bottom: 10px;
  text-align: left;
}
.description p{
  padding: 10px 0;
  margin: 0;
}
#home > p{
  padding: 30px;
  padding-top: 0;
  margin: 0;
}
</style>
