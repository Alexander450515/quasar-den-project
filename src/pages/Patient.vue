<template>
  <q-page class="fit column inline content-center"
    >Patient
    <q-btn label="Найти" dense no-caps class="q-px-sm" @click="test" />
  </q-page>
</template>

<script>
export default {
  name: "Patient",

  computed: {
    patient() {
    console.log(this.$store.getters.['patients/PATIENT_BY_CARD_NUMBER'](+this.$route.params.id))
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

<style></style>
