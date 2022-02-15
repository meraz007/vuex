<template>
  <button @click="valueAdded">Add</button>
</template>

<script>
export default {
methods:{
    valueAdded(){
        this.$store.state.counter++
    }
}
}
</script>

<style>

</style>