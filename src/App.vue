<template>
  <div id="app" class="app">
    <AppNav class="app__nav"></AppNav>
    <main class="app__main">
      <router-view class="app__router-view"/>
    </main>
  </div>
</template>

<script>
  import AppNav from '@/components/AppNav.vue';

  export default {
    name: 'App',
    components: {
      AppNav
    }
  };
</script>


<style lang="scss" scoped>
  .app {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background: $color-primary-background--light;

    &__nav {
      width: 100px;
      box-shadow: 0 8px 22px 0 rgba(132, 137, 155, 0.09);
    }

    &__main {
      width: calc(100vw - 100px);
      background: $color-primary-background;
    }

    &__router-view {
      height: 100vh;
      width: 100%;
    }
  }
</style>
