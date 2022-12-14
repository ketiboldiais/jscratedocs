// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "jscrate",
	tagline: "A JavaScript data structures and algorithms library.",
	url: "https://ketiboldiais.github.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "ketiboldiais", // Usually your GitHub org/user name.
	deploymentBranch: "main",
	projectName: "jscratedocs", // Usually your repo name.
	trailingSlash: false,
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				blog: {
					// showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
			type: "text/css",
			integrity:
				"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
			crossorigin: "anonymous",
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "jscrate",
				// logo: {
				//   alt: 'My Site Logo',
				//   src: 'img/logo.svg',
				// },
				items: [
					// {
					// 	type: "doc",
					// 	docId: "overview",
					// 	position: "left",
					// 	label: "Modules",
					// },
					// {to: '/blog', label: 'Blog', position: 'left'},
					// {
					// 	href: "https://github.com/facebook/docusaurus",
					// 	label: "GitHub",
					// 	position: "right",
					// },
				],
			},
			footer: {
				// style: 'dark',
				// links: [
				//   {
				//     title: 'Docs',
				//     items: [
				//       {
				//         label: 'Tutorial',
				//         to: '/docs/intro',
				//       },
				//     ],
				//   },
				//   {
				//     title: 'Community',
				//     items: [
				//       {
				//         label: 'Stack Overflow',
				//         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				//       },
				//       {
				//         label: 'Discord',
				//         href: 'https://discordapp.com/invite/docusaurus',
				//       },
				//       {
				//         label: 'Twitter',
				//         href: 'https://twitter.com/docusaurus',
				//       },
				//     ],
				//   },
				//   {
				//     title: 'More',
				//     items: [
				//       {
				//         label: 'Blog',
				//         to: '/blog',
				//       },
				//       {
				//         label: 'GitHub',
				//         href: 'https://github.com/facebook/docusaurus',
				//       },
				//     ],
				//   },
				// ],
				// copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
