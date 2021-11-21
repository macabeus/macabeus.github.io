<script lang="ts">
  type Works<T extends { priority: number, link: string }> = { [name: string]: T }

  type WorksGeneric = $$Generic<{ priority: number, link: string }>

  interface $$Props {
    works: Works<WorksGeneric>
  };

  interface $$Slots {
    default: WorksGeneric
  }

  export let works: $$Props['works']

  $: sortedWorks = Object
    .entries(works)
    .sort((a, b) => a[1].priority - b[1].priority)
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  article {
    border-top: 0.1px solid var(--border-color);
    padding-top: 0.3rem;
  }

  article h5 {
    margin: 0;
  }
</style>

<div>
  {#each sortedWorks as [name, workMetadata]}
    <article>
      <h5><a href={workMetadata.link} target="_blank" rel="noopener noreferrer">{name}</a></h5>

      <slot {...workMetadata}></slot>
    </article>
  {/each}
</div>
