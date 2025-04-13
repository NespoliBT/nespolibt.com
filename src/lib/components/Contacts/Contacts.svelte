<script lang="ts">
  import contacts from "@/lib/data/contacts.json";
</script>

<div class="contacts">
  <div class="title">Contatti</div>
  <div class="contactsList">
    {#each contacts as contact}
      <div class="contact">
        <a href={contact.link} target="_blank" class="icon">{contact.icon}</a>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "./contacts.scss" as *;
</style>
