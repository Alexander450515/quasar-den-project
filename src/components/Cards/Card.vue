<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="title">Карта стоматологического пациента</div>
    </q-card-section>
    <q-card-section class="row justify-between">
      <q-select
        outlined
        dense
        bg-color="white"
        v-model="model"
        :options="options"
        label="ФИО пациента"
        class="col-4"
      />
      <q-select
        outlined
        dense
        bg-color="white"
        v-model="model"
        :options="options"
        label="ФИО Лечащий врач"
        class="col-4"
      />
      <q-select
        dark
        outlined
        dense
        bg-color="grey-9"
        color="white"
        v-model="model"
        :options="options"
        label="Прайс"
        class="col-3"
      />
    </q-card-section>

    <q-card-section>
      <table class="table">
        <th colspan="2">{card.typeOfDisease}</th>
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
    </q-card-section>
    <q-card-actions class="q-ma-sm">
      <q-btn label="Сумма" dense no-caps flat />
      <q-space />
      <q-btn-group push outline>
        <q-btn label="Сохранить" dense no-caps color="grey-9" />
        <q-btn label="Отменить" dense v-close-popup no-caps />
        <q-btn label="Печать" dense no-caps />
      </q-btn-group>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  },

  data() {
    return {
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  }
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
