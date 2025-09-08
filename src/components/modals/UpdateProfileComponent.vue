<script setup>
import { computed, ref } from 'vue';
import useUsers from '../../stores/users.pinia';
import useQueryParams from '../../composables/useQueryParams';

const openModal = defineModel('open', { type: Boolean, default: false })

const { getQueries } = useQueryParams()
const userStore = useUsers()

const buttonLoader = ref(false)
const updateUser = ref({
    name: "",
    surname: "",
    phone: "",
    password: ""
})

const userId = computed(() => getQueries().userId)

async function updateUserProfile() {
    buttonLoader.value = true
    await userStore.updateUser(userId.value, updateUser.value)
    buttonLoader.value = false
    openModal.value = false
}
</script>

<template>
    <a-modal v-model:open="openModal" title="Foydalanuvchi ma'lumotini o'zgartirish" @cancel="openModal = false"
        :footer="null">
        <a-form @finish="updateUserProfile" layout="vertical" :model="updateUser">
            <a-form-item label="Ismi" name="name">
                <a-input size="large" placeholder="Ismini kiriting" v-model:value="updateUser.name" />
            </a-form-item>
            <a-form-item label="Familyasi" name="surname">
                <a-input size="large" placeholder="Familyasini kiriting" v-model:value="updateUser.surname" />
            </a-form-item>
            <a-form-item label="Raqami" name="phone">
                <a-input size="large" placeholder="Raqamini kiriting" v-model:value="updateUser.phone" />
            </a-form-item>
            <a-form-item label="Paroli" name="password">
                <a-input size="large" placeholder="Parolini kiriting" v-model:value="updateUser.password" />
            </a-form-item>

            <div class="flex justify-end items-center gap-2">
                <a-button @click="openModal = false" type="primary" size="large" danger>
                    Bekor qilish
                </a-button>
                <a-button :loading="buttonLoader" html-type="submit" type="primary" size="large">
                    Saqlash
                </a-button>
            </div>
        </a-form>
    </a-modal>
</template>
