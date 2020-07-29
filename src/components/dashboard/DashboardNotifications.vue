<template>
  <div v-if="!data.length">
    Your notification inbox is empty
  </div>
  <div
    v-else
    class="dashboard-notifications"
  >
    <div
      v-for="notification in data"
      :key="notification.id"
      class="dashboard-notifications__item list-item"
    >
      <div class="dashboard-notifications__item-section">
        <span :class="[`
          dashboard-notifications__item-type
          dashboard-notifications__item-type--${notification.type}`
        ]"></span>
        <p class="copy">{{ notification.message }}</p>
      </div>
      <div class="dashboard-notifications__item-section">
        <p class="copy copy--gray copy--small">
          {{ notification.date }}
        </p>
        <p
          @click="$emit('dismiss', notification.id)"
          class="copy copy--gray copy--small clickable"
        >
          Dismiss
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboardNotifications',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
  .dashboard-notifications {
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-section {
        display: flex;
        align-items: center;

        > * {
          &:first-of-type {
            margin-right: $ui-default-measure2x;
          }
        }
      }

      &-type {
        width: $ui-default-measure;
        height: $ui-default-measure;
        display: inline-block;
        border-radius: 4px;
        margin-left: 4px;

        &--neutral {
          background-color: #9499fb;
          box-shadow: 0 2px 8px 0 rgba(148, 153, 251, 0.56);
        }

        &--action {
          box-shadow: 0 2px 8px 0 rgba(247, 89, 128, 0.56);
          background-color: #f75980;
        }

        &--info {
          background-color: #16c08f;
          box-shadow: 0 2px 8px 0 rgba(22, 192, 143, 0.56);
        }
      }
    }
  }
</style>
