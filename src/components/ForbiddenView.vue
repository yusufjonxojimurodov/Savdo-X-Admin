<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter()
const route = useRoute()
</script>
<template>
    <div class="p-6 h-screen flex flex-col justify-center items-center">
        <a-result sub-title="Ruxsat berilmagan !" status="403" title="403" class="flex flex-col justify-center items-center">
            <template #extra>
                <a-button size="large" type="primary" @click="router.push('/')">
                    Orqaga
                </a-button>
            </template>
        </a-result>
    </div>
</template>