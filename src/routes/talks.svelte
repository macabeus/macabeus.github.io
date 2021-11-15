<script lang="ts">
  import EmptyState from '../components/EmptyState.svelte';
  import WorkCell from '../components/WorkCell.svelte'
  import ToggleButton from '../components/ToggleButton.svelte'
  import talks from '../contents/talks'

  const allLanguages = new Set(talks.map(post => post.language))
  const allTags = new Set(talks.flatMap(post => post.tags))

  let enabledFilters = {
    languages: new Set(),
    tags: new Set(),
  }

  const getTalks = (filters: typeof enabledFilters) => {
    if (filters.languages.size === 0 && filters.tags.size === 0) {
      return talks
    }

    let result = talks

    if (filters.languages.size > 0) {
      result = result.filter(post => filters.languages.has(post.language))
    }

    if (filters.tags.size > 0) {
      result = result.filter(post => post.tags.some(tag => filters.tags.has(tag)))
    }

    return result
  }

  $: filteredTalks = getTalks(enabledFilters)

  const makeToggleFilter = (attribute: keyof typeof enabledFilters, key: string) => (newStatus: boolean) => {
    if (newStatus) {
      enabledFilters[attribute].add(key)
    } else {
      enabledFilters[attribute].delete(key)
    }

    enabledFilters = enabledFilters
  }
</script>

<style>
  :global(.filters > *:not(:last-child)) {
    margin-right: 0.35rem;
  }

  .filters {
    margin-bottom: 1rem;
  }

  :global(.works-list > *:not(:last-child)) {
    margin-bottom: 2.5rem;
  }
</style>

<article>
  <h1>Talks</h1>

  <div class="filters">
    {#each [...allLanguages] as language}
      <ToggleButton onChanged={makeToggleFilter('languages', language)}>
        {language}
      </ToggleButton>
    {/each}
  </div>

  <div class="filters">
    {#each [...allTags] as tag}
      <ToggleButton onChanged={makeToggleFilter('tags', tag)}>
        {tag}
      </ToggleButton>
    {/each}
  </div>

  {#if filteredTalks.length > 0}
    <div class="works-list">
      {#each filteredTalks as talk}
          <WorkCell
            work={talk}
          />
      {/each}
    </div>
  {:else}
    <EmptyState />
  {/if}
</article>
