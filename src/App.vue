<template>
  <nav>
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>Cool events</h1>
  <router-view />
</template>

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
