export const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/partners", label: "Partners" },
  { href: "/impact", label: "Impact" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/impact", label: "Impact" },
  { href: "/#contact", label: "Contact" },
] as const;

export const email = "culinaryecolife.secretariat@gmail.com";

export const stats = [
  { value: "826", label: "Total scholars recorded" },
  { value: "700+", label: "CLP graduates cited" },
  { value: "90%", label: "Working in F&B" },
  { value: "20K+", label: "Hot meals during pandemic" },
] as const;

export const pillars = [
  {
    index: "01",
    title: "Empower",
    body: "Give people practical skills, pathways to work, and the confidence to build self-sufficient lives.",
  },
  {
    index: "02",
    title: "Educate",
    body: "Make culinary learning accessible to deserving individuals and communities.",
  },
  {
    index: "03",
    title: "Steward",
    body: "Promote responsible food production and practical responses to ecological challenges.",
  },
] as const;

export const timeline = [
  {
    year: "2001",
    title: "CELI is created",
    body: "Formerly Culinary Education Foundation, Inc., the organization was created in September 2001 with the support of individuals sharing the same aspiration.",
  },
  {
    year: "2013",
    title: "Cooking For Life grows",
    body: "Project batch records begin with CLP-Katipunan and CLP-Candon scholars.",
  },
  {
    year: "2016",
    title: "The Earth Kitchen",
    body: "Completed April 22, 2016, the project demonstrates renewable-energy technologies with potential to reduce energy consumption.",
  },
  {
    year: "Today",
    title: "Education + ecology + opportunity",
    body: "CELI continues its work through culinary scholarships, green training, livelihood programs, environmental technologies, and partnerships.",
  },
] as const;

export const successfulScholars = [
  {
    name: "JM Sto. Domingo",
    story: "A deaf chef honored abroad.",
  },
  {
    name: "Gina La Rousset",
    story: "A restaurant owner in Lourdes, France.",
  },
] as const;

export const communities = [
  "Bulacan",
  "Leyte",
  "Agusan del Sur",
  "Butuan City",
] as const;

export const impactVideos = [
  {
    href: "https://www.facebook.com/reel/740764755437834",
    eyebrow: "24 Oras Weekend",
    title: "Kahit sa kusina, posible ang kita mo.",
    body: "The Super Manang program: culinary skills and a livelihood for women.",
    width: 1280,
    height: 720,
  },
  {
    href: "https://www.facebook.com/watch/?v=334365284061803",
    eyebrow: "Cooking For Life",
    title: "Scholars, and the work that followed.",
    body: "Lyka Mae Sinfuego, Dan Louis Placido, and Jake Serafin on the paths opened by the Cooking For Life and Rotary scholarship programs.",
    width: 1280,
    height: 720,
  },
] as const;

export const homePrograms = [
  {
    id: "cooking-for-life",
    eyebrow: "Culinary Education",
    title: "Cooking For Life Program",
    body: "A three-month intensive, hands-on culinary training program for underprivileged individuals seeking employment in the food and beverage industry, run with CCA Manila.",
    cta: "Sponsor a Batch",
    href: "/about#cooking-for-life",
    image: "/images/program-clp.png",
    alt: "Culinary students in white coats working together in a training kitchen",
    position: "center 30%",
  },
  {
    id: "green-chefmanship",
    eyebrow: "Green Skills",
    title: "Green Chefmanship Training",
    body: "A sixteen-hour training program developed to promote environmental management in food production, in collaboration with Earth Day Network Philippines.",
    cta: "Learn more",
    href: "/about#green-chefmanship",
    image: "/images/program-green.png",
    alt: "Participants outdoors during Green Chefmanship training",
    position: "center",
  },
  {
    id: "super-manang",
    eyebrow: "Livelihood",
    title: "The Super Manang Project",
    body: "An outreach livelihood program developing basic culinary skills among women in underserved communities, including fish deboning skills linked to employment opportunities.",
    cta: "Support the program",
    href: "/about#super-manang",
    image: "/images/program-manang.png",
    alt: "Women gathered around a table during a livelihood cooking session",
    position: "center",
  },
  {
    id: "earth-kitchen",
    eyebrow: "Green Technology",
    title: "The Earth Kitchen",
    body: "A renewable-energy technology project featuring a caramelizer stove, solar-powered food dehydrator, solar dryer for buko shells, and slow-cooking stove.",
    cta: "Explore",
    href: "/about#earth-kitchen",
    image: "/images/program-earth.png",
    alt: "Preserved vegetables, salads, and bottled drinks prepared in the program kitchen",
    position: "center",
  },
] as const;

