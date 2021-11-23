<script lang="ts">
  import { assets } from '$app/paths'
  import GridImages from '../components/GridImages.svelte'
  import fetchRepositories from '../network/fetchRepositories'
  import GridWorks from '../components/GridWorks.svelte'

  type PetProject = {
    priority: number,
    link: string,
    stargazers: number | null,
    description: string | null,
    tags: string[],
  }

  let petProjects: { [projectName: string]: PetProject }
  $: petProjects = {
    'js-proposal-algebraic-effects': {
      priority: 1,
      link: 'https://github.com/macabeus/js-proposal-algebraic-effects',
      stargazers: null,
      description: null,
      tags: ['JS'],
    },
    'GridView': {
      priority: 2,
      link: 'https://github.com/macabeus/GridView',
      stargazers: null,
      description: null,
      tags: ['Swift', 'Apple TV'],
    },
    'rust-neander': {
      priority: 3,
      link: 'https://github.com/macabeus/rust-neander',
      stargazers: null,
      description: null,
      tags: ['Rust', 'Virtual Machine'],
    },
    'react-gbajs': {
      priority: 4,
      link: 'https://github.com/macabeus/react-gbajs',
      stargazers: null,
      description: null,
      tags: ['TS', 'React'],
    },
    'TvLightSegments': {
      priority: 5,
      link: 'https://github.com/macabeus/js-TvLightSegments',
      stargazers: null,
      description: null,
      tags: ['Swift', 'Apple TV'],
    },
    'fluent-typescript': {
      priority: 6,
      link: 'https://github.com/macabeus/js-proposal-fluent-typescript',
      stargazers: null,
      description: null,
      tags: ['TS'],
    },
    'switch-folklore': {
      priority: 7,
      link: 'https://github.com/macabeus/js-switch-folklore',
      stargazers: null,
      description: null,
      tags: ['TS', 'C', 'React'],
    },
    'TvCodeScreen': {
      priority: 8,
      link: 'https://github.com/macabeus/TvCodeScreen',
      stargazers: null,
      description: null,
      tags: ['Swift', 'Apple TV'],
    },
  }

  const enrichmentPetProjects = async () => {
    const allRepos = await fetchRepositories()

    allRepos
      .forEach((repo) => {
        if (repo.name in petProjects) {
          petProjects[repo.name].stargazers = repo.stargazers_count
          petProjects[repo.name].description = repo.description
        }
      })

    petProjects = petProjects
  }

  enrichmentPetProjects()
</script>

<style>
  .tag ~ .tag::before {
    content: ', '
  }
</style>

<article>
  <h1>Highlighted Open Source Projects</h1>

  <GridImages
    images={[
      { src: `${assets}/klo-gba-js.png`, alt: 'Project klo-gba.js screenshot' },
      { src: `${assets}/macro-compiler.png`, alt: 'Talk showing the project MacroCompiler' },
      { src: `${assets}/vscode-fluent.png`, alt: 'VSCode showing the extension vscode-fluent' },
    ]}
  />

  <article>
    <h5><a href="https://github.com/macabeus/klo-gba.js" target="_blank" rel="noopener noreferrer">klo-gba.js</a></h5>

    <p>
      It's the level editor for <strong>Klonoa: Empire of Dreams</strong> game.
    </p>

    <p>
      Using this web tool, you can push the limits of this awesome game by customizing its maps and playing a custom ROM.
    </p>
  </article>

  <article>
    <h5><a href="https://github.com/macabeus/macro-compiler" target="_blank" rel="noopener noreferrer">Macro Compiler</a></h5>

    <p>
      It's the compiler from EventMacro to an OpenKore plugin (a script written in Perl).
    </p>

    <p>
      EventMacro is the DSL used to automate the actions made on OpenKore – the bot used in the Ragnarok online game.
    </p>

    <p>
      The compiler outputs a script in Perl since OpenKore itself is written in Perl.
    </p>
  </article>

  <article>
    <h5><a href="https://github.com/macabeus/vscode-fluent" target="_blank" rel="noopener noreferrer">vscode-fluent</a></h5>

    <p>
      <strong>Fluent</strong> is Mozilla's programming language for natural-sounding translations.
    </p>

    <p>
      And <strong>vscode-fluent</strong> is the Visual Code Studio extension to improve developer experience while working
      with this language, offering features such as syntax errors, code action to extract a string, and much more!
    </p>
  </article>
</article>

<article>
  <h1>Pet Open Source Projects</h1>

  <GridWorks works={petProjects} let:description={description} let:stargazers={stargazers} let:tags={tags}>
    {#if description}
      <p>{description}</p>
    {/if}

    {#if stargazers !== null}
      <p>⭐ {stargazers}</p>
    {/if}

    <p>
      {#each tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </p>
  </GridWorks>
</article>
