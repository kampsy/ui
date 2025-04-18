const config = {
	branches: ['main', { name: 'tailwindcss-v4', prerelease: 'beta' }],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/npm',
			{
				npmPublish: true,
				tarballDir: 'dist'
			}
		],
		[
			'@semantic-release/git',
			{
				assets: ['dist/*', 'package.json', 'pnpm-lock.yaml', 'README.md', 'LICENSE'],
				message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
			}
		],
		[
			'@semantic-release/github',
			{
				assets: ['dist/*']
			}
		]
	],
	tagFormat: 'v${version}' // For main branch; tailwind-4 will override with beta-v${version}
};

module.exports = config;
