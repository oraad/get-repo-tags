import * as github from '@actions/github'

export type Octokit = ReturnType<typeof getOctokit>

export const getOctokit = github.getOctokit
