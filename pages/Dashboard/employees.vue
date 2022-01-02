<template>
  <div>
    <v-card-title
      v-text="$route.name.split('-').reverse()[0]"
      class="text-capitalize"
    />
  </div>
</template>

<script>
export default {
  name: 'employees'
};
</script>

<style scoped>

</style>
