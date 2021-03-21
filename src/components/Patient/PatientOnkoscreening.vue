<template>
  <table class="table">
    <th colspan="2">{PatientOnkoscreening}</th>
    <tr>
      <td class="left-column">Дата</td>
      <td class="right-column">{card.date}</td>
    </tr>
    <tr>
      <td class="left-column">Жалобы</td>
      <td class="right-column">{card.complaints}</td>
    </tr>
    <tr>
      <td class="left-column">Анамнез заболевания</td>
      <td class="right-column">{card.anamnesis}</td>
    </tr>
    <tr>
      <td class="left-column">Внешний осмотр</td>
      <td class="right-column">{card.inspection}</td>
    </tr>
    <tr>
      <td class="left-column">Объективно</td>
      <td class="right-column">
        {card.objectively}
      </td>
    </tr>
    <tr>
      <td class="left-column">Диагноз</td>
      <td class="right-column">{card.diagnosis}</td>
    </tr>
    <tr>
      <td class="left-column">Лечение</td>
      <td class="right-column">
        {card.therapy}
      </td>
    </tr>
    <tr>
      <td class="left-column">На прием</td>
      <td class="right-column">{card.appointment}</td>
    </tr>
    <tr>
      <td class="left-column">Врач</td>
      <td class="right-column">{card.doctor}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "PatientOnkoscreening"
};
</script>

<style lang="sass" scoped>
.my-card
  background-color: #CFEEEE
  width:1000px
  max-width: 1500px

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

.left-column
  width: 188px
  text-align: center

.right-column
  padding: 0 80px
  align-items: center
</style>
