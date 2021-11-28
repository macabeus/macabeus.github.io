<script lang="ts">
  export let images: Array<{ src: string, alt: string, caption: string }>

  let showCaption: number | null
</script>

<style>
  div {
    display: flex;
    position: relative;
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
    margin-top: 100px;
  }

  figure {
    position: relative;
    margin: 0;
  }

  img {
    width: 100%;
    filter: grayscale(1);
    transition: all 250ms ease-out 0s;
  }

  img:hover {
    filter: grayscale(0);
  }

  figcaption {
    pointer-events: none;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s ease-in-out 0s;
    opacity: 0;
  }

  figcaption.show {
    opacity: 1;
  }

  figcaption span {
    background-color: white;
    width: 75%;
    padding: 10px 25px;
    text-align: center;
  }
</style>

<div>
  {#each images as image, index}
    <figure>
      <img
        src={image.src}
        alt={image.alt}
        on:focus={() => { showCaption = index }}
        on:mouseover={() => { showCaption = index }}
        on:mouseout={() => { showCaption = null }}
        on:blur={() => { showCaption = null }}
      >

      <figcaption class:show={showCaption === index}>
        <span>
          {image.caption}
        </span>
      </figcaption>
    </figure>
  {/each}
</div>
