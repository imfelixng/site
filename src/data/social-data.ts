type SocialItem = {
  key: string
  name: string
  link: string
  value: string
}

export const socialData: SocialItem[] = [
  {
    key: 'x',
    name: 'X',
    link: 'https://x.com/im_felixng',
    value: 'im_felixng',
  },
  {
    key: 'github',
    name: 'GitHub',
    link: 'https://github.com/imfelixng',
    value: 'imfelixng',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/imfelixng/',
    value: 'imfelixng',
  },
]

export const socialDataMap = socialData.reduce(
  (acc, cur) => {
    acc[cur.key] = cur
    return acc
  },
  {} as Record<string, SocialItem>,
)
