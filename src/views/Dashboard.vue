<template>
  <div class="dashboard">
    <AppHeader
      class="app__header"
      @submit-appointment="appointments.handleSubmitAppointment"
    ></AppHeader>
    <Teleport to="#news-modal">
      <div
        v-if="news.modalOpen"
        class="modal"
      >
        <DashboardNewsModal
          :data="news.activeNews"
          @close="news.handleCloseNewsModal"
        />
      </div>
    </Teleport>
    <div class="dashboard__upper">
      <BaseBox title="Upcoming appointments">
        <DashboardAppointments
          :data="appointments.list"
          @confirm="appointments.handleChangeAppointmentStatus($event, 'confirmed')"
          @reject="appointments.handleChangeAppointmentStatus($event, 'rejected')"
        ></DashboardAppointments>
      </BaseBox>
      <BaseBox title="Recent results">
        <DashboardResults
            :data="results.currentResultsData"
            :month="results.month"
            :type="results.type"
            @change-month="results.handleChangeMonth"
            @change-type="results.handleChangeType"
        ></DashboardResults>
      </BaseBox>
    </div>
    <div class="dashboard__lower">
      <BaseBox title="News">
        <DashboardNews
            :data="news.list"
            @open="news.handleOpenNewsModal"
        />
      </BaseBox>
      <BaseBox title="Current prescriptions">
        <DashboardPrescriptions :data="prescriptions.list" />
      </BaseBox>
      <BaseBox title="Notifications">
        <DashboardNotifications
            :data="notifications.list"
            @dismiss="notifications.handleNotificationsDismissal"
        />
      </BaseBox>
    </div>
  </div>
</template>

<script>
  import BaseBox from '../components/common/BaseBox';
  import DashboardAppointments from '../components/dashboard/DashboardAppointments';
  import DashboardNews from '../components/dashboard/DashboardNews';
  import DashboardPrescriptions from '../components/dashboard/DashboardPrescriptions';
  import DashboardNotifications from '../components/dashboard/DashboardNotifications';
  import DashboardResults from '../components/dashboard/DashboardResults';
  import DashboardNewsModal from '../components/dashboard/DashboardNewsModal';
  import AppHeader from '@/components/AppHeader.vue';

  import {
    useAppointments,
    useResults,
    useNews,
    usePrescriptions,
    useNotifications
  } from '@/views/dashboard.setup';

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
    height: 55%;
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
    height: 45%;

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
}
</style>
