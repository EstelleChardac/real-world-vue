<template>
  <!-- 4.  checkbox inputs bind their state to a checked property -->
  <!-- 5. checkbox inputs trigger onChange events when they are selected/unselected. 
    The update lets the parent know that the checkbox has been toggled. 
    We then emit the checked event itself. -->

  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
  />

  <!-- 2. initiating the label element and bind it with interpolation aka {{}} + adding v-if to check if the label exists -->
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    // 1. setting up the label property
    label: {
      type: String,
      default: "",
    },

    // 3. creating modelValue so the parent can inject the state into the checkbox component
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
