<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
  import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
</script>

<style>
  a ~ a {
    margin-left: 1rem;
  }
</style>

<address>
  <a href="https://github.com/macabeus" target="_blank" rel="noopener noreferrer">
    <Fa icon={faGithub} />
  </a>

  <a href="https://medium.com/@macabeus" target="_blank" rel="noopener noreferrer">
    <Fa icon={faMedium} />
  </a>

  <a href="https://linkedin.com/in/macabeus/" target="_blank" rel="noopener noreferrer">
    <Fa icon={faLinkedin} />
  </a>

  <a href="https://stackoverflow.com/users/3440266/macabeus" target="_blank" rel="noopener noreferrer">
    <Fa icon={faStackOverflow} />
  </a>

  <a href="https://twitter.com/bmacabeus" target="_blank" rel="noopener noreferrer">
    <Fa icon={faTwitter} />
  </a>
</address>
