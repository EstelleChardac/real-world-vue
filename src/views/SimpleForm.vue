<template>
  <div>
    <h2>Create an event</h2>
    <form>
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />
      <h2>Name & describe your event</h2>

      <BaseInput v-model="event.title" label="Title" type="text" /><br />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h2>Where is your event?</h2>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h2>Are pets allowed?</h2>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="event.extras.catering" class="field" />
        <label>Catering</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.music" class="field" />
        <label>Live music</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
export default {
  name: "SimpleForm",
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
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  components: { BaseInput, BaseSelect },
};
</script>
