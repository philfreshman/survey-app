<script>
  import PageHeader from "../components/PageHeader";
  import VoteForm from "../components/VoteForm";
  export default {
    name: "HomeView",
    components: {VoteForm, PageHeader}
  }
</script>


<template>
  <PageHeader/>
  <VoteForm/>
</template>

