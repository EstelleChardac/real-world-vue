<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="about">
    <button @click="counterComputed++">computed button</button>
    <p>{{ counterComputed }}</p>
    <br />
    <button @click="counterMethod++">method button</button>
    <p>{{ counterMethod }}</p>
    <br />
    {{ printTextMethod() }}
    {{ printTextComputed }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      counterComputed: 0,
      counterMethod: 0,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    printTextComputed: function () {
      console.log("counter printed from computed:", this.counterComputed);
    },
  },
  methods: {
    printTextMethod: function () {
      console.log("counter printed from method:", this.counterMethod);
    },
  },
};
</script>
