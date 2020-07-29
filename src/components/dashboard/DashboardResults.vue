<template>
  <div>
    <!-- <DashboardResultsChart :data="data"></DashboardResultsChart>-->
    <p class="copy">
      Chart Results are only available in Vue 2 app because vue-chartjs is not compatible with Vue 3
    </p>
    <div class="dashboard-results__nav">
      <div class="dashboard-results-month">
        <select
            class="form-field form-field-no-border"
            :value="month"
            @change="$emit('change-month', $event.target.value)">
          <option value="july">
            July
          </option>
          <option value="august">
            August
          </option>
        </select>
      </div>
      <div class="dashboard-results-type">
        <select
          class="form-field form-field-no-border"
          :value="type"
          @change="$emit('change-type', $event.target.value)"
        >
          <option value="glucose">
            Glucose
          </option>
          <option value="weight">
            Weight
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboardResults',
    props: {
      data: {
        type: Array,
        default: () => []
      },
      month: {
        type: String,
        default: 'july'
      },
      type: {
        type: String,
        default: 'glucose'
      }
    }
  }
</script>

<style scoped lang="scss">
  .dashboard-results {
    &__nav {
      position: absolute;
      top: $ui-default-measure2x;
      right: $ui-default-measure2x;
      display: flex;

      > * {
        margin-left: $ui-default-measure4x;
      }
    }
  }
</style>
