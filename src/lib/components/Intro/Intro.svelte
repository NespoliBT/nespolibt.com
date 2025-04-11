<script lang="ts">
  import clippy from "@/assets/imgs/clippy.png";
  import intro from "@/lib/data/intro.json";
  import CV from "@/assets/CV.pdf";

  let currentText = intro[0];

  let currentIndex = 0;
  let talking = false;

  const updateText = (where: string) => {
    if (where === "prev") {
      currentIndex = (currentIndex - 1 + intro.length) % intro.length;
    } else if (where === "next") {
      currentIndex = (currentIndex + 1) % intro.length;
    }
    currentText = intro[currentIndex];

    talking = true;
    setTimeout(() => {
      talking = false;
    }, 1000);
  };
</script>

<div class="intro">
  <div class={`clippy ${talking ? "talking" : ""}`}>
    <img src={clippy} alt="" />
  </div>
  <div class="buttons">
    <button class="prev" on:click={() => updateText("prev")}>Indietro</button>
    <button class="next" on:click={() => updateText("next")}>Avanti</button>
  </div>
  <div class="text">
    {@html currentText}
  </div>
  <div class="CV">
    <a href={CV} target="_blank" class="cv">CV - 9 Aprile 2025</a>
  </div>
</div>

<style lang="scss">
  @use "./intro.scss" as *;
</style>
