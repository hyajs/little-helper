<template>
  <div class="layout">
    <div class="header"><base-header></base-header></div>
    <div class="content">
      <div class="menu"><base-menu></base-menu></div>
      <div class="body">
        <router-view></router-view>
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
  width: 100%;
}

.content {
  display: flex;
  flex: 1;
}

.body {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
