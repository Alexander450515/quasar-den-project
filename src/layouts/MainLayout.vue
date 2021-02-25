<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-drawer
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="0"
      bordered
      content-class="bg-grey-3"
      class="text-grey-8"
    >
      <q-list padding>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/NavDrawer/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: {
    EssentialLink
  },
  data() {
    return {
      drawer: false,
      miniState: true,
      essentialLinks: [
        {
          title: "Картотека",
          icon: "folder",
          link: "/"
        },
        {
          title: "Пациенты",
          icon: "people",
          link: "/patients"
        },
        {
          title: "Прайс",
          icon: "monetization_on",
          link: "/price"
        },
        {
          title: "Шаблоны",
          icon: "fact_check",
          link: "/template"
        }
      ]
    };
  }
};
</script>
