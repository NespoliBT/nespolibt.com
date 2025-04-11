<script lang="ts">
  import Project from "@/lib/components/Project/Project.svelte";
  import projects from "@/lib/data/projects.json";
  import undertale from "@/assets/imgs/undertale.gif";

  let jumping = false;

  const jump = () => {
    jumping = true;
    setTimeout(() => {
      jumping = false;
    }, 1000);
  };
</script>

<div class="projects">
  <div class="titleContainer">
    <div class="title">Progetti</div>
    <button
      on:click={() => jump()}
      class={`undertaleContainer ${jumping ? "jumping" : ""}`}
    >
      <img src={undertale} alt="" class="undertale" />
    </button>
  </div>
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<style lang="scss">
  @use "./projects.scss" as *;
</style>
