<script lang="ts">
  import NoSearchResult from '../svgs/NoSearchResult.svelte'
</script>

<style>
  figure {
    margin: 0;
    text-align: center;
  }

  img {
    height: 8.5rem;
  }

  figcaption {
    margin-top: 1rem;
    font-size: 1rem;
    color: var(--text-color);
  }
</style>

<figure>
  <NoSearchResult />

  <figcaption>No result. Try removing one of the enabled filters</figcaption>
</figure>
