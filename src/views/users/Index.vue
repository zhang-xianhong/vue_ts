<template>
    <div class="users-container">
        <h3>用户信息</h3>
        <el-row>
            <el-col :span="6" style="text-align: left">
                <el-button
                icon="el-icon-plus"
                type="primary"
                style="width: 90px"
                @click="openCreateDialog"
                >
                新建
                </el-button>
            </el-col>
            <el-col :offset="12" :span="6" style="text-align: right">
                <el-input
                suffix-icon="el-icon-search"
                placeholder="请输入文章名称"
                style="width: 300px;"
                >
                </el-input>
            </el-col>
        </el-row>
        <el-table :data="userData">
            <el-table-column label="xing" prop="firstName"></el-table-column>
            <el-table-column label="ming">
                <template #default="props">
                    {{ props.row.lastName }}
                </template>
            </el-table-column>
            <el-table-column label="status" prop="isActive"></el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { STATUS } from './index';
import { getUsersList } from '@/network/users';
interface IUser {
    firstName: string,
    lastName: string,
    isActive: boolean,
}
interface UserState {
    userData: Array<IUser>
}
export default defineComponent({
  name: 'User',
  setup() {
    const userState: UserState = reactive({
      userData: []
    });
    const getUserDatas = async() => {
      const { data } = await getUsersList();
      userState.userData = data?.map((item: any) => ({
        ...item
      }));
      console.log('userState.userData', userState.userData);
    };
    getUserDatas();
    return {
      ...toRefs(userState)
    };
  }
});
</script>
<style lang="scss" scoped>
</style>
