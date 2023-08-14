<template>
  <div>
    <el-switch
      v-model="isCollapse"
      size="small"
      active-text="展开"
      inactive-text="收缩"
    />
    <el-menu :collapse="isCollapse" router>
      <el-menu-item index="/draft">
        <i-material-symbols-drafts class="mr-2"></i-material-symbols-drafts>
        <template #title>草稿箱</template>
      </el-menu-item>
      <el-menu-item index="/plan">
        <i-material-symbols-psychology-alt-outline
          class="mr-2"
        ></i-material-symbols-psychology-alt-outline>
        <template #title>计划阶段</template>
      </el-menu-item>
      <el-menu-item index="/do">
        <i-material-symbols-person-raised-hand
          class="mr-2"
        ></i-material-symbols-person-raised-hand>
        <template #title>执行阶段</template>
      </el-menu-item>

      <el-menu-item index="/check">
        <i-material-symbols-sheets class="mr-2"></i-material-symbols-sheets>
        <template #title>检查阶段</template>
      </el-menu-item>

      <el-menu-item index="/act">
        <i-ant-design-stock-outlined class="mr-2"></i-ant-design-stock-outlined>
        <template #title>处理阶段</template>
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
const isCollapse = ref(true);
</script>

<style></style>