export const partnerLogos = [
  {
    href: "/partners#cca-manila",
    src: "/images/marks/partner-1.png",
    alt: "Center for Culinary Arts, Manila",
    width: 602,
    height: 290,
  },
  {
    href: "/partners#candon",
    src: "/images/marks/partner-2.png",
    alt: "City of Candon, Ilocos Sur",
    width: 1024,
    height: 1024,
  },
  {
    href: "/partners#zero-waste",
    src: "/images/marks/partner-3.png",
    alt: "Zero Waste Philippines",
    width: 602,
    height: 1024,
  },
  {
    href: "/partners#earth-day",
    src: "/images/marks/partner-4.png",
    alt: "Earth Day Network Philippines, Inc.",
    width: 267,
    height: 386,
  },
  {
    href: "/partners#msc",
    src: "/images/marks/partner-5.png",
    alt: "MSC CEPAGCO Multipurpose Cooperative",
    width: 500,
    height: 500,
  },
  {
    href: "/partners#rotary",
    src: "/images/marks/partner-6.png",
    alt: "Rotary Club of Sto. Domingo",
    width: 925,
    height: 338,
  },
] as const;

export const people = [
  {
    index: "01 / 07",
    name: "Susana P. Guerrero",
    role: "The Founding President",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam dui, dapibus at enim dictum, fermentum tempor lectus.",
    image: "/images/person-annie.png",
    alt: "Susana P. Guerrero standing in a garden",
    nameClass: "text-green",
    position: "center 18%",
    comingSoon: false,
  },
  {
    index: "02 / 07",
    name: "Rev. Fr. Rolie Richie Gomez",
    role: "Coming soon",
    bio: "",
    image: null,
    alt: "",
    nameClass: "text-ink",
    position: "center",
    comingSoon: true,
  },
  {
    index: "03 / 07",
    name: "Chef Catherine Ruth S. Catapia",
    role: "Coming soon",
    bio: "",
    image: null,
    alt: "",
    nameClass: "text-ink",
    position: "center",
    comingSoon: true,
  },
  {
    index: "04 / 07",
    name: "Ma. Veritas F. Luna",
    role: "Coming soon",
    bio: "",
    image: null,
    alt: "",
    nameClass: "text-ink",
    position: "center",
    comingSoon: true,
  },
  {
    index: "05 / 07",
    name: "Patricia Isabel G. Trinidad",
    role: "Coming soon",
    bio: "",
    image: null,
    alt: "",
    nameClass: "text-ink",
    position: "center",
    comingSoon: true,
  },
  {
    index: "06 / 07",
    name: "Marcial C. Pimentel III",
    role: "Coming soon",
    bio: "",
    image: null,
    alt: "",
    nameClass: "text-ink",
    position: "center",
    comingSoon: true,
  },
  {
    index: "07 / 07",
    name: "Chef Juan Martin N. del Prado",
    role: "Coming soon",
    bio: "",
    image: null,
    alt: "",
    nameClass: "text-ink",
    position: "center",
    comingSoon: true,
  },
] as const;

