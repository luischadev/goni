const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;

export const areaHeroImages: Record<string, { src: string; alt: string }> = {
  "recuperos-legales": {
    src: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/img-recuperos-2.jpg",
    alt: "Upward view of steel and glass corporate buildings, evoking the institutional setting of legal recoveries",
  },
  "derecho-maritimo-y-transporte": {
    src: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/img-maritimo-1.jpg",
    alt: "Worker on top of cargo containers aboard a vessel, evoking the international maritime carriage of goods",
  },
  "litigios-y-arbitrajes": {
    src: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/img-litigios-1.png",
    alt: "Neoclassical interior of an institutional building with columns and an atrium, evoking the litigation setting",
  },
  "responsabilidad-civil": {
    src: "https://pub-396ba7766f0a49cba86800f9d74523ad.r2.dev/img-recupero-1.jpg",
    alt: "Professional reviewing documents in a folder, evoking analysis and defense in civil liability matters",
  },
  "derecho-corporativo": {
    src: pexels(33463115),
    alt: "Modern office building with a glass facade, representing corporate law and business",
  },
};
