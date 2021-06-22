<template>
  <div class="keycode">
    <!-- <ul>
      <li v-for="item in keywords" :key="item.is_red">
        {{ item }}
      </li>
    </ul> -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @row-click="changeTableColor"
    >
      <el-table-column prop="is_red" label="状态" width="180">
      </el-table-column>
      <el-table-column prop="words" label="关键词" width="180">
      </el-table-column>
      <el-table-column prop="acm" label="ACM"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
// import { defineComponent, PropType, ref } from "vue";
import { defineComponent, PropType, Ref, ref } from 'vue';
interface IKeyWords {
  is_red: string;
  words: string;
  acm: string;
}
export default defineComponent({
  name: 'KeyCode',
  props: {
    keywords: {
      type: Array as PropType<IKeyWords[]>,
      default() {
        return [];
      }
    }
  },
  setup(props: { keywords: IKeyWords[] }) {
    const tableData: Ref<IKeyWords[]> = ref(props.keywords);
    // console.log('keywords: ', tableData);
    const is_red = ref(tableData.value[0].is_red);
    const words = ref(tableData.value[0].words);
    const acm = ref(tableData.value[0].acm);
    const tableRowClassName = ref<string>('');
    const changeTableColor = function({ row = 0, rowIndex = 1 }): void {
      if (rowIndex === 1) {
        console.log('test1');
        // return 'warning-row';
        tableRowClassName.value = 'warning-row';
      } else if (rowIndex === 3) {
        // return 'success-row';
        console.log('test3');
        tableRowClassName.value = 'success-row';
      }
    };
    // const tableRowClassName = ({row: number, rowIndex: number}): string => {
    //   // console.log(row);
    //   if (rowIndex === 1) {
    //     console.log(1);
    //     return 'warning-row';
    //   } else if (rowIndex === 3) {
    //     console.log(3);
    //     return 'success-row';
    //   }
    //   return '';
    // };

    return {
      tableData,
      is_red,
      words,
      acm,
      tableRowClassName,
      changeTableColor
    };
  }
});
</script>

<style lang="scss" scoped>
.keycode {
  height: 500px;
  // overflow: hidden;
  // overflow-y: auto;
  li {
    margin-bottom: 1px solid #eee;
  }
}
</style>
