import { ref } from 'vue';

import { prescriptionsMock } from '@/mocks/mocks';

export function usePrescriptions() {
  const list = ref(prescriptionsMock);

  return {
    list
  }
}
