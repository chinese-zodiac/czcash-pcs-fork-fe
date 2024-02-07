import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Developers"),
    items: [
      {
        label: t("Github"),
        href: "https://github.com/chinese-zodiac",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Terms Of Service"),
        href: "https://docs.czodiac.com/czodiac-litepaper/terms-of-use",
      },
      {
        label: t("Blog"),
        href: "https://czodiac.medium.com/",
      },
    ],
  },
];
