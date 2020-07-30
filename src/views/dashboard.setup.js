import { ref, computed } from 'vue';

import {
  resultsDataMock,
  appointmentsMock,
  prescriptionsMock,
  notificationsMock,
  newsMock
} from '@/mocks/mocks';


export const useAppointments = (notifications) => {
  const list = ref(appointmentsMock);

  function handleChangeAppointmentStatus(id, status) {
    const index = list.value.findIndex(app => app.id === id);

    list.value = [
      ...list.value.slice(0, index),
      {
        ...list.value[index],
        status
      },
      ...list.value.slice(index + 1)
    ]

    if (status === 'rejected') {
      notifications.addNotification('action', `You rejected the appointment with ${list.value[index].doctor.name}, ${list.value[index].doctor.specialty}`)

    } else {
      notifications.addNotification('info', `You confirmed the appointment with ${list.value[index].doctor.name}, ${list.value[index].doctor.specialty}`)
    }
  }

  function handleSubmitAppointment({specialty, name, date}) {
    list.value = [
      {
        id: list.value.length + 1,
        date,
        status: null,
        doctor: {
          photo: 'user',
          name,
          specialty
        }
      },
      ...list.value
    ]

    notifications.addNotification('action', `You made an appointment with ${name}, ${specialty}`)
  }

  return {
    list,
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
  const list = ref(newsMock);

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
    list,
    modalOpen,
    activeNews,
    handleCloseNewsModal,
    handleOpenNewsModal
  }
}


export const usePrescriptions = () => {
  const list = ref(prescriptionsMock);

  return {
    list
  }
}


export const useNotifications = () => {
  const list = ref(notificationsMock);

  function handleNotificationsDismissal(id) {
    list.value = list.value.filter(notif => notif.id !== id)
  }

  function addNotification(type, message) {
    list.value = [
      {
        id: list.value.length + 1,
        type,
        message,
        date: '01/08/2020'
      },
      ...list.value
    ]
  }

  return {
    list,
    handleNotificationsDismissal,
    addNotification
  }
}
