<script>
  import PageHeader from "../components/PageHeader.vue";
  import VoteForm from "../components/VoteForm.vue";
  export default {
    name: "HomeView",
    components: {VoteForm, PageHeader}
  }
</script>


<template>
  <PageHeader/>
  <VoteForm/>
</template>

