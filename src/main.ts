import * as core from '@actions/core'
import {getOctokit} from './github'
import {getTags} from './tags'

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput('github-token')
    const octokit = getOctokit(githubToken)
    const [owner, repo] = core.getInput('repo').split('/')
    const limit = parseInt(core.getInput('limit'))

    const tags = await getTags(octokit, {
      owner,
      repo,
      limit
    })

    core.setOutput('tags', JSON.stringify(tags))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
