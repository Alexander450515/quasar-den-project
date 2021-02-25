<template>
  <q-card class="my-card" style="width:1000px;max-width: 1500px">
    <q-card-section class="flex justify-around">
      <div>ФИО</div>
      <div>ФИО</div>
    </q-card-section>

    <q-card-section class="border">
      <div class="row">
        <div class="col-12">
          Средний кариес
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Дата
        </div>
        <div class="col">
          {Date}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Жалобы
        </div>
        <div class="col">
          {На наличие кариозной полости,попадание пищи в кариозную
          полость,кратковременные боли от температурных,химических
          раздражителей.}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Анамнез заболевания
        </div>
        <div class="col">
          {Зуб ранее не лечен.}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Внешний осмотр
        </div>
        <div class="col">
          {Лицо симметричное, регионарные лимфатические узлы не пальпируются,
          слизистая оболочка полости рта бледно-ро­зового цвета, влажная,
          блестящая, без видимых патологических изменений.}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Объективно
        </div>
        <div class="col">
          {Слизистая маргинальной, альвеолярной десны, переходной складки в
          области____________________________________ бледно-розового
          цвета,влажная, без видимых патологических изменений. На поверхности
          ________________________зуба кариозная полость в пределах плащевого
          дентина. Зондирование болезненно по эмалево-дентинному соединению,
          перкуссия безболезненна, температурная реакция на холодную воду
          кратковременная, слабо болезненная.}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Диагноз
        </div>
        <div class="col">
          {Средний кариес__________________ зуба,_______________________________
          кл. по Блэку к02.1}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Лечение
        </div>
        <div class="col">
          {Под аппликационной анестезией. Под
          _________________________________анестезией. Профгигиена с
          пастой___________________________________________. Препарирование
          кариозной полости, медикаментозная обработка Наложение изолирующей
          прокладки Наложение пломбы Шлифование, полирование, флюоризация }
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          На прием
        </div>
        <div class="col">
          {На прием}
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          Врач
        </div>
        <div class="col">
          {Врач Врач Врач}
        </div>
      </div>
    </q-card-section>

    <q-separator></q-separator>

    <q-card-actions align="right">
      <q-btn v-close-popup flat color="primary" label="Reserve"></q-btn>
      <q-btn v-close-popup flat color="primary" round icon="event"></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "Card",
  data: () => ({})
};
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  border: 1px solid
</style>
