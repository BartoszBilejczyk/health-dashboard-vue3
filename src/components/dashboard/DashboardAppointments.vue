<template>
  <div class="dashboard-appointments">
    <BaseAppointment
      v-for="appointment in data"
      :key="appointment.id"
      :appointment="appointment"
      @confirm="$emit('confirm', appointment.id)"
      @reject="$emit('reject', appointment.id)"
    />
  </div>
</template>

<script>
  import BaseAppointment from '../common/BaseAppointment';

  export default {
    name: 'DashboardAppointments',
    components: {
      BaseAppointment
    },
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
