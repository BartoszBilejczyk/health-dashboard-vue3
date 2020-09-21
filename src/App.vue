<template>
  <div id="app" class="app">
    <AppNav class="app__nav"></AppNav>
    <main class="app__main">
      <router-view v-slot="{ Component }" class="app__router-view">
        <Suspense
            :onFallback="state.isLoaded = false"
            :onResolve="state.isLoaded = true"
        >
          <template v-if="state.isLoaded">
            <component :is="Component" />
          </template>
          <template v-else>
            <div class="dashboard__loading">Loading...</div>
          </template>
        </Suspense>
      </router-view>
    </main>
  </div>
</template>

<script>
  import { reactive } from 'vue';

  import AppNav from '@/components/AppNav.vue';

  export default {
    name: 'App',
    components: {
      AppNav
    },
    setup() {
      const state = reactive({
        isLoaded: false
      });

      return {
        state
      };
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

    &__router-view {
      height: 100vh;
      width: 100%;
      background: $color-primary-background;
    }
  }
</style>
