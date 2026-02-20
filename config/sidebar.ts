import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaBasketballBall,
} from 'react-icons/fa'
import { GiBasketballJersey } from 'react-icons/gi'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/basketball_player',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/basketball_highlights/',
    icon: FaInstagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/basketball_highlights',
    icon: FaYoutube,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@basketball_clips',
    icon: FaTiktok,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/basketball_athlete/',
    icon: FaLinkedin,
  },
  {
    label: 'Basketball Profile',
    href: 'https://example.com/basketball_profile',
    icon: FaBasketballBall,
  },
  {
    label: 'Team Jersey',
    href: 'https://example.com/team_store',
    icon: GiBasketballJersey,
  },
]
