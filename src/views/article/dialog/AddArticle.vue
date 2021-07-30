<template>
  <div class="add-article">
      <el-dialog v-model="isVisible" width="600px" @close="closeArticleForm">
        <template #title>
            <span class="pop-title">
                {{ isEditable ? '编辑文章' : '新建文章' }}
            </span>
        </template>
        <el-form ref="articleRef" :model="articleData" :rules="articleRules" label-position="left">
            <el-form-item label="文章类型" prop="typeId" :label-width="labelWidth">
                <el-select v-model="articleData.typeId" placeholder="请选择文章类型" clearable :disabled="isEditable">
                    <el-option v-for="(item, index) in articleData.types" :key="index" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文章标题" prop="articleTitle" :label-width="labelWidth">
                <el-input v-model="articleData.articleTitle"></el-input>
            </el-form-item>
            <el-form-item label="文章简介" prop="articleIntroduce" :label-width="labelWidth">
                <el-input
                v-model="articleData.articleIntroduce"
                type="textarea"
                :rows="3"
                placeholder="请输入文章简介，不得超过50个字符"
                :maxlength="50"
                show-word-limit
                ></el-input>
            </el-form-item>
            <el-form-item label="文章内容" prop="articleContent" :label-width="labelWidth">
                <el-input
                v-model="articleData.articleContent"
                type="textarea"
                :rows="5"
                placeholder="请输入文章内容，不得超过2048个字符"
                :maxlength="2048"
                show-word-limit
                ></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button type="primary" :loading="btnLoading" @click="submitArticleForm">确定</el-button>
            <el-button @click="closeArticleForm">取消</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script lang="ts">
import { ElMessage } from 'element-plus';
import { computed, defineComponent, PropType, Ref, ref, SetupContext } from 'vue';
import { addArticle } from '@/api/article/article-add';
import { updateArticle } from '@/api/article/article-update';
import { IArticle } from '@/types/index';
export default defineComponent({
  name: 'AddArticle',
  props: {
    visable: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    articleInfo: {
      type: Object as PropType<IArticle>,
      default: () => ({})
    }
  },
  setup(props: { visable: boolean, isEdit: boolean, articleInfo: IArticle }, ctx: SetupContext) {
    const labelWidth = ref('80px');
    const btnLoading = ref(false);
    const isVisible: any = computed(() => props.visable);
    const articleData: Ref<IArticle> = computed(() => props.articleInfo);
    const isEditable: Ref<boolean> = computed(() => props.isEdit);
    console.log('articleData', articleData.value);
    // const articleData: IArticle = reactive({
    //   typeId: 1,
    //   articleTitle: '',
    //   articleContent: '',
    //   articleIntroduce: '',
    //   addTime: '',
    //   viewCount: 0,
    //   types: [
    //     { id: 1, name: '学习' },
    //     { id: 2, name: '软技能' }
    //   ]
    // });
    const articleRef: any = ref(null);

    const articleRules = {
      typeId: [{ required: true, message: '请选择文章类型', trigger: 'change' }],
      articleTitle: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
      articleIntroduce: [{ required: true, message: '请输入文章简介', trigger: 'blur' }],
      articleContent: [{ required: true, message: '请输入文章内容', trigger: 'blur' }]
    };

    const closeArticleForm = () => {
      isEditable.value = false;
      articleRef.value.resetFields();
      ctx.emit('close');
    };

    // 提交与编辑表单信息
    const submitArticleForm = async() => {
      articleRef.value.validate(async(valid: boolean) => {
        if (valid) {
          btnLoading.value = true;
          if (!isEditable.value) {
            try {
            // const { code } = await addArticle(articleData);
              const { data } = await addArticle(articleData.value);
              const { rows, code } = data;
              // console.log('rows', rows);
              if (code === 0) {
                ElMessage({
                  type: 'success',
                  message: '添加成功'
                });
                ctx.emit('getArticleInfo');
              } else {
                ElMessage({
                  type: 'error',
                  message: '添加失败'
                });
              }
              btnLoading.value = false;
              closeArticleForm();
            } catch (e) {
              console.log(e);
              btnLoading.value = false;
            }
          } else {
            try {
              const { data } = await updateArticle(articleData.value.id, {
                ...articleData.value
              });
              const { code, res } = data;
              if (code === 0) {
                ElMessage({
                  type: 'success',
                  message: '更新成功'
                });
                ctx.emit('getArticleInfo');
              } else {
                ElMessage({
                  type: 'warning',
                  message: '更新失败'
                });
              }
              closeArticleForm();
              btnLoading.value = false;
            } catch (e) {
              console.log(e);
              btnLoading.value = false;
            }
          }
        }
      });
    };

    return {
      labelWidth,
      btnLoading,
      articleData,
      isVisible,
      isEditable,
      articleRef,
      articleRules,
      closeArticleForm,
      submitArticleForm
    };
  }
});
</script>
<style lang="scss" scoped>
.pop-title {
  font-weight: bolder;
  font-size: 16px;
}
.el-select {
  width: 100%;
}
.publisher-name {
  padding-left: 4px;
}
.dialog-footer {
  margin-top: 35px;
  display: flex;
  justify-content: center;
}
</style>
