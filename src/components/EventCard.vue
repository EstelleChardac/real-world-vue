<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <!-- Display event data  -->
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  width: 100%;
  border: solid black 0.5px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.05);
  box-shadow: 12px 12px 2px 1px yellow;
}
.event-link {
  text-decoration: none;
  color: black;
}
</style>
