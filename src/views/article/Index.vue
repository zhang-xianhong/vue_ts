<template>
    <div class="users-container">
        <h3>文章信息</h3>
        <el-row style="margin-bottom: 5px;">
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
                v-model="searchProps.keyword"
                suffix-icon="el-icon-search"
                placeholder="请输入文章名称"
                style="width: 300px;"
                @input="filterArticle"
                >
                </el-input>
            </el-col>
        </el-row>
        <el-table :data="articleData">
          <el-table-column label="序号" type="index">
          </el-table-column>
          <el-table-column label="类型编号" prop="typeId">
              <template #default="props">
                  {{ props.row.articleType }}
              </template>
          </el-table-column>
          <el-table-column label="标题">
              <template #default="props">
                  {{ props.row.articleTitle }}
              </template>
          </el-table-column>
          <el-table-column label="内容" prop="articleContent"></el-table-column>
          <el-table-column label="文章简介" prop="articleIntroduce"></el-table-column>
          <el-table-column label="文章发布时间" prop="addTime">
              <template #default="props">
                  {{ dateFormat(props.row.addTime) }}
              </template>
          </el-table-column>
          <el-table-column label="游览次数" prop="viewCount"></el-table-column>
          <el-table-column label="操作">
              <template #default="props">
                  <el-button
                  type="text"
                  size="mini"
                  @click="onEdit(props.row)"
                  >
                  编辑
                  </el-button>
                  <el-button
                  type="text"
                  size="mini"
                  @click="onDelete(props.row)"
                  >
                  删除
                  </el-button>
              </template>
          </el-table-column>
        </el-table>
        <div class="packaged-pagination">
            <span class="packaged-pagination__total" :total="total">共 {{ total }} 条</span>
            <el-pagination
            :current-page="searchProps.page"
            :page-size="searchProps.pageSize"
            :page-sizes="[5, 10, 20, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handlePageSizeChange"
            @current-change="handlePageNumChange"
            >
            </el-pagination>
        </div>
        <AddArticle
        :visable="createDialogVisible"
        :is-edit="isEdit"
        :article-info="articleInfo"
        @close="closeDialog"
        @getArticleInfo="getArticleData"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import AddArticle from './dialog/AddArticle.vue';
// import { getArticleList } from '@/network/article';
import { getArticleList } from '@/api/article/article-list';
import { deleteArticle } from '@/api/article/article-delete';
import dateFormat from '@/utils/date-format';
import { getArticleType } from './index';
import { debounce } from 'lodash';
import { ElMessage, ElMessageBox } from 'element-plus';
import { IArticle } from '@/types/index';

interface ArticleState {
    articleData: Array<IArticle>,
    total: number,
    loading: boolean,
    disabled: boolean;
    isEdit: boolean,
    searchProps: {
        keyword: string;
        page: number;
        pageSize: number;
        sortField: string;
        sortType: 'ascending' | 'descending';
    },
    articleInfo: IArticle,
}

export default defineComponent({
  name: 'Article',
  components: {
    AddArticle
  },
  setup() {
    const createDialogVisible = ref(false);
    const articleState: ArticleState = reactive({
      articleData: [],
      total: 0,
      loading: false,
      disabled: false,
      isEdit: false,
      searchProps: {
        keyword: '',
        page: 1,
        pageSize: 5,
        sortField: 'addTime',
        sortType: 'descending'
      },
      articleInfo: {
        id: 0,
        typeId: 1,
        articleTitle: '',
        articleIntroduce: '',
        articleContent: '',
        addTime: '',
        viewCount: 0,
        types: [
          { id: 1, name: '学习' },
          { id: 2, name: '软技能' }
        ]
      }
    });

    function initArticleInfo() {
      articleState.articleInfo.id = 0;
      articleState.articleInfo.typeId = 1;
      articleState.articleInfo.articleTitle = '';
      articleState.articleInfo.articleIntroduce = '';
      articleState.articleInfo.articleContent = '';
      articleState.articleInfo.addTime = '';
      articleState.articleInfo.viewCount = 0;
      articleState.articleInfo.types = [
        { id: 1, name: '学习' },
        { id: 2, name: '软技能' }
      ];
    }

    const getArticleData = async() => {
      try {
        articleState.loading = true;
        const { data } = await getArticleList(articleState.searchProps);
        articleState.loading = false;
        //     console.log('data', data);
        const { count, rows = [] } = data;
        console.log('count', count);
        articleState.articleData = rows.map((item: any) => ({
          ...item,
          articleType: getArticleType(item.typeId)
        }));
        articleState.total = count;
        console.log('articleState.articleData', articleState.articleData);
      } catch (error) {
        articleState.loading = false;
        ElMessage({
          type: 'error',
          message: '获取文章列表失败'
        });
      }
    };
    getArticleData();

    const filterArticle = debounce(getArticleData, 1000);

    const openCreateDialog = () => {
      createDialogVisible.value = true;
    };

    const closeDialog = () => {
      articleState.isEdit = false;
      createDialogVisible.value = false;
      initArticleInfo();
    };

    const handlePageSizeChange = (pageSize: number) => {
      articleState.searchProps.pageSize = pageSize;
      getArticleData();
    };

    const handlePageNumChange = (page: number) => {
      articleState.searchProps.page = page;
      getArticleData();
    };

    const onEdit = (rows: any) => {
      articleState.isEdit = true;
      articleState.articleInfo = {
        ...articleState.articleInfo,
        ...rows
      };
      console.log('articleState.articleInfo', articleState.articleInfo);
      createDialogVisible.value = true;
    };

    const onDelete = async(rows: any) => {
    //   console.log('rows', rows);
      ElMessageBox.confirm('是否删除本文章？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        const { data } = await deleteArticle(rows.id);
        const { code, id } = data;
        // console.log('deleteCode', code);
        if (code === 0) {
          ElMessage({
            type: 'success',
            message: '删除成功'
          });
          getArticleData();
        } else {
          ElMessage({
            type: 'error',
            message: '删除失败'
          });
        }
      }).catch(e => {
        console.log(e);
      });
    };

    return {
      ...toRefs(articleState),
      dateFormat,
      filterArticle,
      createDialogVisible,
      openCreateDialog,
      getArticleData,
      closeDialog,
      handlePageSizeChange,
      handlePageNumChange,
      onEdit,
      onDelete
    };
  }
});
</script>
<style lang="scss" scoped>
.packaged-pagination {
  height: 50px;
  padding: 8px;
  width: 100%;
  .el-pagination {
    float: right;
    .el-pagination__total {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.packaged-pagination {
  &::after {
    content: '';
    clear: both;
  }
  &__total {
    font-size: 12px;
    display: inline-block;
    line-height: 34px;
    height: 34px;
  }
}
</style>
