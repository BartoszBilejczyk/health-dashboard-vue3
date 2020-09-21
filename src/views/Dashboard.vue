<template>
  <div class="dashboard">
    <Suspense>
      <div class="dashboard__content">
        <AppHeader
          class="dashboard__header"
          @submit-appointment="appointments.handleSubmitAppointment"
        ></AppHeader>
        <Teleport to="#news-modal">
          <div
            v-if="news.state.modalOpen"
            class="modal"
          >
            <DashboardNewsModal
              :data="news.state.activeNews"
              @close="news.handleCloseNewsModal"
            />
          </div>
        </Teleport>
        <div class="dashboard__upper">
          <BaseBox title="Upcoming appointments">
            <DashboardAppointments
              :data="appointments.list.value"
              @confirm="appointments.handleChangeAppointmentStatus($event, 'confirmed')"
              @reject="appointments.handleChangeAppointmentStatus($event, 'rejected')"
            ></DashboardAppointments>
          </BaseBox>
          <BaseBox title="Recent results">
            <DashboardResults
              :data="results.currentResultsData.value"
              :month="results.month.value"
              :type="results.type.value"
              @change-month="results.handleChangeMonth"
              @change-type="results.handleChangeType"
            ></DashboardResults>
          </BaseBox>
        </div>
        <div class="dashboard__lower">
          <BaseBox title="News">
            <DashboardNews
              :data="news.list.value"
              @open="news.handleOpenNewsModal"
            />
          </BaseBox>
          <BaseBox title="Current prescriptions">
            <DashboardPrescriptions :data="prescriptions.list.value" />
          </BaseBox>
          <BaseBox title="Notifications">
            <DashboardNotifications
              :data="notifications.list.value"
              @dismiss="notifications.handleNotificationsDismissal"
            />
          </BaseBox>
        </div>
      </div>
      <template #fallback>
        <div class="dashboard__loading">Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
  import BaseBox from '@/components/common/BaseBox';
  import DashboardAppointments from '@/components/dashboard/DashboardAppointments';
  import DashboardNews from '@/components/dashboard/DashboardNews';
  import DashboardPrescriptions from '@/components/dashboard/DashboardPrescriptions';
  import DashboardNotifications from '@/components/dashboard/DashboardNotifications';
  import DashboardResults from '@/components/dashboard/DashboardResults';
  import DashboardNewsModal from '@/components/dashboard/DashboardNewsModal';
  import AppHeader from '@/components/AppHeader.vue';

  import { useAppointments } from '@/views/dashboard-appointments.setup';
  import { useResults } from '@/views/dashboard-results.setup';
  import { useNews } from '@/views/dashboard-news.setup';
  import { usePrescriptions } from '@/views/dashboard-prescriptions.setup';
  import { useNotifications } from '@/views/dashboard-notifications.setup';

  export default {
    name: 'Dashboard',
    components: {
      BaseBox,
      DashboardAppointments,
      DashboardNews,
      DashboardPrescriptions,
      DashboardNotifications,
      DashboardResults,
      DashboardNewsModal,
      AppHeader
    },
    setup() {
      const notifications = useNotifications();
      const appointments = useAppointments(notifications);
      const results = useResults();
      const news = useNews();
      const prescriptions = usePrescriptions();

      return {
        appointments,
        results,
        news,
        notifications,
        prescriptions
      }
    }
  };
</script>


<style lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  padding: $ui-default-measure4x;

  @include xl-up {
    padding: $ui-default-measure4x 70px;
  }

  &__content {
    height: 100%;
  }

  &__header {
    height: 90px;
    width: 100%;
  }

  &__upper,
  &__lower {
    display: flex;
    flex-wrap: nowrap;

    > .base-box {
      &:not(:first-of-type) {
        margin-left: $ui-default-measure2x;
      }
    }
  }

  &__upper {
    // each has half of header substracted
    height: calc(55% - 45px);
    padding-bottom: $ui-default-measure3x;

    > .base-box {
      &:first-of-type {
        flex: 1;
      }

      &:nth-of-type(2) {
        flex: 2;
      }
    }
  }

  &__lower {
    // each has half of header substracted
    height: calc(45% - 45px);

    > .base-box {
      &:first-of-type {
        flex: 3;
      }

      &:nth-of-type(2) {
        flex: 3;
      }

      &:nth-of-type(3) {
        flex: 4;
      }
    }
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
