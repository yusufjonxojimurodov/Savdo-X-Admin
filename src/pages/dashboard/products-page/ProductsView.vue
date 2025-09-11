<script setup>
import { onMounted } from 'vue';
import useProducts from '../../../stores/products.pinia';
import ProductsTableComponent from './components/ProductsTableComponent.vue';

const productsStore = useProducts()

onMounted(() => {
    productsStore.getAllProducts()
})
</script>

<template>
    <products-table-component />
</template>