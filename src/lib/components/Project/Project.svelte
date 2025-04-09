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

  let imgOpen = false;
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
    {#await import(`/src/assets/imgs/${project.img}`) then { default: src }}
      <button on:click={() => (imgOpen = !imgOpen)} class={`button ${imgOpen}`}>
        <img {src} alt={project.title} class="img" />
      </button>
    {/await}
  </div>
</div>

<style lang="scss">
  @use "./project.scss" as *;
</style>
