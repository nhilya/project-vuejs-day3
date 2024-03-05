<template>
    <h1>Get data from API</h1>
    <ul class="item" v-for="item in list" :key="item - id">
        <li>{{ item.id }}</li>
        <li>{{ item.title }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.description }}</li>
        <li><img :src="item.image"></li>
    </ul>
</template>

<script>
import axios from 'axios';
export default {
    name: 'API_Data_Fetch',
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get("https://api.escuelajs.co/api/v1/products");
        console.warn("api data", result.data)
        this.list = result.data
    }
}
</script>

<style scoped>
.item li {
    display: inline-block;
    width: 180px;
    text-align: center;
    padding: 5px;
}
img {
    width: 200px;
    height: inherit;
}
</style>