<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import useQueryParams from '../composables/useQueryParams'

const route = useRoute()
const { setQueries } = useQueryParams()
const emits = defineEmits(['onChange'])

const rowHeight = 65
const fixedOffsets = 136
const size = ref(10)
const currentPage = computed(() => (route.query.page ? +route.query.page : 1))
const pageSize = computed(() => (route.query.size ? +route.query.size : size.value))
const onChange = (e) => {
    emits('onChange', e)
    setQueries({ page: e })
}

const props = defineProps({
    total: { type: Number, default: 100 }
})

function calculatePageSize() {
    const availableHeight = window.innerHeight - fixedOffsets
    size.value = Math.max(1, Math.floor(availableHeight / rowHeight))
}

onMounted(() => {
    calculatePageSize()
    if (!route.query.size) {
        setQueries({ size: size.value, page: 1 })
    }
})
</script>

<template>
    <div class="pagination w-full flex items-center justify-end gap-2 mt-4">
        <div class="p-[8px] bg-white rounded-2xl">
            <a-pagination :current="currentPage" :page-size="pageSize" :total="total" :show-size-changer="false"
                @change="onChange" />
        </div>
    </div>
</template>