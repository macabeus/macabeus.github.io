<script lang="ts">
  import EmptyState from '../../components/EmptyState.svelte'
  import WorkCell from '../../components/WorkCell.svelte'
  import ToggleButton from '../../components/ToggleButton.svelte'
  import posts from '../../contents/posts'
  import papers from '../../contents/papers'

  const allLanguages = new Set(posts.map(post => post.language))
  const allTags = new Set(posts.flatMap(post => post.tags))

  let enabledFilters = {
    languages: new Set(),
    tags: new Set(),
  }

  const getPosts = (filters: typeof enabledFilters) => {
    if (filters.languages.size === 0 && filters.tags.size === 0) {
      return posts
    }

    let result = posts

    if (filters.languages.size > 0) {
      result = result.filter(post => filters.languages.has(post.language))
    }

    if (filters.tags.size > 0) {
      result = result.filter(post => post.tags.some(tag => filters.tags.has(tag)))
    }

    return result
  }

  $: filteredPosts = getPosts(enabledFilters)

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
  <h1>Posts</h1>

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

  {#if filteredPosts.length > 0}
    <div class="works-list">
      {#each filteredPosts as post}
        <WorkCell
          work={post}
        />
      {/each}
    </div>
  {:else}
    <EmptyState />
  {/if}
</article>

<article>
  <h1>Papers</h1>

  <div class="works-list">
    {#each papers as article}
      <WorkCell
        work={article}
      />
    {/each}
  </div>
</article>
