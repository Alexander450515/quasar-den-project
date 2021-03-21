const state = {
  patients: [
    {
      serialNumber: 1,
      cardNumber: 1,
      FIO: "Иванов Иван Иванович",
      gender: "Мужской",
      age: "25",
      phone: "89998887766",
      doctor: "Доктор Доктор Доктор",
      adress: "Пушкина, д 1, кв 15",
      profession: "Юрист"
    },
    {
      serialNumber: 2,
      cardNumber: 2,
      FIO: "Петров Петр Петрович",
      gender: "Мужской",
      age: "51",
      phone: "89998883422",
      doctor: "Адоктор Доктор Доктор",
      adress: "Советская, д 3, кв 43",
      profession: "Программист"
    },
    {
      serialNumber: 3,
      cardNumber: 3,
      FIO: "Андреев Андрей Адреевич",
      gender: "Мужской",
      age: "22",
      phone: "89998881234",
      doctor: "Бдоктор Доктор Доктор",
      adress: "Победа, д 5, кв 51",
      profession: "Банкир"
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
