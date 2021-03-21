<template>
  <q-page class="fit column inline content-center">
    <h4 class="title">Карта стоматологического пациента</h4>

    <div class="q-my-md">
      <q-btn
        v-for="tab in tabs"
        :key="tab.id"
        :color="currentTab === tab.componentName ? 'grey-9' : undefined"
        class="q-mr-md q-px-sm"
        v-on:click="currentTab = tab.componentName"
        dense
        no-caps
      >
        {{ tab.name }}</q-btn
      >
    </div>

    <keep-alive>
      <component :is="currentTabComponent" :patient="patient"></component>
    </keep-alive>

    <q-btn-group push outline class="q-mt-md justify-end">
      <q-btn label="Сохранить" dense no-caps color="grey-9" />
      <q-btn label="Изменить" dense v-close-popup no-caps />
      <q-btn label="Выйти" dense no-caps />
    </q-btn-group>
    <!-- <q-btn label="Найти" dense no-caps class="q-px-sm" @click="test" /> -->
  </q-page>
</template>

<script>
import PatientData from 'components/Patient/PatientData.vue';

export default {
  name: "Patient",
  components: {
    PatientData,
    PatientAccounting: () => import('components/Patient/PatientAccounting.vue'),
    PatientOnkoscreening: () => import('components/Patient/PatientOnkoscreening.vue'),
    PatientPlan: () => import('components/Patient/PatientPlan.vue'),
    PatientReception: () => import('components/Patient/PatientReception.vue')
  },
  data: () => ({
    currentTab: "Data",
    tabs: [
      {id: 1, name: "Данные", componentName:"Data"},
      {id: 2, name: "Приемы", componentName:"Reception"},
      {id: 3, name: "Онкоскрининг", componentName:"Onkoscreening"},
      {id: 4, name: "Учет дозовых нагрузок", componentName:"Accounting"},
      {id: 5, name: "План лечения", componentName:"Plan"},
    ],
  }),

  computed: {
    currentTabComponent() {
      return "Patient" + this.currentTab;
    },
    patient() {
      console.log(this.$store.getters.['patients/PATIENT_BY_CARD_NUMBER'](+this.$route.params.id), this.$store.getters.['patients/PATIENT_BY_CARD_NUMBER'](+this.$route.params.id).FIO)
      return this.$store.getters.['patients/PATIENT_BY_CARD_NUMBER'](+this.$route.params.id)
    }
  },
  methods: {
    test() {
      return console.log(this.$store.getters.['patients/PATIENT_BY_CARD_NUMBER'](+this.$route.params.id))
    }
  }
};
</script>

<style lang="sass" scoped>
.table-container
  width: 100%
  max-width: 1325px

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
  max-width: 1325px

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
