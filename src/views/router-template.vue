<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: "RouterTemplate",

  components: {

},
  data() {
    return {};
  },
  mounted() {
    this.$router.push("/login");
  },
  computed: {},
  methods: {},
};
</script>
