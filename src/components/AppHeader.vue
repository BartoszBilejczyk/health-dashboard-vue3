<template>
  <header class="app-header">
    <Teleport
      to="#appointment-modal"
      :disabled="state.preview"
    >
      <div
        v-if="state.modalOpen && !state.preview"
        class="modal"
      >
        <AppHeaderAppointmentModal
          v-model:city="state.city"
          v-model:specialty="state.specialty"
          v-model:name="state.name"
          v-model:date="state.date"
          @close="handleCloseModal"
          @submit="handleEmitAppointment"
        />
      </div>
    </Teleport>
    <BaseButton @click="handleOpenAppointmentModal">
      Make an appointment
    </BaseButton>
    <div>
      <BaseButton
        :small="true"
        @click="handleTogglePreview"
      >
        Toggle preview only mode to enable/disable Teleport in Make an appointment
      </BaseButton>
      Teleport modal: {{ state.preview ? 'disabled' : 'enabled' }}
    </div>
    <div class="app-header__user">
      <img :src="state.user.photo" alt="User image">
      <span>
        {{ state.user.name }}
      </span>
    </div>
  </header>
</template>

<script>
  import { reactive } from 'vue';

  import AppHeaderAppointmentModal from './AppHeaderAppointmentModal';
  import BaseButton from './common/BaseButton';
  import axios from 'axios';

  export default {
    name: 'AppHeader',
    components: {
      AppHeaderAppointmentModal,
      BaseButton
    },
    async setup(props, { emit }) {
      const state = reactive({
        modalOpen: false,
        preview: false,
        user: {
          name: null,
          photo: null
        },
        city: '',
        specialty: '',
        name: '',
        date: ''
      });

      function handleCloseModal() {
        state.modalOpen = false;
      }

      function handleOpenAppointmentModal() {
        state.city = '';
        state.specialty = '';
        state.name = '';
        state.date = '';
        state.modalOpen = true;
      }

      function handleTogglePreview() {
        state.preview = !state.preview;
      }

      function handleEmitAppointment() {
        emit('submit-appointment', {
          specialty: state.specialty,
          name: state.name,
          date: state.date
        });

        handleCloseModal();
      }

      const { data } = await axios.get('https://randomuser.me/api/');

      state.user = {
        photo: data.results[0].picture.thumbnail,
        name: `${data.results[0].name.first} ${data.results[0].name.last}`
      }

      return {
        state,
        handleCloseModal,
        handleEmitAppointment,
        handleOpenAppointmentModal,
        handleTogglePreview
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

      img {
        border-radius: $ui-default-border-radius--circle;
      }

      span {
        display: inline-block;
        margin-left: $ui-default-measure2x;
        @include font(16, 500);
        color: $color-copy--dark;
      }
    }
  }
</style>
