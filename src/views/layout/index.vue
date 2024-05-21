<template>
  <el-container class="main-container">
    <el-header>
      <h1> WebGIS一张图管理系统</h1>
      <!-- 右侧的菜单 -->
      <el-menu class="el-menu-top" mode="horizontal" background-color="#32373e" text-color="#fff"
        active-text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <!-- 头像 -->
            <img src="" alt="" class="avatar" />
            <span>个人中心</span>
          </template>
          <el-menu-item index="1-1"><i class="el-icon-s-operation"></i>基本资料</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-camera"></i>更换头像</el-menu-item>
          <el-menu-item index="1-3"><i class="el-icon-key"></i>重置密码</el-menu-item>
        </el-submenu>
        <el-menu-item index="2" @click="logoutFn"><i class="el-icon-switch-button"></i>退出</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside class="sys-menu">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleMenuSelect"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="true">
          <el-menu-item index="1">
            <i class="el-icon-monitor"></i>
            <span slot="title">首页大屏</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">一张图</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 地图区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'webgis-layout',
  components: {

  },
  methods: {
    logoutFn () {

    },
    handleMenuSelect (index) {
      if (index === '1') {
        // 跳转到首页大屏
        this.$router.push('/')
      } else if (index === '2') {
        // 跳转到一张图
        this.$router.push('/onemap')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;

  .el-header,
  .el-aside {
    background-color: #32373e;
    // width: 64px !important;
    overflow: hidden !important;
  }
  .el-aside{
    width: 64px !important;
  }
  .el-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
  }
}

.avatar {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #fff;
  margin-right: 10px;
  object-fit: cover;
}

// 左侧边栏用户信息区域
.user-box {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  user-select: none;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 15px;
    object-fit: cover;
  }

  span {
    color: white;
    font-size: 12px;
  }
}

// 侧边栏菜单的样式
.el-aside {

  .el-submenu,
  .el-menu-item {
    // width: 200px;
    user-select: none;
  }
}
</style>
