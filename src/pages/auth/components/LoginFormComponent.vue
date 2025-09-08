<script setup>
import { reactive, ref } from 'vue';
import useAuth from '../../../stores/auth.pinia';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuth()

const formRef = ref()
const loginModel = reactive({
    phone: null,
    password: null
})

function login() {
    authStore.LoginUser(loginModel, router)
}
</script>

<template>
    <div
        style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #f3f4f6;">
        <div
            style="width: 400px; padding: 1.5rem; background-color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06); border-radius: 0.375rem;">
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <h1 style="font-size: 1.5rem; font-weight: 700;">Tizimga Kirish</h1>
                <p style="color: #6b7280; margin-top: 0.5rem;">
                    Savdo X platformasining global boshqaruv sayti (Adminlar uchun)
                </p>
            </div>

            <a-form @finish="login" layout="vertical" ref="formRef" :model="loginModel">
                <a-form-item label="Raqamingizni kiriting" name="phone"
                    :rules="[{ required: true, message: 'Majburiy maydon' }]">
                    <a-input size="large" style="width: 100%; padding: 0.5rem 0.75rem; border-radius: 18px;"
                        placeholder="Raqamingizni kiriting" v-model:value="loginModel.phone" />
                </a-form-item>

                <a-form-item label="Parolingizni kiriting" name="password"
                    :rules="[{ required: true, message: 'Majburiy maydon' }]">
                    <a-input-password size="large" style="width: 100%; padding: 0.5rem 0.75rem; border-radius: 18px;"
                        placeholder="Parolingizni kiriting" v-model:value="loginModel.password" />
                </a-form-item>

                <a-button html-type="submit" size="large" type="primary" :loading="authStore.loader"
                    style="width: 100%;">
                    Kirish
                </a-button>
            </a-form>
        </div>
    </div>
</template>