<script lang="ts">
  import { assets } from '$app/paths'
  import RouteLink from './RouteLink.svelte'
  import SocialLinks from './SocialLinks.svelte'
</script>

<style>
  header {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--border-color);
    padding-bottom: 1rem;
  }

  .logo {
    height: 27px;
  }

  .links-container {
    padding-top: 1rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .links-container {
      align-items: center;
      flex-direction: row;
    }
  }

  :global(nav > *:not(:last-of-type)) {
    margin-right: 1rem;
  }
</style>

<header>
  <img class="logo" src={`${assets}/logo.svg`} alt="Logo">

  <div class="links-container">
    <nav>
      <RouteLink path="/">Home</RouteLink>
      <RouteLink path="/essays">Essays</RouteLink>
      <RouteLink path="/talks">Talks</RouteLink>
      <RouteLink path="/projects">Projects</RouteLink>
      <RouteLink path="/communities">Communities</RouteLink>
    </nav>

    <SocialLinks />
  </div>
</header>
