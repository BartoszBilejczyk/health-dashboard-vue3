import { ref } from 'vue';

import { notificationsMock } from '@/mocks/mocks';

export const useNotifications =() => {
  const list = ref(notificationsMock);

  function handleNotificationsDismissal(id) {
    list.value = list.value.filter(notif => notif.id !== id)
  }

  function addNotification(type, message) {
    list.value = [
      {
        id: Number(list.value.length + 1),
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
