<template>
  <button
    class="base-button"
    :class="{'base-button--small': small}"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      small: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-button {
    border-radius: $ui-default-border-radius;
    border: none;
    padding: $ui-default-measure2x $ui-default-measure4x;
    box-shadow: 0 7px 23px 0 rgba(132, 134, 218, 0.36);
    background-color: $color-primary;
    height: 56px;
    @include font(15, 500);
    color: white;
    transition: background-color 0.3s ease;

    &:active,
    &:focus {
      outline: none;
    }

    &:hover {
      background-color: darken($color-primary, 5%)
    }

    &--small {
      padding: 4px  $ui-default-measure;
      @include font(10, 400);
      height: auto;
    }

    &[disabled] {
      background: gray;
      cursor: not-allowed
    }
  }
</style>
