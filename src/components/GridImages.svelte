<script lang="ts">
  export let images: Array<{ src: string, alt: string }>
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
    margin-top: 100px;
  }

  img {
    width: calc(100% / 3);
    filter: grayscale(1);
    transition: all 250ms ease-out 0s;
  }

  img:hover {
    filter: grayscale(0);
  }
</style>

<div>
  {#each images as image}
    <img src={image.src} alt={image.alt}>
  {/each}
</div>
