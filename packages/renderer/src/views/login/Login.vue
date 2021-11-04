<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0">
          <Form v-slot="{ errors, validate }" ref="form">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <Field as="input" type="text" name="name" v-model="state.username" placeholder="请输入用户名" rules="required|email" autocomplete="off" class="layui-input" />
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.name }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <Field as="input" type="password" name="password" v-model="state.password" placeholder="请输入密码" rules="required|min:6" autocomplete="off" class="layui-input" />
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.password }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <Field as="input" type="text" name="code" v-model="state.code" placeholder="请输入验证码" rules="required|length:4" autocomplete="off" class="layui-input" />
                    </div>
                    <div class>
                      <span class="svg" style="color: #c00" @click="getCaptcha()" v-html="state.svg"></span>
                    </div>
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.code }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" type="button" @click="validate().then(loginHandle)">
                    立即登录
                  </button>
                  <span style="padding-left: 20px">
                    <router-link :to="{ name: 'forget' }">忘记密码？</router-link>
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a href onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                  <a href onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Form, Field } from 'vee-validate'
import { LoginService } from '@/services/login'
import { defineComponent, onMounted } from 'vue'
import { alert } from '@/components/modules/alert'

const { state, loginHandle, getCaptcha } = LoginService()

export default defineComponent({
  name: 'login',
  components: {
    Form, Field
  },
  setup () {
    onMounted(async () => await getCaptcha())

    return {
      state,
      loginHandle,
      getCaptcha,
      alert
    }
  }
})
</script>
