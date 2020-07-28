<template>
  <div v-if="!data.length">
    You don't have any prescriptions at the moment.
  </div>
  <div
    v-else
    class="dashboard-prescriptions"
  >
    <div
      v-for="prescription in data"
      :key="prescription.id"
      class="dashboard-prescriptions__item list-item"
    >
      <p class="copy copy--bold">{{ prescription.name }}</p>
      <p class="copy copy--gray copy--small">
        <span class="copy--light">
          {{ prescription.pillSize }}
        </span>
        - {{ prescription.dosage }} until
        <span class="copy--light">
          {{ prescription.end }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboardPrescriptions',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
  .dashboard-prescriptions {
    &__item {
    }
  }
</style>
