<template>
  <q-page class="fit column inline content-center">
    <h4 class="q-mx-auto">Карты стоматологических пациентов</h4>
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[10, 20, 50]"
      flat
      @row-click="openPatientCard"
      separator="cell"
    />
    <q-dialog v-model="card">
      <Card />
    </q-dialog>
  </q-page>
</template>

<script>
import Card from "components/Cards/Card.vue";
export default {
  name: "Cards",
  components: { Card },
  data() {
    return {
      card: false,
      columns: [
        {
          name: "cardNumber",
          label: "Номер карты",
          align: "center",
          field: "cardNumber",
          sortable: true,
          style: "width: 200px"
        },
        {
          name: "FIO",
          align: "center",
          label: "ФИО",
          field: "FIO",
          sortable: true,
          style: "width: 350px"
        },
        {
          name: "doctor",
          label: "Лечащий врач",
          align: "center",
          field: "doctor",
          sortable: true,
          style: "width:300px"
        }
      ],
      data: [
        {
          cardNumber: 1,
          FIO: "Иванов Иван Иванович",
          doctor: "Доктор Доктор Доктор"
        },
        {
          cardNumber: 2,
          FIO: "Петров Петр Петрович",
          doctor: "Адоктор Доктор Доктор"
        },
        {
          cardNumber: 3,
          FIO: "Андреев Андрей Адреевич",
          doctor: "Бдоктор Доктор Доктор"
        }
      ]
    };
  },
  methods: {
    openPatientCard(evt, row, index) {
      this.card = true;
      // console.log(evt, row, index);
      // this.$store.dispatch("selectedPatient", row.cardNumber);
      // this.$router.push("/patients");
    }
  }
};
</script>

<style>
/* .q-table {
  width: 1000px;
} */
</style>
