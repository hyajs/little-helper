<template>
  <el-row class="container">
    <el-col :span="2"
      ><el-image style="width: 100px; height: 100px" src="/little-helper.png"
    /></el-col>
    <el-col :span="4">小帮手</el-col>
    <el-col :span="2"
      ><UseDark v-slot="{ isDark, toggleDark }">
        <el-button @click="toggleDark()">Is Dark: {{ isDark }}</el-button>
      </UseDark>
    </el-col>
    <el-col :span="8" :offset="8">
      <div class="flex justify-between">
        <el-image lazy src="/little-helper.png" class="w-10 h-10">
          <template #error>
            <div class="image-slot">
              <i-material-symbols-person></i-material-symbols-person>
            </div>
          </template>
        </el-image>
        <span>{{ myUser.Name }}</span>
        <span>{{ myUser.Department }}</span>
        <span>{{ myUser.Role }}</span>
        <el-button type="primary">登录</el-button>
        <el-button>登出</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
import user from "@/store/user";
const myUser = user();
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="sass" scoped>
.container
    display: flex
    flex-direction: row  // 横向布局
</style>
