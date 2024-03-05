<template>
    <h1>Lifecycle in VueJS {{ counter }}</h1>
    <button v-on:click="counter = counter + 1">Update</button>
</template>

<script>
export default {
    name: 'MainHome',
    data() {
        return {
            counter: 0
        }
        
    },
    beforeUpdate() {
        // console.log("beforeUpdate", this.counter)
        console.log("beforeUpdate", this.$refs['count'].textContent)
    },
    updated() {
        //console.log("updated", this.counter)
        console.log("updated", this.$refs['count'].textContent)
    }
}
</script>

<style scoped>

</style>