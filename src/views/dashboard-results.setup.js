import { computed, ref } from 'vue';

import { resultsDataMock } from '@/mocks/mocks';

export function useResults() {
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
