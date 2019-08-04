<template lang="pug">
    #jokes
      .posts(v-for="i in jokes" v-if="i.text")
        p {{i.text}}
        button ДОБАВИТЬ В ИЗБРАННОЕ
        p.att {{i.attachments ? "Тут чето прикреплено, но я не буду это парсить" : ""}}
</template>


<script>
import { Note } from '../api/notes'

export default {
  name: 'jokes',
  data: () => ({
      jokes: [],
    }),
    created(){
      Note.last(20).then(r => {
        console.log(r);
        this.jokes = r.items.filter(el => el != r[0]);
      });
    }
}
</script>

<style scoped>
.posts{
  padding: 30px;
  margin-bottom: 20px;
  background-color: #e3f7fa;
}
.posts p{
  margin: 0;
}
button{
  color: white;
  border: 0;
  background: #ffa703;
  padding: 10px;
  margin-top: 15px;
}
button:hover{
  cursor: pointer;
  background: #dd5202;
}
.att{
  padding-top: 15px;
  margin: 0;
}
</style>
