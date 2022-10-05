<script lang="ts">
  import { page } from '$app/stores'

  export let path: string

  $: active = $page.url.pathname === path
</script>

<style>
  .active {
    font-weight: bold;
    color: var(--black);
  }
</style>

<a href={path} class:active>
  <slot></slot>
</a>
