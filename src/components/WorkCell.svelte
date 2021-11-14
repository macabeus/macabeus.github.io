<script lang="ts">
  export let work: (Post | Paper)

  const mainLink = 'link' in work ? work.link : work.paperLink
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
