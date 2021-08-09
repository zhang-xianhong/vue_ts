<template>
  <div class="verify">
    <div class="verify-head">腾讯云CityBase</div>
    <div class="verify-container">
      <p verify-container__user>尊敬的 CityBase用户：</p>
      <p class="verify-container__password">请输入下方验证码，找回您的密码。</p>
      <el-button type="primary">321367</el-button>
      <div class="verify-container__footer">
        如果您并未启动密码找回流程，则可能是其他人在尝试访问您的帐户。请勿将此验证码转发给或提供给任何人。请注意：该验证码将在10分钟后过期，请尽快验证！
      </div>
    </div>
    <div class="verify-footer">
      <div>邮件来自腾讯云CityBase团队的自动提醒，无需回复。</div>
      <div>如果有任何产品问题或建议，欢迎联系官方公众号：腾讯数字孪生世界</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'VerifyCation',
  setup() {
    const dialogVisible = ref(true);

    const handleClose = () => {
      dialogVisible.value = false;
    };
    return {
      dialogVisible,
      handleClose
    };
  }
});
</script>
<style lang="scss" scoped>
.verify {
  background-color: #e6e6e6;
  height: 100%;
  width: 100%;
  margin: auto;
  padding-top: 100px;
  &-head {
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
  }
  &-container {
    background-color: #fff;
    width: 550px;
    height: 300px;
    margin: 20px auto 0;
    text-align: center;
    padding: 20px 20px 0 20px;
    &__user {
      font-size: 18px;
      font-weight: bolder;
    }
    &__password {
      font-size: 13px;
    }
    .el-button {
      margin: 40px;
      width: 120px;
      height: 40px;
      text-align: center;
      border-radius: 0;
      background: #006eff;
      font-size: 16px;
      box-shadow: 0 5px 5px rgba(255, 255, 255, 0.7);
    }
    &__footer {
      margin: auto;
      width: 80%;
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      color: #888;
    }
  }
  &-footer {
    width: 40%;
    margin: 20px auto;
    padding-bottom: 20px;
    font-size: 12px;
    font-weight: normal;
    color: #888;
    text-align: center;
  }
}
</style>
