<template>
  <div class="layout">
    <div class="header"><base-header></base-header></div>

    <div class="content">
      <div class="menu"><base-menu></base-menu></div>
      <div class="body">
        <!-- 内容 -->
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.header {
  height: 100px;
  background-color: #333;
  width: 100%;
  color: white;
}

.content {
  display: flex;
  flex: 1;
}

.menu {
  width: 200px;
  background-color: #f2f2f2;
}

.body {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
