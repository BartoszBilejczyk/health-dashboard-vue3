<template>
  <div class="base-appointment list-item">
    <div class="base-appointment__content-wrapper">
      <img :src="appointment.doctor.photo" alt="User image">
      <div class="base-appointment__content">
        <span class="copy copy--large copy--bold">
          {{ appointment.doctor.name }}
        </span>
        <span class="copy copy--gray">
          {{ appointment.doctor.specialty }}
        </span>
        <div class="base-appointment__date">
          <span class="copy copy--small">
            {{ appointment.date }}
          </span>
        </div>
      </div>
    </div>
    <div class="base-appointment__actions">
      <div v-if="appointment.status !== 'rejected'">
        <span
          v-if="appointment.status && appointment.status === 'confirmed'"
          class="copy copy--x-small"
        >
          Appointment confirmed
        </span>
        <IconCheckmark
          v-else
          @click="$emit('confirm')"
        />
      </div>
      <div>
        <span
          v-if="appointment.status && appointment.status === 'rejected'"
          class="copy copy--x-small"
        >
          Appointment rejected
        </span>
        <IconReject
          v-else
          @click="$emit('reject')"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import IconCheckmark from '../icons/IconCheckmark';
  import IconReject from '../icons/IconReject';

  export default {
    name: 'BaseAppointment',
    components: {
      IconCheckmark,
      IconReject
    },
    props: {
      appointment: {
        type: Object,
        default: () => ({
          id: null,
          date: null,
          status: null,
          doctor: {
            photo: null,
            name: null,
            specialty: null
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .base-appointment__actions {
    div:first-of-type svg:hover {
      path {
        fill: white;
        stroke: none;
        transition: all 0.2s ease;
      }

      circle {
        fill: #758DFF;
        transition: all 0.2s ease;
      }
    }

    div:last-of-type svg:hover {
      rect {
        fill: white;
        transition: all 0.2s ease;
      }

      circle {
        fill: #F75980;
        transition: all 0.2s ease;
      }
    }
  }
</style>

<style scoped lang="scss">
  .base-appointment {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__content {
      display: flex;
      flex-direction: column;

      &-wrapper {
        display: flex;
        align-items: center;

        img {
          height: $ui-default-measure5x;
          margin-right: $ui-default-measure2x;
        }
      }
    }

    &__actions {
      display: flex;

      > * {
        max-width: 70px;
      }

      > div:last-of-type {
        margin-left: $ui-default-measure3x;
      }
    }
  }
</style>
