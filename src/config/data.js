//Links
import TikTokLogo from '@/assets/logos/tiktok.svg'
import InstagramLogo from '@/assets/logos/instagram.svg'
import TwitterLogo from '@/assets/logos/twitter.svg'
import WhatsappLogo from '@/assets/logos/whatsapp.svg'
import GithubLogo from '@/assets/logos/github.svg'
//Controls
import MessageIcon from '@/assets/icons/message.svg'
import AboutIcon from '@/assets/icons/about.svg'
import SettingsIcon from '@/assets/icons/settings.svg'

export const Links = [
  {
    title: 'Tik Tok',
    url: 'https://tiktok.com/@ninjasweb',
    icon: TikTokLogo.src
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/ninjasweb',
    icon: InstagramLogo.src
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/ninjaswebcom',
    icon: TwitterLogo.src
  },
  {
    title: 'Whatsapp',
    url: 'https://wa.me/573123776619',
    icon: WhatsappLogo.src
  },
  {
    title: 'Github',
    url: 'https://github.com/ninjasweb',
    icon: GithubLogo.src
  }
]

export const Controls = [
  {
    title: 'Send a Message',
    icon: MessageIcon.src,
    url: '/contact'
  },
  {
    title: '¿Quienes somos?',
    icon: AboutIcon.src,
    url: '/about'
  },
  {
    title: 'Terms and Conditions',
    icon: SettingsIcon.src,
    url: '/credits'
  }
]