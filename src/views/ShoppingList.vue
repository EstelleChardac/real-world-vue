<script setup>
import { ref, computed } from "vue";

const header = ref("List of things to bring");
const characterCount = computed(() => {
  return newThing.value.length;
});
const editing = ref(false);

//e=short for "editing"
const doEdit = (e) => {
  editing.value = e;
  newThing.value = "";
};
const items = ref([]);
const newThing = ref("");
const newThingHighPriority = ref(false);
const saveThing = () => {
  items.value.push({ id: items.value.length + 1, label: newThing.value });
  newThing.value = "";
};
</script>

<template>
  <div class="header">
    <h2>{{ header }}</h2>
  </div>
  <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
  <button v-else class="btn btn-primary" @click="doEdit(true)">
    Add a thing
  </button>

  <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
  <form class="add-item-form" v-if="editing" @submit.prevent="saveThing">
    <input type="text" v-model="newThing" placeholder="Add another thing" />
    {{ newThing }}
    <p class="counter">{{ characterCount }}/200</p>
    Priority :
    <!-- <label
    ><input type="radio" v-model="newThingPriority" value="low" />Low</label
  >
  <label>
    <input type="radio" v-model="newThingPriority" value="high" />High</label
  > -->
    <!-- <select v-model="newThingPriority">
    <option value="low">Low</option>
    <option value="high">High</option>
  </select> -->
    <!-- <label>
      <input type="checkbox" v-model="newThingsToAdd" value="goodmood" />
      Good mood
    </label> -->
    <br />
    <label>
      <input type="checkbox" v-model="newThingHighPriority" value="high" />
      High
    </label>
    <button :disabled="newThing.length === 0" class="btn">Save thing</button>
  </form>
  <p v-if="!items.length">Nothing to see here</p>
</template>

<style scoped>
body {
  background: #eff8ff;
  height: 100vh;
  width: 100vw;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.counter {
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
}

#app {
  background: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 95%;
  max-width: 900px;
}

h1 {
  color: #3d4852;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #6cb2eb;
  font-size: 1.25rem;
  transition: all 0.1s ease-in;
  margin-top: 0.5rem;
  display: block;
}

a:hover {
  color: #3490dc;
}

li,
p {
  display: flex;
  align-items: center;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: #3d4852;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

li:hover {
  color: #22292f;
}

li input {
  margin: 0 0.5rem 0;
}

#shopping-list > input,
#shopping-list > select {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.add-item-form,
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.add-item-form input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}

.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}

.btn-primary {
  background: #6cb2eb;
  color: #fff;
}

.btn-primary:hover {
  background: #3490dc;
}

.btn-cancel {
  background: #ef5753;
  color: #fff;
}

.btn-cancel:hover {
  background: #e3342f;
  color: #fff;
}

.strikeout {
  text-decoration: line-through;
  color: #b8c2cc;
}

.strikeout:hover {
  color: #8795a1;
}

.priority {
  color: #de751f;
}
input[type="checkbox"] {
  display: inline !important;
  box-shadow: none;
  width: auto;
}
</style>
