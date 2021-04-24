<script lang="ts">
  import projects from "../../projects";
  import axios from "axios";
  import Project from "../Project/Project.svelte";

  let fProjects = [];

  projects.map(async (p) => {
    let owner = p.repo.split("/")[3];
    let name = p.repo.split("/")[4];

    const { data: pkgJson } = await axios.get(
      `https://raw.githubusercontent.com/${owner}/${name}/master/package.json`
    );

    let project = {
      ...p,
      name,
      version: pkgJson.version,
      gitURL: p.repo,
    };

    fProjects = [...fProjects, project];
    fProjects = fProjects.sort((a, b) => {
      return a.id - b.id;
    });
  });

  $: {
    console.log(fProjects);
  }
</script>

<div class="projects">
  {#each fProjects as project}
    <Project {project} />
  {/each}
</div>

<style lang="scss">
  @use './projects.scss';
</style>
