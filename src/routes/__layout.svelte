<script lang="ts">
  import Header from '../components/Header.svelte'
  import '../app.css';
</script>

<style>
  main {
    margin-top: 4rem;
    margin-bottom: 4rem;
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
