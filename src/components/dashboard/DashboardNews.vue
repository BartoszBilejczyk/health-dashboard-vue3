<template>
  <div class="dashboard-news">
    <div
      v-for="news in data"
      :key="news.id"
      class="dashboard-news__item list-item"
    >
      <div>
        <p class="copy copy--bold">
          {{ news.title }}
        </p>
        <p class="copy copy--gray copy--small">
          {{ news.description }}
        </p>
      </div>
      <IconChevronRight
        class="clickable"
        @click="$emit('open', news)"
      ></IconChevronRight>
    </div>
  </div>
</template>

<script>
  import IconChevronRight from '../icons/IconChevronRight';

  export default {
    name: 'DashboardNews',
    components: {
      IconChevronRight
    },
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
  .dashboard-news {
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
