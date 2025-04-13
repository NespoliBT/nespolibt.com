<script lang="ts">
  import { fly, scale } from "svelte/transition";

  let open = false;
  let darkModeIcon = "";

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];

  const toggleDarkMode = () => {
    document.documentElement.setAttribute(
      "data-theme",
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light"
    );

    darkModeIcon =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? ""
        : "";
  };

  const handleClickOutside = () => {
    open = false;
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      open = false;
    }
  });
</script>

<div class="menu">
  {#if open}
    <button
      class="background"
      in:fly
      out:fly
      on:click={() => handleClickOutside()}
      aria-label="Close menu"
    ></button>
  {/if}

  <button
    class={`toggle ${open ? "open" : ""}`}
    on:click={() => {
      open = !open;
    }}
    aria-label="Toggle menu"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  {#if open}
    <div class="menuList" in:scale out:scale>
      <button
        class="menuItem icon"
        on:click={() => toggleDarkMode()}
        aria-label="Toggle dark mode">{darkModeIcon}</button
      >
    </div>
    <div class="themeEditor" in:scale out:scale>
      {#each colors as color}
        <button
          class="color"
          style="background-color: {color};"
          aria-label="Select color"
          on:click={() => {
            document.documentElement.style.setProperty("--accent", color);
          }}
        ></button>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "./menu.scss" as *;
</style>
