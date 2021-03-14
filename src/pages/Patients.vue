<template>
  <q-page class="fit column inline content-center">
    <h4 class="title">Пациенты</h4>
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[10, 20, 50]"
      flat
      @row-click="openPatientCard"
      separator="cell"
      bordered
      table-style="height: 40em"
    />

    <q-btn-group push outline class="q-mt-md justify-end">
      <q-btn label="Создать" dense no-caps color="grey-9" class="q-px-sm" />
      <q-btn label="Найти" dense no-caps class="q-px-sm" />
    </q-btn-group>
  </q-page>
</template>

<script>
export default {
  name: "Patients",

  data() {
    return {
      card: false,
      columns: [
        {
          name: "serialNumber",
          label: "Номер п/п",
          align: "center",
          field: "serialNumber",
          sortable: true,
          style: "width: 118px"
        },
        {
          name: "FIO",
          align: "center",
          label: "ФИО",
          field: "FIO",
          sortable: true,
          style: "width: 566px"
        },
        {
          name: "gender",
          label: "Пол",
          align: "center",
          field: "gender",
          sortable: true,
          style: "width: 143px"
        },
        {
          name: "age",
          label: "Возраст",
          align: "center",
          field: "age",
          sortable: true,
          style: "width: 143px"
        },
        {
          name: "phone",
          label: "Телефон",
          align: "center",
          field: "phone",
          sortable: true,
          style: "width: 356px"
        }
      ],
      data: [
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
          age: "25",
          phone: "89998887766",
          doctor: "Адоктор Доктор Доктор"
        },
        {
          serialNumber: 3,
          cardNumber: 3,
          FIO: "Андреев Андрей Адреевич",
          gender: "Мужской",
          age: "25",
          phone: "89998887766",
          doctor: "Бдоктор Доктор Доктор"
        }
      ]
    };
  },
  methods: {
    openPatientCard(evt, row, index) {
      // console.log(evt, row, index);
      // this.$store.dispatch("selectedPatient", row.cardNumber);
      this.$router.push(`/patient/${row.cardNumber}`);
    }
  }
};
</script>

<style lang="sass" scoped>
.title
  font-family: Adamina font-size 36px
  line-height: 25px
  text-align: center
  color: #858b8b

.q-btn
  background-color: white
  font-family: Roboto

.table
  background-color: white
  font-family: Adamina
  font-weight: 400
  border-collapse: collapse
  width: 100%
</style>
