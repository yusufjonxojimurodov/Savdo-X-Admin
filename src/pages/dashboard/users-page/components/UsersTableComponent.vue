<script setup>
import useUsers from '../../../../stores/users.pinia';
import { usersColumns } from '../../../../constants/table';
import EmtpyComponent from '../../../../components/EmtpyComponent.vue';
import IconDelete from '../../../../components/icons/IconDelete.vue';
import IconEdit from '../../../../components/icons/IconEdit.vue';
import UpdateProfileComponent from '../../../../components/modals/UpdateProfileComponent.vue';
import { ref } from 'vue';
import useQueryParams from '../../../../composables/useQueryParams';
import PaginationComponent from '../../../../components/PaginationComponent.vue';

const usersStore = useUsers()
const userColumn = usersColumns()
const { setQueries } = useQueryParams()

const openUpdateProfileModal = ref(false)

const roles = [
    {
        label: "Sotuvchi",
        value: "seller"
    },
    {
        label: "Mijoz",
        value: "customer"
    },
    {
        label: "Admin",
        value: "admin"
    },
    {
        label: "Bloklash",
        value: "blocked"
    },
]

function roleChange(value, id) {
    const role = { role: value }
    usersStore.updateRole(role, id)
}

function openUpdateModal(id) {
    setQueries({
        userId: id
    })

    openUpdateProfileModal.value = true
}
</script>

<template>
    <a-table :columns="userColumn" :pagination="false" :data-source="usersStore.users" :loading="usersStore.loader">
        <template #emptyText>
            <emtpy-component v-if="!usersStore.loader" title="Ma'lumot topilmadi"
                description="Platformada userlar borligiga ishonch hosil qiling yoki internetingizni tekshiring" />
        </template>

        <template #bodyCell="{ column, index, record }">
            <template v-if="column.dataIndex === 'colIndex'">
                {{ (index + 1) + usersStore.page * usersStore.size }}
            </template>

            <template v-if="column.dataIndex === 'name'">
                {{ record.name }}
            </template>

            <template v-if="column.dataIndex === 'role'">
                <a-select :disabled="record.role === 'admin'" placeholder="Rolni tanlang" style="width: 100px;"
                    :options="roles" v-model:value="record.role" @change="(value) => roleChange(value, record._id)" />
            </template>

            <template v-if="column.dataIndex === 'phone'">
                <a target="_blank" class="!text-black !font-semibold border-b border-black" href="tel:"> {{ record.phone
                }}</a>
            </template>

            <template v-if="column.dataIndex === 'userName'">
                <a target="_blank" class="!text-black !font-semibold border-b border-black"
                    :href="`http://t.me/${record.userName}`"> {{
                        record.userName }}</a>
            </template>

            <template v-if="column.dataIndex === 'actions'">
                <a-space>
                    <a-button :disabled="record.role === 'admin'" @click="openUpdateModal(record._id)"
                        class="!rounded-[10px] !p-0 !m-0 !flex !justify-center !items-center">
                        <template #icon>
                            <icon-edit />
                        </template>
                    </a-button>
                    <a-popconfirm :ok-button-props="{ loading: usersStore.buttonLoader }"
                        :disabled="record.role === 'admin'" title="Haqiqatan ham foydalanuvchini o‘chirmoqchimisiz?"
                        ok-text="Ha" cancel-text="Yo‘q" @confirm="usersStore.deleteUser(record._id)">
                        <a-button :disabled="record.role === 'admin'"
                            class="!rounded-[10px] !p-0 !m-0 !flex !justify-center !items-center" danger>
                            <template #icon>
                                <icon-delete />
                            </template>
                        </a-button>
                    </a-popconfirm>
                </a-space>
            </template>
        </template>
    </a-table>

    <pagination-component :total="usersStore.totalElements" :current-page="usersStore.page + 1"
        :page-size="usersStore.size" />
    <update-profile-component v-model:open="openUpdateProfileModal" />
</template>