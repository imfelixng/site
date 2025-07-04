export * from './email-icon'
export * from './github-icon'
export * from './icon-x'
export * from './linkedin-icon'

import { GitHubIcon } from './github-icon'
import { XIcon } from './icon-x'
import { LinkedInIcon } from './linkedin-icon'

export const socialIconsMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  x: XIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}
