const dictionaries = {
  ja: {
    homeHref: "/home",
    homeLabel: "ホーム",
    portfolioHref: "/Portfolio",
    portfolioLabel: "/作品一覧",
    contactHref: "/Contact",
    contactLabel: "/お問い合わせ",
    noticeHref: "/Notice",
    noticeLabel: "/お知らせ",
  },
  en: {
    homeHref: "/home",
    homeLabel: "HOME",
    portfolioHref: "/Portfolio",
    portfolioLabel: "/PORTFOLIO",
    contactHref: "/Contact",
    contactLabel: "/CONTACT",
    noticeHref: "/Notice",
    noticeLabel: "/NOTICE",
  },
} as const;

export default function getDictionary(lang: string | undefined) {
  return dictionaries[lang as keyof typeof dictionaries];
}
