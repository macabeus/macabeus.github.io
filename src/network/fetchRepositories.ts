import type { Repository } from '../models/github'

const fetchRepositories = async (): Promise<Repository[]> => {
  const reposResult = await fetch('https://api.github.com/users/macabeus/repos?per_page=100&type=sources&page=1')
  const allRepos = await reposResult.json() as Repository[]

  return allRepos
}

export default fetchRepositories
