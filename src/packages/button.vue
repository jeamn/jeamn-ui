<template>
  <button class="jeamn-button" :class="btnClass" :disabled="loading" @click="$emit('click', $event)">
    <jeamn-icon :icon="icon" v-if="icon && !loading" class="icon"></jeamn-icon>
    <jeamn-icon icon="91jiazai" v-if="loading" class="icon"></jeamn-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "jeamn-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        console.log(type);
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            "type类型必须为：warning、success、danger、info、primary"
          );
          return false;
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (!["left", "right"].includes(type)) {
          console.error("iconPosition属性必须为：left、right");
          return false;
        }
        return true;
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`jeamn-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`jeamn-button-${this.iconPosition}`);
      }
      return classes;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_var.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.jeamn-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  padding: 12px 20px;
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        warning: $warning,
        danger: $danger,
        info: $info
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        warning: $warning-active,
        danger: $danger-active,
        info: $info-active
      )
  {
    &-#{$type}:hover,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon + span {
    margin-left: 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
    .icon + span {
      margin-left: 0;
      margin-right: 4px;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>