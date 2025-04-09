<script lang="ts">
  export let project: {
    title: string;
    description: string;
    technologies: string[];
    img: string;
    link: string;
    linkDemo: string;
    externalLink: string;
  };

  function getImageUrl(name: string) {
    return new URL(`/src/assets/imgs/${name}`, import.meta.url).href;
  }

  let url = getImageUrl(project.img);
</script>

<div class="project">
  <div class="line"></div>
  <div class="left">
    <div class="title">{project.title}</div>
    <div class="technologies">
      {#each project.technologies as technology}
        <div class={`technology ${technology}`}>{technology}</div>
      {/each}
    </div>
    <div class="description">
      {project.description}
    </div>
    {#if project.linkDemo}
      <div class="demo">
        <a href={project.linkDemo} target="_blank" class="demo">Gioca!</a>
      </div>
    {/if}
    {#if project.externalLink}
      <div class="external">
        <a href={project.externalLink} target="_blank" class="external">Vai!</a>
      </div>
    {/if}
    <a class="link" href={project.link} target="_blank">  </a>
  </div>
  <div class="right">
    <button class="button">
      <img src={url} alt={project.title} class="img" />
    </button>
  </div>
</div>

<style lang="scss">
  @use "./project.scss" as *;
</style>
