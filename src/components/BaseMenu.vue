<template>
  <div>
    <el-switch v-model="isCollapse" size="small" active-text="展开" inactive-text="收缩" />
    <el-menu :collapse="isCollapse" router>

      <el-menu-item index="/draft">
        <el-icon><icon-menu /></el-icon>
        <template #title>草稿箱</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>阶段一</template>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <el-icon>
          <setting />
        </el-icon>
        <template #title>阶段二</template>
      </el-menu-item>

      <el-menu-item index="4" disabled>
        <el-icon>
          <setting />
        </el-icon>
        <template #title>阶段三</template>
      </el-menu-item>

      <el-menu-item index="4" disabled>
        <el-icon>
          <setting />
        </el-icon>
        <template #title>阶段四</template>
      </el-menu-item>

      <el-menu-item index="4" disabled>
        <el-icon>
          <setting />
        </el-icon>
        <template #title>阶段五</template>
      </el-menu-item>

      <el-menu-item index="4" disabled>
        <el-icon>
          <setting />
        </el-icon>
        <template #title>管理层报表</template>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
</script>

<style></style>
