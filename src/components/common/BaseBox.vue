<template>
  <div class="base-box">
    <h2 class="heading heading--primary">
      {{ title }}
    </h2>
    <div class="base-box__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseBox',
    props: {
      title: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-box {
    border-radius: $ui-default-border-radius;
    box-shadow: 0 9px 27px 0 rgba(131, 142, 176, 0.08);
    background-image: linear-gradient(309deg, #fdfdfd 97%, #f8f9fc);
    padding: $ui-default-measure2x $ui-default-measure3x;
    position: relative;

    &__content {
      max-height: calc(100% - 70px);
      overflow-y: auto;
    }
  }
</style>
