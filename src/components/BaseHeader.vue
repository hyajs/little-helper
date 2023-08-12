<template>
  <el-row class="container">
    <el-col :span="2"
      ><el-image style="width: 100px; height: 100px" src="/little-helper.png"
    /></el-col>
    <el-col :span="4" class="gradient-teal-blue">小帮手</el-col>
    <el-col :span="2"
      ><UseDark v-slot="{ isDark, toggleDark }">
        <el-button @click="toggleDark()">Is Dark: {{ isDark }}</el-button>
      </UseDark>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="sass" scoped>
.container
    display: flex
    flex-direction: row  // 横向布局
</style>
