<script lang="ts">
  export let work: (Post | Paper | Talk)

  const mainLink =
    'link' in work ?
      work.link :
    'paperLink' in work ?
      work.paperLink :
      work.videoLink
</script>

<style>
  h5 {
    margin: 0;
  }

  .notes {
    font-size: 90%;
  }

  p {
    margin: 0.5rem 0 0 0;
  }

  span ~ span::before {
    content: ', '
  }
</style>

<article>
  <h5><a href={mainLink} target="_blank" rel="noopener noreferrer">{work.title}</a></h5>

  {#if 'eventLink' in work}
    <p class="notes">
      At <a href={work.eventLink} target="_blank" rel="noopener noreferrer">{work.eventName}</a>

      {#if 'slidesLink' in work}
        — <a href={work.slidesLink} target="_blank" rel="noopener noreferrer">Slides</a>
      {/if}
    </p>
  {/if}

  {#if 'previously' in work}
    <p class="notes">
      Previously at:

      {#each work.previously as previousWork}
        <span>
          <a href={previousWork.link} target="_blank" rel="noopener noreferrer">{previousWork.name}</a>
        </span>
      {/each}
    </p>
  {/if}

  <p>
    <time datetime={work.date}>{work.date}</time>
    —
    {#each work.tags as tag}
      <span>{tag}</span>
    {/each}
  </p>
</article>
