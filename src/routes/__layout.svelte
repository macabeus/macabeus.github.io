<script lang="ts">
  import Header from '../components/Header.svelte'
</script>

<style>
  body {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }

  main {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 640px) {
    body {
      padding: 0.5rem;
    }
  }
</style>

<svelte:head>
  <title>Macabeus' Hub</title>
</svelte:head>

<body>
  <Header />

  <main>
    <slot></slot>
  </main>
</body>
