<template lang="pug">
    #news
        div
            p Новости
</template>


<script>
export default {
    name: 'news',
    
}
</script>

<style>
#news {
    background-color: #f8e7c3;
    margin: 0;
    margin-top: 15px;
    height: calc(100% - 55px);
}

#news > div{
    padding: 10px;
}
</style>