<template>
  <div class="modal-content dashboard-news-modal">
    <p class="copy copy--bold">
      {{ data.title }}
    </p>
    <p class="copy copy--gray copy--small">
      {{ data.fullDescription }}
    </p>
    <BaseButton @click="$emit('close')">
      Close information
    </BaseButton>
  </div>
</template>

<script>
  import BaseButton from '../common/BaseButton';

  export default {
    name: 'DashboardNewsModal',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      BaseButton
    }
  }
</script>

<style scoped lang="scss">
  .dashboard-news-modal {
    > * {
      margin-bottom: $ui-default-measure2x;
    }

    button {
      margin: $ui-default-measure2x auto 0;
    }
  }
</style>