export const events = [
  {
    id: "cooking-for-life",
    kicker: "01 / Cooking For Life",
    title: "Cooking For Life Program (CLP)",
    paragraphs: [
      "A culinary training program designed to provide scholarships to deserving individuals, giving them the training they need to succeed in the food industry.",
      "Culinary Eco-Life, Inc. runs it hand-in-hand with the Center for Culinary Arts (CCA) Manila. The program is a three-month, hands-on training for underprivileged individuals seeking work in food and beverage.",
    ],
    image: "/images/event-clp.png",
    alt: "A chef finishing a bowl of clam soup in a professional kitchen",
    position: "center 42%",
    flip: false,
  },
  {
    id: "green-chefmanship",
    kicker: "02 / Green Chefmanship",
    title: "Green Chefmanship Training Program",
    paragraphs: [
      "A sixteen-hour training program developed to promote environmental management in food production. This is a collaboration and shared mission with the Earth Day Network Philippines.",
    ],
    image: "/images/event-green.png",
    alt: "Chefs preparing food together during Green Chefmanship training",
    position: "center 40%",
    flip: true,
  },
  {
    id: "super-manang",
    kicker: "03 / Livelihood",
    title: "Super Manang",
    paragraphs: [
      "An outreach livelihood program intended to develop the basic culinary skills of women in depressed areas. It has about 200 beneficiaries whose services are sought after by families from neighboring subdivisions. They have also been taught skills on deboning.",
    ],
    image: "/images/program-manang.png",
    alt: "Women in a community livelihood session around a shared table",
    position: "center",
    flip: false,
  },
  {
    id: "earth-kitchen",
    kicker: "04 / Renewable Energy",
    title: "The Earth Kitchen",
    paragraphs: [
      "The Earth Kitchen houses the caramelizer stove, solar-powered food dehydrator, and slow-cooking stove. An appropriate technology on renewable energy systems.",
      "The Earth Kitchen completed last April 22, 2016 has already shown great potential of reducing energy consumption. The Earth Kitchen houses the caramelizer stove, solar-powered food dehydrator, solar drier for buko shells and the slow cooking stove.",
    ],
    image: "/images/program-earth.png",
    alt: "Jars of preserved vegetables and plated salads from the kitchen program",
    position: "center",
    flip: true,
  },
] as const;

export type GalleryImage = {
  src: string;
  alt: string;
  position?: string;
  fit?: "contain";
};

