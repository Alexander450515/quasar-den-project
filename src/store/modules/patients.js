const state = {
  patients: [
    {
      serialNumber: 1,
      cardNumber: 1,
      FIO: "Иванов Иван Иванович",
      gender: "Мужской",
      age: "25",
      phone: "89998887766",
      doctor: "Доктор Доктор Доктор"
    },
    {
      serialNumber: 2,
      cardNumber: 2,
      FIO: "Петров Петр Петрович",
      gender: "Мужской",
      age: "51",
      phone: "89998883422",
      doctor: "Адоктор Доктор Доктор"
    },
    {
      serialNumber: 3,
      cardNumber: 3,
      FIO: "Андреев Андрей Адреевич",
      gender: "Мужской",
      age: "22",
      phone: "89998881234",
      doctor: "Бдоктор Доктор Доктор"
    }
  ]
};

const getters = {
  PATIENTS: state => state.patients,
  PATIENT_BY_CARD_NUMBER: state => cardNumber =>
    state.patients.find(state => state.cardNumber === cardNumber)
};

export default {
  namespaced: true,
  getters,
  state
};
