<template>
  <nav>
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>Cool events for the planet</h1>
  <router-view />
  <p v-show="time" class="time">Hello! Il est {{ time }}</p>
</template>

<script>
export default {
  name: "CurrentTime",
  data: () => ({
    time: "",
  }),

  methods: {
    getTime: function () {
      return new Date().toLocaleTimeString();
    },
  },
  mounted: function () {
    this.time = this.getTime();
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 0.8rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  text-align: center;
}

h1 {
  font-size: 2.8rem;
}

h1:hover {
  transform: rotate(0.5turn);
}

h4 {
  font-size: 2rem;
}

nav {
  padding: 2rem;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

nav a.router-link-exact-active {
  color: rgb(238, 9, 47);
}

.time {
  align-content: flex-end;
}
</style>
