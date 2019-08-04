<template lang="pug">
    #tasks
        div
            p Задачи
</template>


<script>
export default {
    name: 'tasks',
    
}
</script>

<style>
#tasks {
    background-color: #f8e7c3;
    margin: 0;
    margin-top: 15px;
    height: calc(100% - 55px);
}

#tasks > div{
    padding: 10px;
}
</style>