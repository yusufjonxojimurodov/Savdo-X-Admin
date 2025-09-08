<script setup>
import IconProfile from '../icons/IconProfile.vue'
import dayjs from 'dayjs'
import useMe from '../../stores/me.pinia'

const open = defineModel()
const userStore = useMe()
</script>

<template>
    <a-modal v-model:open="open" :width="500" :footer="null" class="custom-user-modal">
        <div class="flex flex-row items-center p-4 gap-4 border-b border-gray-300">
            <a-avatar :size="64">
                <template #icon>
                    <img v-if="userStore.userInfo.avatar" :src="userStore.userInfo.avatar" alt="avatar" />
                    <icon-profile v-else />
                </template>
            </a-avatar>
            <div class="flex flex-col gap-1">
                <p class="text-black font-bold text-[18px] !p-0 !m-0">
                    {{ userStore.userInfo.name }} {{ userStore.userInfo.surname }}
                </p>
                <p class="text-gray-500 text-[14px] !p-0 !m-0">
                    Foydalanuvchi nomi: {{ userStore.userInfo.userName }}
                </p>
            </div>
        </div>

        <div class="max-h-[400px] overflow-y-auto p-4">
            <div v-for="(value, label) in {
                'Ismingiz': userStore.userInfo.name,
                'Familyangiz': userStore.userInfo.surname,
                'Telefon Raqamingiz': userStore.userInfo.phone || '—',
                'Yoshingiz': userStore.userInfo.birthDate ? dayjs(userStore.userInfo.birthDate).format('YYYY-MM-DD') : '—',
                'Emailingiz': userStore.userInfo.email || '—',
                'Bozorimizdagi darajangiz': userStore.userInfo.role || '—'
            }" :key="label" class="flex justify-between items-center py-2 border-b border-gray-200">
                <p class="text-gray-600 text-[14px] font-semibold m-0">{{ label }}</p>
                <p class="text-gray-800 text-[14px] font-medium break-all m-0">{{ value }}</p>
            </div>
        </div>

        <div class="p-4">
            <a-button @click="open = false" size="large" type="primary" block>Yopish</a-button>
        </div>
    </a-modal>
</template>

