<template>
  <div class="modal-content appointment-modal">
    <label class="copy copy--small" for="city">
      City
    </label>
    <select
      :value="city"
      id="city"
      class="form-field"
      @change="updateValue($event.target.value, 'city')"
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
      :value="specialty"
      id="specialty"
      class="form-field"
      @change="updateValue($event.target.value, 'specialty')"
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
      :disabled="!specialty || !city"
      :value="name"
      id="name"
      class="form-field"
      @change="updateValue($event.target.value, 'name')"
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
      :value="date"
      @change="updateValue($event.target.value, 'date')"
    >
    <BaseButton
      :small="true"
      class="appointment-modal__close" @click="$emit('close')"
    >
      Close
    </BaseButton>
    <BaseButton
      :disabled="!city || !specialty || !name || !date"
      @click="$emit('submit')"
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
    props: {
      city: {
        type: String,
        default: null
      },
      specialty: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      date: {
        type: String,
        default: null
      }
    },
    setup(props, {emit}) {
      const state = reactive({
        cities: appointmentModalMocks.cities,
        doctors: appointmentModalMocks.doctors,
        specialties: appointmentModalMocks.specialties,
      });

      const specialtyDoctors = computed(() => {
        return state.doctors.filter(doc => doc.specialty === props.specialty && doc.city === props.city)
      });

      function updateValue(value, key) {
        emit(`update:${key}`, value)
      }

      return {
        state,
        specialtyDoctors,
        updateValue
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
