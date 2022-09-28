<template>
  <div class="home">
    <NavBar/>
    <AccueilWorld/>
  </div>
</template>

<script>
import AccueilWorld from '@/components/AccueilWorld.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomeView',
  components: {
    AccueilWorld,
    NavBar
  }
}
</script>