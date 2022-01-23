import { Octokit } from './github'

interface TagRequest {
  owner: string
  repo: string
  limit: number
}

export async function getTags(
  octokit: Octokit,
  request: TagRequest
): Promise<string[]> {

  const { owner, repo, limit } = request
  const tags: string[] = []

  for (let i = 0; tags.length < limit; i++) {
    const per_page = (limit - tags.length) % 100

    const { data } = await octokit.rest.repos.listTags({
      owner,
      repo,
      per_page,
      page: i
    })

    tags.push(...data.map(d => d.name))

    if (data.length < per_page) break
  }

  return tags
}
