<script setup>
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import IconUsers from '../../components/icons/IconUsers.vue';
import IconProducts from '../../components/icons/IconProducts.vue';
import IconStatistic from '../../components/icons/IconStatistic.vue';
import ProfileComponent from '../../components/ProfileComponent.vue';
import useMe from '../../stores/me.pinia';

const router = useRouter();
const route = useRoute();
const userMeStore = useMe()

const menuItems = [
    { key: '/dashboard/users', label: 'Foydalanuvchilar', icon: IconUsers },
    { key: '/dashboard/products', label: 'Mahsulotlar', icon: IconProducts },
    { key: '/dashboard/statistic', label: 'Statistika', icon: IconStatistic },
];

const headerLabel = computed(() => {
    const current = menuItems.find(item => item.key === route.path);
    return current ? current.label : 'Dashboard';
});

onMounted(() => {
    userMeStore.getUserMe()
})

function handleMenuClick({ key }) {
    router.push(key);
}
</script>

<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider :width="260" style="background-color: transparent;" @collapse="val => collapsed = val">
            <div class="logo text-2xl !font-bold !p-4 text-center">
                Savdo X boshqaruvi
            </div>
            <a-menu class="!mt-4.5" @click="handleMenuClick" :selected-keys="[route.path]">
                <a-menu-item class="!flex !justify-start !items-center" v-for="item in menuItems" :key="item.key">
                    <div class="flex justify-center items-center gap-2">
                        <component :is="item.icon" />
                        <span class="text-black !font-semibold text-[16px]">{{ item.label }}</span>
                    </div>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>

        <a-layout>
            <a-layout-header style="background: #f3f4f6;">
                <div class="flex justify-between items-center !w-full">
                    <div class="flex justify-start items-center gap-4">
                        <h1 class="!p-0 !m-0 text-[20px] !font-bold">{{ headerLabel }}</h1>
                    </div>

                    <profile-component />
                </div>
            </a-layout-header>

            <a-layout-content style="margin: 16px; background: #ffffff; padding: 16px; border-radius: 8px;">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
