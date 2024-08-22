/* eslint-disable quotes */
const siteMetadata = {
  title: "Abe's Blog",
  author: 'Abe Chen',
  headerTitle: 'Abe Chen',
  avatarUrl: 'https://avatars.githubusercontent.com/u/46858104?v=4',
  description:
    '這裡是 Abe Chen 的個人網站。作為一名專注於細節、高品質產品的軟體工程師，我專精於前端開發，包括 JavaScript、TypeScript、React、Next.js、Vue.js 和 Nuxt.js 等技術。 | The personal website of Abe Chen, a software engineer dedicated to crafting detailed, high-quality products. My expertise lies in front-end development, including technologies such as JavaScript, TypeScript, React, Next.js, Vue.js, and Nuxt.js.',
  language: 'zh-Hant', // for SEO
  locale: 'zh_TW', // for Open Graph
  theme: 'system', // system, dark or light
  siteUrl: 'https://abechen.net',
  siteRepo: 'https://github.com/abe1272001/abe.dev',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/api/og`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'abe1272001@gmail.com',
  github: 'https://github.com/abe1272001',
  x: 'https://twitter.com/abe_chen1212',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/abe127/',
  medium: 'https://medium.com/@abechen',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com/abe1272001/',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // umamiAnalytics: {
    //   // We use an env variable for this site to avoid other users cloning our analytics ID
    //   umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    //   // You may also need to overwrite the script if you're storing data in the US - ex:
    //   // src: 'https://us.umami.is/script.js'
    //   // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_GA_ID, // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'zh-TW',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

export default siteMetadata
