const config = {
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        "assets": ["dist/*", "package.json", "pnpm-lock.yaml", "README.md", "LICENSE"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }

    ],
    "@semantic-release/github"
  ]
}
module.exports = config