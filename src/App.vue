<template>
  <div id="app">
    <jeamn-button>默认</jeamn-button>

    <!-- 按钮组件 -->
    <jeamn-button type="primary">主要按钮</jeamn-button>
    <jeamn-button type="warning">警告按钮</jeamn-button>
    <jeamn-button type="danger">危险按钮</jeamn-button>
    <jeamn-button type="success">成功按钮</jeamn-button>
    <jeamn-button type="info">信息按钮</jeamn-button>

    <!-- icon组件 -->
    <jeamn-icon icon="sousuo"></jeamn-icon>
    <jeamn-icon icon="cuo"></jeamn-icon>
    <jeamn-icon icon="jilu"></jeamn-icon>
    <jeamn-icon icon="weimingmingwenjianjia_jiantou"></jeamn-icon>
    <jeamn-icon icon="icon_zuo"></jeamn-icon>
    <jeamn-icon icon="yanjing"></jeamn-icon>

    <!-- 带icon的按钮组件 -->
    <jeamn-button type="warning" icon="sousuo" icon-position="right">警告按钮</jeamn-button>
    <jeamn-button type="success" icon="sousuo">成功按钮</jeamn-button>

    <!-- 带loading按钮 -->
    <jeamn-button type="info" loading>加载中的按钮</jeamn-button>

    <!-- 按钮点击事件 -->
    <jeamn-button type="danger" @click="handleClick">触发危险事件</jeamn-button>

    <!-- 按钮组 -->
    <jeamn-button-group>
      <jeamn-button icon="icon_zuo">上一页</jeamn-button>
      <jeamn-button icon="weimingmingwenjianjia_jiantou" icon-position="right">下一页</jeamn-button>
    </jeamn-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleClick(e) {
      console.log("handleClick", e);
    }
  }
};
</script>

<style lang="scss">
</style>
