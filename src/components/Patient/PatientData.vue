<template>
  <div class="table-container">
    <table class="table">
      <tr>
        <td class="left-column">Номер карты</td>
        <td class="right-column">{{ patient.cardNumber }}</td>
      </tr>
      <tr>
        <td class="left-column">ФИО</td>
        <td class="right-column">{{ patient.FIO }}</td>
      </tr>
      <tr>
        <td class="left-column">Адрес</td>
        <td class="right-column">{{ patient.adress }}</td>
      </tr>
      <tr>
        <td class="left-column">Профессия</td>
        <td class="right-column">
          {{ patient.profession }}
        </td>
      </tr>
      <tr>
        <td class="left-column">Возраст</td>
        <td class="right-column">{{ patient.age }}</td>
      </tr>
      <tr>
        <td class="left-column">Пол (м/ж)</td>
        <td class="right-column">
          {{ patient.gender }}
        </td>
      </tr>
      <tr>
        <td class="left-column">Телефон</td>
        <td class="right-column">{{ patient.phone }}</td>
      </tr>
    </table>

    <table class="table q-mt-md">
      <tr>
        <td class="left-column">Диагноз</td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">
          Данные объективного исследования, внешний осмотр
        </td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">Прикус</td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">Состояние слизистой оболочки полости рта</td>
        <td class="right-column"></td>
      </tr>

      <th colspan="8" class="">Осмотр полости рта</th>

      <tr>
        <td class="left-column">Отсутствует</td>
        <td>asdasd</td>
        <td>asdasd</td>
      </tr>
      <tr>
        <td class="left-column">Корень</td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">Кариес</td>
        <td class="small-col">C</td>
        <td class="small-col">8</td>
        <td class="small-col">7</td>
        <td class="small-col">6</td>
        <td class="small-col">5</td>
        <td class="small-col">4</td>
        <td class="small-col">3</td>
        <td class="small-col">2</td>
        <td class="small-col">1</td>
        <td class="small-col">1</td>
        <td class="small-col">2</td>
        <td class="small-col">3</td>
        <td class="small-col">4</td>
        <td class="small-col">5</td>
        <td class="small-col">6</td>
        <td class="small-col">7</td>
        <td class="small-col">8</td>
      </tr>
      <tr>
        <td class="left-column">Пульпит</td>
        <td class="right-column">P</td>
      </tr>
      <tr>
        <td class="left-column">Периодонтит</td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">Пломбированный</td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">Пародонтоз</td>
        <td class="right-column"></td>
      </tr>
      <tr>
        <td class="left-column">Коронка</td>
        <td class="right-column"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PatientData",
  props: {
    patient: Object
  }
};
</script>

<style lang="sass" scoped>
.title
  font-family: Adamina
  font-size: 36px
  line-height: 25px
  text-align: center
  color: #858B8B

.q-btn
  background-color: white
  font-family: Roboto

.table
  background-color: white
  font-family: Adamina
  font-weight: 400
  border-collapse: collapse
  width: 100%

th
  font-family: sans-serif
  font-weight: 700
  line-height: 21px

td, th
  border: 1px solid #858B8B
  line-height: 25px
  align-items: center



.left-column
  width: 188px
  text-align: center

.right-column
  padding: 0 80px
  align-items: center

.small-col
  width: 67px
</style>
