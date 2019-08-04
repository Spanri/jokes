<template lang="pug">
    #main-page
        div(:key='index' v-for="(note,index) in notes")
            p {{ note }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'main-page',
    computed: mapGetters(['notes']),
    beforeMount () {
        this.$store.dispatch('getNotes')
    }
}
</script>

<style>
#main-page {
    background-color: #f8e7c3;
    margin: 0;
    margin-top: 15px;
    height: calc(100% - 55px);
}

#main-page > div{
    padding: 10px;
}
</style>