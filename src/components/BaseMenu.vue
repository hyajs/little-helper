<template>
  <el-menu router>
    <template v-for="item in routes[0]" :key="item">
      <el-menu-item :route="item.path" :index="item.path">
        {{ item.meta.title }}</el-menu-item
      >
    </template>
  </el-menu>
  {{ routes[0] }}
</template>

<script lang="ts" setup>
import { useRouter, RouteRecordNormalized } from "vue-router";

const router = useRouter();
const routes: RouteRecordNormalized[] = router.getRoutes();
</script>

<style></style>
