import core from '@actions/core'
import github from '@actions/github'

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput('github-token')
    const octokit = github.getOctokit(githubToken)
    const [owner, repo] = core.getInput('repo').split('/')
    const limit = parseInt(core.getInput('limit'))

    const tags: string[] = []

    for (let i = 0; tags.length < limit; i++) {
      const per_page = (limit - tags.length) % 100

      const {data} = await octokit.rest.repos.listTags({
        owner,
        repo,
        per_page,
        page: i
      })

      tags.push(...data.map(d => d.name))
    }

    core.setOutput('tags', JSON.stringify(tags))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
