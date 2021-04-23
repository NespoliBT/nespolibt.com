<script lang="ts">
  import projects from "../../projects.json";
  import axios from "axios";
  import Project from "../Project/Project.svelte";

  let fProjects: {
    id: number;
    name: string;
    description: string;
    version: string;
    gitURL: string;
    owner: string;
  }[] = [];

  projects.map(async (p) => {
    let owner = p.repo.split("/")[3];
    let name = p.repo.split("/")[4];

    const { data: all } = await axios.get(
      `https://api.github.com/repos/${owner}/${name}`,
      {
        auth: {
          username: "NespoliBT",
          password: "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",
        },
      }
    );
    const { data: pkgJson } = await axios.get(
      `https://raw.githubusercontent.com/${owner}/${name}/master/package.json`
    );

    let project = {
      ...p,
      name,
      description: all.description,
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
