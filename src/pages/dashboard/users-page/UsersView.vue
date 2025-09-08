<script setup>
import { onMounted } from 'vue';
import useUsers from '../../../stores/users.pinia';
import UsersTableComponent from './components/UsersTableComponent.vue';

const userStore = useUsers()

onMounted(() => {
    userStore.getUsers()
})
</script>

<template>
    <users-table-component />
</template>