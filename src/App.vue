<template>
  <div id="app" class="app">
    <Suspense>
      <template #default>
        <AppNav class="app__nav"></AppNav>
        <main class="app__main">
          <router-view
            class="app__router-view"
          />
        </main>
      </template>
      <template #fallback>
        <div class="app__loading">Loading...</div>
      </template>
    </Suspense>
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
    }

    &__header {
      height: 90px;
      width: 100%;
    }

    &__router-view {
      height: 100vh;
      width: 100%;
      background: $color-primary-background;
    }

    &__loading {
      height: 100vh;
      width: 100%;
      background: $color-primary-background;
      display: flex;
      align-items: center;
      justify-content: center;
      @include font(20, 500);
    }
  }
</style>
