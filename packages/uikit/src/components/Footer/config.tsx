import { Language } from "../LangSelector/types";
import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon } from "../Svg";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Blog",
        href: "https://czodiac.medium.com",
      },
      {
        label: "Community",
        href: "https://t.me/CZodiacofficial",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/chinese-zodiac",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/zodiacs_c",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/CZodiacofficial",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/chinese-zodiac/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/QDyTJccdE9",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
