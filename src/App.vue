<template>
  <nav>
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <p v-show="time">Hello! Il est {{ time }}</p>
  <h1>Cool events</h1>
  <router-view />
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
</style>
