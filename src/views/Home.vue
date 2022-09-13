<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 58,
          category: "beach cleaning",
          title: "Cleaning Parlementia",
          bringBags: true,
          time: "12.30",
          date: "January 12",
        },

        {
          id: 59,
          category: "house cleaning",
          title: "Cleaning Guethary",
          bringBags: true,
          time: "12.30",
          date: "January 13",
        },
      ],
    };
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
