<script lang="ts">
  import Project from "@/lib/components/Project/Project.svelte";
  import projects from "@/lib/data/projects.json";
  import undertale from "@/assets/imgs/undertale.gif";
</script>

<div class="projects">
  <div class="titleContainer">
    <div class="title">Progetti</div>
    <img src={undertale} alt="" class="undertale" />
  </div>
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<style lang="scss">
  @use "./projects.scss" as *;
</style>
