export const seoMetadata = {
  title: {
    template: '%s - Felix',
    default: 'Felix - An indie developer',
  },
  description:
    'I’m An (also call me Felix), a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}
