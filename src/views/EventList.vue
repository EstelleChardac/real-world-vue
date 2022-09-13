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
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          category: "beach cleaning",
          title: "Cleaning Parlementia",
          bringBags: true,
          time: "12.30",
          date: "January 12",
        },

        {
          id: 2,
          category: "yard sale",
          title: "Yard sale in Guethary",
          bringBags: true,
          time: "8.30",
          date: "September 13",
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
