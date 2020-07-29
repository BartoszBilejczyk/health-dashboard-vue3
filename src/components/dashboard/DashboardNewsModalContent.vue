<template>
  <!-- to show multi root tags -->
  <p class="copy copy--bold">
    {{ data.title }}
  </p>
  <p class="copy copy--gray copy--small">
    {{ data.fullDescription }}
  </p>
  <BaseButton @click="$emit('close')">
    Close information
  </BaseButton>
</template>

<script>
  import BaseButton from '../common/BaseButton';

  export default {
    name: 'DashboardNewsModalContent',
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
