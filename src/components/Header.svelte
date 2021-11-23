<script lang="ts">
  import { assets } from '$app/paths'
  import RouteLink from './RouteLink.svelte'
</script>

<style>
  .header {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--border-color);
    padding-bottom: 1rem;
  }

  .logo {
    height: 27px;
  }

  nav {
    padding-top: 1rem;
  }

  :global(nav > *:not(:last-of-type)) {
    margin-right: 1rem;
  }
</style>

<div class="header">
  <img class="logo" src={`${assets}/logo.svg`} alt="Logo">

  <nav>
    <RouteLink path="/">Home</RouteLink>
    <RouteLink path="/essays">Essays</RouteLink>
    <RouteLink path="/talks">Talks</RouteLink>
    <RouteLink path="/projects">Projects</RouteLink>
    <RouteLink path="/communities">Communities</RouteLink>
  </nav>
</div>
