<script setup>
import useProducts from '../../../../stores/products.pinia';
import PaginationComponent from '../../../../components/PaginationComponent.vue';
import { productsColumns } from '../../../../constants/table';
import EmtpyComponent from '../../../../components/EmtpyComponent.vue';
import IconDelete from '../../../../components/icons/IconDelete.vue';

const productsColumn = productsColumns()
const productsStore = useProducts()
</script>

<template>
    <a-table :pagination="false" :loading="productsStore.loader" :columns="productsColumn"
        :data-source="productsStore.products">
        <template #emptyText>
            <emtpy-component title="Mahsulotlar topilmadi"
                description="Internetingizni tekshiribyoki bazada mahsulotlar borligiga ishonch hosil qiling" />
        </template>

        <template #bodyCell="{ column, index, record }">
            <template v-if="column.dataIndex === 'colIndex'">
                <p class="!font-bold !text-[14px]"> {{ (index + 1) + productsStore.page * productsStore.size }}</p>
            </template>

            <template v-if="column.dataIndex === 'name'">
                <p class="!m-0 !p-0 !font-semibold !text-[14px]">{{ record.name }}</p>
            </template>

            <template v-if="column.dataIndex === 'description'">
                <p class="!m-0 !p-0 !font-semibold !text-[12px]">{{ record.description }}</p>
            </template>

            <template v-if="column.dataIndex === 'price'">
                <p class="!m-0 !p-0 !font-semibold !text-[14px]">{{ record.price }}$</p>
            </template>

            <template v-if="column.dataIndex === 'discount'">
                <div class="!m-0 !p-2 !font-semibold !text-[14px] text-center rounded"
                    :class="record.discount === 0 ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'">
                    {{ record.discount }}%
                </div>
            </template>

            <template v-if="column.dataIndex === 'discountPrice'">
                <div class="text-center">
                    <p class="!m-0 !p-0 !font-semibold !text-[14px]">{{ record.discountPrice }}$</p>
                </div>
            </template>

            <template v-if="column.dataIndex === 'userName'">
                <a target="_blank" :href="`https://t.me/${record.createdBy.userName}`"
                    class="!m-0 !p-0 !font-semibold !text-black border-b border-black !text-[14px]">{{
                        record.createdBy.userName }}</a>
            </template>

            <template v-if="column.dataIndex === 'actions'">
                <a-popconfirm title="Haqiqatan ham mahsulotni o‘chirmoqchimisiz?" ok-text="Ha" cancel-text="Yo‘q"
                    @confirm="productsStore.deleteProduct(record._id)">
                    <a-button :disabled="record.role === 'admin'"
                        class="!rounded-[10px] !p-0 !m-0 !flex !justify-center !items-center" danger>
                        <template #icon>
                            <icon-delete />
                        </template>
                    </a-button>
                </a-popconfirm>
            </template>
        </template>
    </a-table>

    <pagination-component :total="productsStore.totalElements" :current-page="productsStore.page + 1"
        :page-size="productsStore.size" />
</template>