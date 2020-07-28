import { ref, reactive, computed } from 'vue';

import {
  resultsDataMock,
  appointmentsMock,
  prescriptionsMock,
  notificationsMock,
  newsMock
} from '@/mocks/mocks';

export const useAppointments = () => {
  const state = reactive({
    list: appointmentsMock
  })

  function handleChangeAppointmentStatus(id, status) {
    const index = state.list.findIndex(app => app.id === id);

    state.list = [
      ...state.list.slice(0, index),
      {
        ...state.list[index],
        status
      },
      ...state.list.slice(index + 1)
    ]

    if (status === 'rejected') {
      useNotifications().addNotification('action', `You rejected the appointment with ${state.list[index].doctor.name}, ${state.list[index].doctor.specialty}`)

    } else {
      useNotifications().addNotification('info', `You confirmed the appointment with ${state.list[index].doctor.name}, ${state.list[index].doctor.specialty}`)
    }
  }

  function handleSubmitAppointment({specialty, name, date}) {
    console.log('elo')
    state.list = [
      {
        id: state.list.length + 1,
        date,
        status: null,
        doctor: {
          photo: 'user',
          name,
          specialty
        }
      },
      ...state.list
    ]

    useNotifications().addNotification('action', `You made an appointment with ${name}, ${specialty}`)
  }

  return {
    state,
    handleChangeAppointmentStatus,
    handleSubmitAppointment
  }
}

export const useResults = () => {
  const resultsData = resultsDataMock;

  const month = ref('july');
  const type = ref('glucose');

  const currentResultsData = computed(() => resultsData[type.value]['2020'][month.value]);

  function handleChangeType(type) {
    month.value = type;
  }

  function handleChangeMonth(month) {
    type.value = month;
  }

  return {
    month,
    type,
    currentResultsData,
    handleChangeMonth,
    handleChangeType
  }
}

export const useNews = () => {
  const state = reactive({
    list: newsMock
  });

  const modalOpen = ref(false);
  const activeNews = ref(null);

  function handleOpenNewsModal(news) {
    modalOpen.value = true;
    activeNews.value = news;
  }

  function handleCloseNewsModal() {
    modalOpen.value = false;
    activeNews.value = null;
  }

  return {
    state,
    modalOpen,
    activeNews,
    handleCloseNewsModal,
    handleOpenNewsModal
  }
}

export const usePrescriptions = () => {
  const state = reactive({
    list: prescriptionsMock
  });

  return {
    state
  }
}

export const useNotifications = () => {
  const state = reactive({
    list: notificationsMock
  })

  function handleNotificationsDismissal(id) {
    state.list = state.list.filter(notif => notif.id !== id)
  }

  function addNotification(type, message) {
    state.list = [
      {
        id: state.list.length + 1,
        type,
        message,
        date: '01/08/2020'
      },
      ...state.list
    ]
  }

  return {
    state,
    handleNotificationsDismissal,
    addNotification
  }
}