export const partners = [
  {
    id: "cca-manila",
    index: "01",
    name: "CCA Manila",
    logo: "/images/marks/partner-1.png",
    logoAlt: "CCA Manila",
    logoWidth: 602,
    logoHeight: 290,
    logoClass: "h-14 w-auto sm:h-16",
    headline: "In collaboration through an intensive hands-on training",
    body: "CCA Manila strives to transform passionate food lovers into skilled professionals who can compete globally while proudly carrying Filipino heritage.",
    tag: "Culinary Education",
    flip: false,
    images: [
      {
        src: "/images/partner-cca-kitchen.png",
        alt: "CCA Manila chefs and trainees with a finished meal",
        position: "center",
      },
      {
        src: "/images/partner-cca-group.png",
        alt: "CCA Manila chefs with a graduate and her family",
        position: "center",
      },
      {
        src: "/images/event-clp.png",
        alt: "A CCA-trained chef plating a dish",
        position: "center 40%",
      },
      {
        src: "/images/program-clp.png",
        alt: "Cooking For Life scholars in the training kitchen",
        position: "center 28%",
      },
      {
        src: "/images/about-kitchen.png",
        alt: "Students cooking together during culinary training",
        position: "center",
      },
      {
        src: "/images/person-kitchen.png",
        alt: "Kitchen team gathered around a prep station",
        position: "center",
      },
    ] satisfies GalleryImage[],
  },
  {
    id: "candon",
    index: "02",
    name: "City of Candon Ilocos Sur",
    logo: "/images/marks/partner-2.png",
    logoAlt: "Seal of the City of Candon",
    logoWidth: 1024,
    logoHeight: 1024,
    logoClass: "h-20 w-auto sm:h-24",
    logo2: "/images/marks/partner-2b.png",
    logo2Alt: "Candon City Culinary Arts Academy",
    logo2Width: 180,
    logo2Height: 180,
    headline: "Their Chefs are the trainers",
    body: "CELI strives to transform passionate food lovers into skilled professionals who can compete globally while proudly carrying Filipino heritage.",
    tag: "Training & Community",
    flip: true,
    images: [
      {
        src: "/images/partner-candon-meeting.png",
        alt: "City of Candon partners in a community meeting",
        position: "center",
      },
      {
        src: "/images/partner-candon-workshop.png",
        alt: "A City of Candon workshop around a shared table",
        position: "center",
      },
      {
        src: "/images/hero-home.png",
        alt: "Cooking For Life graduation ceremony at Candon Civic Center",
        position: "center 30%",
      },
    ] satisfies GalleryImage[],
  },
  {
    id: "zero-waste",
    index: "03",
    name: "ZERO Waste Philippines",
    logo: "/images/marks/partner-3.png",
    logoAlt: "Zero Waste Philippines",
    logoWidth: 602,
    logoHeight: 1024,
    logoClass: "h-24 w-auto sm:h-28",
    headline: "To ensure that waste is treated as a resource",
    body: "They advocate for and implement ecological solid waste management strategies designed to eliminate waste rather than send it to landfills or incinerators.",
    tag: "Environmental Stewardship",
    flip: false,
    images: [
      {
        src: "/images/partner-zero-waste-visit.png",
        alt: "Zero Waste Philippines partners during a community visit",
        position: "center",
      },
      {
        src: "/images/partner-zero-waste-talk.png",
        alt: "A presentation on the Eco Center urban permaculture site",
        position: "center",
      },
    ] satisfies GalleryImage[],
  },
  {
    id: "earth-day",
    index: "04",
    name: "Earth Day Network Philippines Inc.",
    logo: "/images/marks/partner-4.png",
    logoAlt: "Earth Day Network Philippines",
    logoWidth: 267,
    logoHeight: 386,
    logoClass: "h-20 w-auto sm:h-24",
    headline: "In collaboration with Green Chefmanship Training Program",
    body: "They are a non-profit, non-stock network organization that coordinates the annual celebration of Earth Day every April 22nd in the Philippines.",
    tag: "Green Chefmanship",
    flip: true,
    images: [
      {
        src: "/images/partner-earth-day-ceremony.png",
        alt: "A blessing during an Earth Day Network gathering",
        position: "center top",
      },
      {
        src: "/images/partner-earth-day-event.png",
        alt: "Earth Day 2017 gathering at Annie's Kitchen",
        position: "center",
      },
      {
        src: "/images/event-green.png",
        alt: "Chefs training through the Green Chefmanship program",
        position: "center 35%",
      },
      {
        src: "/images/program-green.png",
        alt: "Outdoor session of the Green Chefmanship training",
        position: "center",
      },
    ] satisfies GalleryImage[],
  },
  {
    id: "msc",
    index: "05",
    name: "MSC Centre for the Poor",
    logo: "/images/marks/partner-5.png",
    logoAlt: "MSC CEPAGCO Multipurpose Cooperative",
    logoWidth: 500,
    logoHeight: 500,
    logoClass: "h-20 w-auto sm:h-24",
    headline: "Partnered Aspect",
    body: "The Missionary of the Sacred Heart was established during 2018 and is centered on community development and environmental stewardship organization.",
    tag: "Community Development",
    flip: false,
    images: [
      {
        src: "/images/partner-msc-award.png",
        alt: "MSC Center for the Poor Agriculture Cooperative with the Villar Awards trophy",
        position: "center top",
      },
      {
        src: "/images/partner-msc-group.png",
        alt: "MSC partners and chefs together at a community event",
        position: "center",
      },
    ] satisfies GalleryImage[],
  },
  {
    id: "rotary",
    index: "06",
    name: "Rotary Club of Sto Domingo",
    logo: "/images/marks/partner-6.png",
    logoAlt: "Rotary Club of Sto. Domingo",
    logoWidth: 925,
    logoHeight: 338,
    logoClass: "h-12 w-auto sm:h-14",
    headline: "Partnered Aspect",
    body: "CELI strives to transform passionate food lovers into skilled professionals who can compete globally while proudly carrying Filipino heritage.",
    tag: "Community Partnership",
    flip: true,
    images: [
      {
        src: "/images/partner-rotary.png",
        alt: "A chef preparing food during a Rotary Club partnership training",
        position: "center top",
      },
    ] satisfies GalleryImage[],
  },
] as const;
