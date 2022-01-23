# Get Tags Action

This action fetch github tags.

## Inputs

### `repo`

**Required** GitHub repo under `<owner>/<repo>` format.

### `limit`

**Required** How many releases to return. Default: 10.

## Outputs

### `tags`

Tags data array.

## Example usage

```yml
uses: oraad/get-tags-action@v1
with:
  repo: actions/hello-world-javascript-action
```