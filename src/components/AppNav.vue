<template>
  <div class="app-nav">
    <div class="app-nav__brand">
      <img :src="require('../assets/images/health-logo.png')" alt="Health app logo">
    </div>
    <ul class="app-nav__menu">
      <router-link
          class="app-nav__menu-item"
          tag="li"
          to="/dashboard"
      >
        <IconDashboard />
      </router-link>
    </ul>
    <p class="copy copy--x-small thanks">
      <a href="https://dribbble.com/agaciurysek" target="_blank" rel="noopener noreferrer">
        Cheers to Aga Ciurysek for design
      </a>
    </p>
  </div>
</template>

<script>
import IconDashboard  from './icons/IconDashboard';

export default {
  name: 'AppNav',
  components: {
    IconDashboard
  }
}
</script>

<style lang="scss">
.app-nav .router-link-active {
  box-shadow: 0 2px 64px 0 rgba(135, 136, 233, 0.5);
  border-radius: $ui-default-border-radius;

  > svg > g {
    fill: $color-active-icon;
  }
}
</style>

<style scoped lang="scss">
.app-nav {
  padding: $ui-default-measure4x $ui-default-measure3x;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__brand {
    max-width: 44px;
  }

  &__menu {
    margin-top: 60px;

    &-item {
      width: 44px;
      height: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        width: 24px;
      }
    }
  }
}

.thanks {
  position: fixed;
  bottom: $ui-default-measure;
  left: $ui-default-measure;
  width: 80px;
  text-decoration: underline;
}
</style>
