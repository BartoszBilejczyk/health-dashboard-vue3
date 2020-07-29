<template>
  <div class="modal-content dashboard-news-modal">
    <DashboardNewsModalContent
      :data="data"
      @close="$emit('close')"
    />
  </div>
</template>

<script>
import DashboardNewsModalContent from '@/components/dashboard/DashboardNewsModalContent';

export default {
  name: 'DashboardNewsModal',
  components: {
    DashboardNewsModalContent
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.dashboard-news-modal {
  > * {
    margin-bottom: $ui-default-measure2x;
  }

  button {
    margin: $ui-default-measure2x auto 0;
  }
}
</style>
