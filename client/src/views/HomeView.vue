<script>
  import PageHeader from "../components/PageHeader.vue";
  import VoteForm from "../components/VoteForm.vue";
  import ToggleButton from "../components/ToggleButton.vue";

  export default {
    name: "HomeView",
    components: {VoteForm, PageHeader, ToggleButton}
  }
</script>

<template>
  <PageHeader/>
  <VoteForm/>
</template>

