export const resultsDataMock = {
  glucose: {
    '2020': {
      july: Array.from({length: 31}, () => Math.floor(Math.random() * (120 - 90) + 90)),
      august: Array.from({length: 31}, () => Math.floor(Math.random() * (120 - 90) + 90))
    }
  },
  weight: {
    '2020': {
      july: Array.from({length: 31}, () => (Math.random() * (59 - 58) + 58).toFixed(1)),
      august: Array.from({length: 31}, () => (Math.random() * (58 - 57) + 58).toFixed(1))
    }
  }
}

export const appointmentsMock = [
  {
    id: 1,
    date: '22/07/2020, 2:30 PM',
    status: null,
    doctor: {
      photo: 'https://randomuser.me/api/portraits/thumb/women/95.jpg',
      name: 'dr Anthony Wagner',
      specialty: 'dermatologist'
    }
  },
  {
    id: 2,
    date: '25/07/2020, 4:30 PM',
    status: null,
    doctor: {
      photo: 'https://randomuser.me/api/portraits/thumb/women/95.jpg',
      name: 'dr Mike Brown',
      specialty: 'dentist'
    }
  }
]

export const newsMock = [
  {
    id: 1,
    title: '10% off for dermatologist consultation',
    description: 'Lorem ipsum dolor sit amet',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi officia officiis totam ut veritatis vero voluptate! Accusantium atque dolore est eveniet officiis quae voluptatibus? Eveniet ipsum quod unde vitae!'
  },
  {
    id: 2,
    title: 'Free visit to the cardiologist on May 2-6',
    description: 'Lorem ipsum dolor sit amet',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi officia officiis totam ut veritatis vero voluptate! Accusantium atque dolore est eveniet officiis quae voluptatibus? Eveniet ipsum quod unde vitae!'
  }
]

export const prescriptionsMock = [
  {
    id: 1,
    name: 'Aspirin',
    pillSize: '100mg',
    dosage: 'Once per day in the morning',
    end: '25/07/2020'
  },
  {
    id: 2,
    name: 'Vitamin D',
    pillSize: '3mg',
    dosage: 'Once per day in the morning',
    end: '31/07/2020'
  },
  {
    id: 3,
    name: 'Vitamin C',
    pillSize: '100mg',
    dosage: '2x per day',
    end: '31/07/2020'
  }
]

export const notificationsMock = [
  {
    id: 1,
    type: 'info',
    message: 'You booked a visit to dermatologist',
    date: '31/07/2020'
  },
  {
    id: 2,
    type: 'action',
    message: 'Dr. John Smith cancelled your visit',
    date: '30/07/2020'
  },
  {
    id: 3,
    type: 'info',
    message: 'Your results are available to download',
    date: '29/07/2020'
  },
  {
    id: 4,
    type: 'action',
    message: 'Dr. Ann Doe changed date of your visit',
    date: '28/07/2020'
  },
  {
    id: 5,
    type: 'neutral',
    message: 'You changed date of appointment',
    date: '28/07/2020'
  }
]

// Appointment Modal

export const appointmentModalMockCities = [
  { value: 'warsaw', label: 'Warsaw'},
  { value: 'wroclaw', label: 'Wroclaw'},
  { value: 'poznan', label: 'Poznan'},
];

export const appointmentModalMockDoctors = [
  { value: 'dr John Doe', label: 'dr John Doe', specialty: 'dermatologist', city: 'warsaw'},
  { value: 'dr Jane Smith', label: 'dr Jane Smith', specialty: 'dermatologist', city: 'wroclaw'},
  { value: 'dr Trevor Wyatt', label: 'dr Trevor Wyatt', specialty: 'dermatologist', city: 'poznan'},
  { value: 'dr Andrew Milner', label: 'dr Andrew Milner', specialty: 'dentist', city: 'warsaw'},
  { value: 'dr Alicia Brown', label: 'dr Alicia Brown', specialty: 'dentist', city: 'wroclaw'},
  { value: 'dr Ellie Rose Lindsay', label: 'dr Ellie Rose Lindsay', specialty: 'dentist', city: 'poznan'},
  { value: 'dr Alex Davies', label: 'dr Alex Davies', specialty: 'psychologist', city: 'warsaw'},
  { value: 'dr Patricia Firmino', label: 'dr Patricia Firmino', specialty: 'psychologist', city: 'wroclaw'},
  { value: 'dr Janine Higgs', label: 'dr Janine Higgs', specialty: 'psychologist', city: 'poznan'}
];

export const appointmentModalMockSpecialties = [
  { value: 'dermatologist', label: 'Dermatologist' },
  { value: 'dentist', label: 'Dentist' },
  { value: 'psychologist', label: 'Psychologist' },
]
