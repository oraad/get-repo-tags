import { getOctokit } from '../src/github'
import { getTags } from '../src/tags'
import * as process from 'process'
import { expect, test } from '@jest/globals'

test('check tags', async () => {

    const token: string = process.env.GITHUB_TOKEN ?? process.env['github-token'] ?? ''
    const octokit = getOctokit(token)
    const owner = 'actions'
    const repo = 'hello-world-javascript-action'
    const limit = 10
    await expect(getTags(octokit, { owner, repo, limit })).resolves.not.toHaveLength(0)
})
