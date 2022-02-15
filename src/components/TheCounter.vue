<template>
  <h1>{{addValue}}</h1>
</template>

<script>
export default {

computed:{
    addValue(){
        return this.$store.state.counter
    }
}
}
</script>

<style>

</style>