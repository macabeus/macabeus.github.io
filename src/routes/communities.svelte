<script lang="ts">
  import { assets } from '$app/paths'
  import GridImages from '../components/GridImages.svelte'
  import GridWorks from '../components/GridWorks.svelte'

  const formerOrganizer = {
    Pylestras: {
      priority: 1,
      link: 'https://www.pylestras.org/',
      description: "I was the Python's community organizer in the city of Fortaleza.",
    },
    CocoaHeads: {
      priority: 1,
      link: 'https://github.com/CocoaHeadsBrasil',
      description: 'I was the organizer for the Apple-related technology community in Fortaleza city.',
    },
  }
</script>

<GridImages
  images={[
    { src: `${assets}/pylestras.jpg`, alt: 'XIV Pylestras' },
    { src: `${assets}/cocoaheads.png`, alt: '10th CocoaHeads Fortaleza' },
    { src: `${assets}/cocoaheads-2.jpg`, alt: '10th CocoaHeads Fortaleza' },
  ]}
/>

<article>
  <h1>Organizer</h1>

  <article>
    <h5><a href="https://gambiconf.dev/" target="_blank" rel="noopener noreferrer">GambiConf</a></h5>

    <p>
      I'm the organizer of <strong>GambiConf</strong>, an event focused on Portuguese-speaking audiences inspired
      by <a href="https://bangbangcon.com/" target="_blank" rel="noopener noreferrer">!!Con</a> to bring the fun
      side of Computer Engineering — the one we usually won't learn and use in our day-to-day work.
    </p>

    <p>
      Think of it as a place where the speakers can share unusual pet projects and mind-blowing stuff, like
      running DOOM in an oscilloscope or fluid computing.
    </p>
  </article>
</article>

<article>
  <h1>Former Organizer</h1>

  <GridWorks works={formerOrganizer} let:description={description}>
    <p>{description}</p>
  </GridWorks>
</article>
