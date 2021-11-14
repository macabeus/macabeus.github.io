<script lang="ts">
  export let onChanged: (newStatus: boolean) => void

  let active = false

  const toggleActiveHandle = () => {
    active = !active
    onChanged(active)
  }
</script>

<style>
  button {
    outline: none;

    border-radius: 2px;
    padding: 1px 3px;

    font-size: 0.9rem;

    transition: all 0.2s ease-out;

    border: 1px solid rgba(191, 191, 191, 0.5);
    background-color: transparent;

    cursor: pointer;
  }

  button:hover {
    filter: brightness(120%);
  }

  .active {
    background-color: rgba(191, 191, 191, 0.5);
  }
</style>

<button
  class={active ? 'active' : ''}
  on:click={toggleActiveHandle}
>
  <slot></slot>
</button>
