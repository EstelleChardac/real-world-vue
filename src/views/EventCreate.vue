<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
  <!-- //hack to check if the data was correctly pushed up to the vuex store, otherwise use vuedevtools / vuex
  <div>{{ $store.state.events }}</div> -->
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import EventService from "@/services/EventService";

export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        id: "",
        category: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        // adding a new user field to our state and setting it equal to the organizer field.
        //We can't add it directly here because state and data would be too interconnected.
        //Instead we access it when there is an event. See below.
        organizer: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // uuid is a library and this method helps to create a complex id that our event can use
      //   this.event.id = uuidv4();
      //   // we're only accessing our state when we need it (ie here, when we submit a form). The result of this is that it sets "organizer" equal to "Estelle" (see in store).
      //       this.event.organizer = this.$store.state.user;

      //alternate code using the spread operator
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user,
      };
      EventService.postEvent(event)
        .then(() => {
          //add an event to the Vuex state
          this.$store.commit("ADD_EVENT", event);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
