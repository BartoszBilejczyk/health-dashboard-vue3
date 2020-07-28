<template>
  <header class="app-header">
    <div
      v-if="state.modalOpen"
      class="modal"
    >
    <AppHeaderAppointmentModal
      @close="handleCloseModal"
      @submit="handleEmitAppointment"
    />
    </div>
    <BaseButton @click="handleOpenAppointmentModal">
      Make an appointment
    </BaseButton>
    <div class="app-header__user">
      <img :src="require('../assets/images/user.png')" alt="User image">
      <span>
        Maria Waters
      </span>
    </div>
  </header>
</template>

<script lang="ts">
  import { reactive } from 'vue';
  import AppHeaderAppointmentModal from './AppHeaderAppointmentModal';
  import BaseButton from './common/BaseButton';

  interface Appointment {
    specialty: String,
    name: String,
    date: Date
  }

  interface State {
    modalOpen: Boolean
  }

  export default {
    name: 'AppHeader',
    components: {
      AppHeaderAppointmentModal,
      BaseButton
    },
    setup(props, { emit }) {
      const state = reactive<State>({
        modalOpen: false
      });

      function handleCloseModal() {
        state.modalOpen = false;
      }

      function handleOpenAppointmentModal() {
        state.modalOpen = true;
      }

      function handleEmitAppointment(data: Appointment) {
        emit('submit-appointment', data);
        handleCloseModal();
      }

      return {
        state,
        handleCloseModal,
        handleEmitAppointment,
        handleOpenAppointmentModal
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: $ui-default-measure3x;

    &__user {
      height: 56px;
      display: flex;
      align-items: center;

      span {
        display: inline-block;
        margin-left: $ui-default-measure2x;
        @include font(16, 500);
        color: $color-copy--dark;
      }
    }
  }
</style>
