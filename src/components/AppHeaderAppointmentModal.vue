<template>
  <div class="modal-content appointment-modal">
    <label class="copy copy--small" for="city">
      City
    </label>
    <select
      v-model="state.city"
      id="city"
      class="form-field"
    >
      <option
        v-for="option in state.cities"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <label class="copy copy--small" for="specialty">
      Specialty
    </label>
    <select
      v-model="state.specialty"
      id="specialty"
      class="form-field"
    >
      <option
        v-for="option in state.specialties"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <label
      class="copy copy--small"
      for="name"
    >
      Doctor
    </label>
    <select
      :disabled="!state.specialty || !state.city"
      v-model="state.name"
      id="name"
      class="form-field"
    >
      <option
        v-for="option in specialtyDoctors"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <label class="copy copy--small" for="date">
      Date
    </label>
    <input
      class="form-field"
      type="date"
      id="date"
      v-model="state.date"
    >
    <BaseButton
      :small="true"
      class="appointment-modal__close" @click="$emit('close')"
    >
      Close
    </BaseButton>
    <BaseButton
      :disabled="!state.city || !state.specialty || !state.name || !state.date"
      @click="$emit('submit', {specialty: state.specialty, name: state.name, date: state.date})"
    >
      Submit
    </BaseButton>
  </div>
</template>

<script>
  import { reactive, computed } from 'vue';

  import BaseButton from './common/BaseButton';
  import { appointmentModalMocks } from '@/mocks/mocks';

  export default {
    name: 'AppHeaderAppointmentModal',
    components: {
      BaseButton
    },
    setup() {
      const state = reactive({
        city: null,
        specialty: null,
        name: null,
        date: null,
        cities: appointmentModalMocks.cities,
        doctors: appointmentModalMocks.doctors,
        specialties: appointmentModalMocks.specialties,
      });

      const specialtyDoctors = computed(() => {
        return state.doctors.filter(doc => doc.specialty === state.specialty && doc.city === state.city)
      });

      return {
        state,
        specialtyDoctors,
      }
    }
  }
</script>

<style lang="scss">
  .appointment-modal {
    button {
      margin: $ui-default-measure3x auto 0;

      &.appointment-modal__close {
        margin: 0;
        position: absolute;
        right: $ui-default-measure2x;
        top: $ui-default-measure2x;
      }
    }

    label {
      margin: 12px 0 4px;
    }
  }
</style>
