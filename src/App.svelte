<script lang="ts">
  import Intro from "./lib/components/Intro/Intro.svelte";
  import Projects from "./lib/components/Projects/Projects.svelte";
  console.log("test");
</script>

<div class="main">
  <Intro />
  <Projects />
</div>

<style lang="scss">
  @use "./app.scss" as *;
</style>
