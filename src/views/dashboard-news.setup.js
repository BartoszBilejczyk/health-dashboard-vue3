import { reactive, ref } from 'vue';

import { newsMock } from '@/mocks/mocks';

const emptyNews = {
  id: 1,
  title: '',
  description: '',
  fullDescription: ''
}

export const useNews = () => {
  const state = reactive({
    modalOpen: false,
    activeNews: {...emptyNews},
  });

  const list = ref(newsMock)

  function handleOpenNewsModal(news) {
    state.modalOpen = true;
    state.activeNews = news;
  }

  function handleCloseNewsModal() {
    state.modalOpen = false;
    state.activeNews = {...emptyNews};
  }

  return {
    state,
    list,
    handleCloseNewsModal,
    handleOpenNewsModal
  }
}
