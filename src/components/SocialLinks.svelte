<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
  import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
  import MyAnimeList from '../svgs/MyAnimeList.svelte'
</script>

<style>
  address {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .raw-svg {
    display: contents;
  }
</style>

<address>
  <a href="https://github.com/macabeus" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <Fa icon={faGithub} />
  </a>

  <a href="https://medium.com/@macabeus" target="_blank" rel="noopener noreferrer" aria-label="Medium">
    <Fa icon={faMedium} />
  </a>

  <a href="https://linkedin.com/in/macabeus/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
    <Fa icon={faLinkedin} />
  </a>

  <a href="https://stackoverflow.com/users/3440266/macabeus" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
    <Fa icon={faStackOverflow} />
  </a>

  <a href="https://twitter.com/bmacabeus" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <Fa icon={faTwitter} />
  </a>

  <a href="https://myanimelist.net/profile/trickster42" target="_blank" rel="noopener noreferrer" aria-label="My Anime List" class="raw-svg">
    <MyAnimeList />
  </a>
</address>
