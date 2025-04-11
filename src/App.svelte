<script lang="ts">
  import Intro from "./lib/components/Intro/Intro.svelte";
  import Projects from "./lib/components/Projects/Projects.svelte";

  let cubes = [];
  let cubesCount = 5;

  for (let i = 0; i < cubesCount; i++) {
    cubes.push({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100,
      h: Math.random() * 100 + 100,
      w: Math.random() * 50 + 10,
    });
  }
</script>

<div class="main">
  {#each new Array(3) as _, i}
    <div class={`cubes cubes${i}`}>
      {#each cubes as cube}
        <div
          class="cube"
          style="top: -{cube.h * (i + 1) * 0.2}vh; left: {cube.x +
            Math.random() * 100}%; height: {cube.h *
            (i + 1) *
            0.1}vh; width: {cube.w *
            (i + 1) *
            0.1}vh; animation-delay: {Math.random() *
            10}s; transform: rotate({Math.random() * 360}deg);"
        ></div>
      {/each}
    </div>
  {/each}
  <Intro />
  <Projects />
</div>

<style lang="scss">
  @use "./app.scss" as *;
</style>
