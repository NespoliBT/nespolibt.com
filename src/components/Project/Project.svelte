<script lang="ts">
  import { fly } from "svelte/transition";
  export let project;

  console.log(project);
</script>

<div class={"project" + (project.id === 2 ? " reverse" : "")}>
  <div class="info">
    <div class="name" in:fly={{ x: -500 }}>
      {project.name}
    </div>
    <div class="description">
      {project.description || project.desc}
    </div>
    <div class="versionControl">
      <div class="version"><span>Version:</span> {project.version}</div>
      <a class="github" target="_blank" href={project.repo}></a>
    </div>
  </div>

  <img
    in:fly={{ x: 500 }}
    class="image"
    src={`../../img/${project.img}`}
    alt={project.name}
  />
</div>

<style lang="scss">
  @use './project.scss';
</style>
