<script setup>
import useMe from '../stores/me.pinia';
import IconProfile from './icons/IconProfile.vue';
import IconSetting from './icons/IconSetting.vue';
import IconLogOut from './icons/IconLogOut.vue';
import ProfileModalComponent from './modals/ProfileModalComponent.vue';
import { ref } from 'vue';

const meStore = useMe()

const openProfileModal = ref(false)
</script>

<template>
    <div class="flex justify-end items-center gap-2">
        <a-dropdown>
            <a-avatar :size="50">
                <template #icon>
                    <img class="w-15 h-15" :src="meStore.userInfo.avatar" alt="logo" />
                </template>
            </a-avatar>

            <template #overlay>
                <a-menu>
                    <a-menu-item key="1">
                        <div @click="openProfileModal = true" class="flex justify-start items-center gap-3">
                            <icon-profile />
                            <p class="text-1xl !font-semibold !m-0 !p-0 ">Profil</p>
                        </div>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <div class="flex justify-start items-center gap-3">
                            <icon-setting />
                            <p class="text-1xl !font-semibold !m-0 !p-0 ">Sozlamalar</p>
                        </div>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <div class="flex justify-start items-center gap-3">
                            <icon-log-out />
                            <p class="text-1xl !font-semibold !m-0 !p-0 ">Chiqish</p>
                        </div>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>

        <h2 class="text-2xl !font-bold !m-0 !p-0">{{ meStore.userInfo.name }} {{ meStore.userInfo.surname }}</h2>
    </div>

    <profile-modal-component v-model="openProfileModal" />
</template>

<style></style>