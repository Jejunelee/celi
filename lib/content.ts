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
  { value: "857", label: "Scholars recorded" },
  { value: "453", label: "Katipunan graduates" },
  { value: "250", label: "Candon graduates" },
  { value: "154", label: "Rotary graduates" },
] as const;

export const pillars = [
  {
    index: "01",
    title: "Empowerment",
    body: "Providing culinary skills and green livelihood to build self-reliance and improve quality of life.",
  },
  {
    index: "02",
    title: "Education",
    body: "Building a better future for out-of-school youths through culinary passion and environmental awareness.",
  },
  {
    index: "03",
    title: "Community Development",
    body: "Equipping women and families with sustainable livelihood skills to foster self-reliant communities.",
  },
] as const;

export const timeline = [
  {
    id: "2001",
    year: "2001",
    title: "CEF was created",
    body: "CEF was created to provide culinary education to deserving individuals to help them succeed in the food service industry.",
  },
  {
    id: "2005",
    year: "2005",
    title: "Mobile Kitchen On the Go",
    body: "300 out-of-school youths and housewives gained skills in culinary arts and food business development, to build careers and start livelihood activities.",
  },
  {
    id: "2009",
    year: "2009–2011",
    title: "Training in Candon",
    body: "The Culinary Training Program was conducted in Candon City, Ilocos Sur.",
  },
  {
    id: "2011",
    year: "2011",
    title: "Maggi Carinderia Grant",
    body: "A partnership with Nestlé through the Maggi Carinderia Grant.",
  },
  {
    id: "2013",
    year: "2013",
    title: "Manila Food & Wine Festival",
    body: "The first Manila Food & Wine Festival: Cooking Revolution. Proceeds funded scholars of the Cooking for Life Program, which began in Manila in May and extended to Candon City in November.",
  },
  {
    id: "2015",
    year: "2015",
    title: "Green Tech Project",
    body: "A continued commitment to environmental awareness through Best Green Practices, zero-waste advocacy, and an eco-economy that is low-cost, low-tech, and easily replicable. Food scraps become nutrient-rich compost through Bokashi technology, and Ozone technology promotes a cleaner, safer environment. CEF was featured in Hospitality News Magazine as one of the most successful CSR institutions in the industry.",
  },
  {
    id: "2017",
    year: "2017",
    title: "Rotary scholars",
    body: "The first batch of 25 CLP scholars, in partnership with the Rotary Club of Sto. Domingo.",
  },
  {
    id: "2023",
    year: "2023",
    title: "A renewed beginning",
    body: "The CLP-Candon scholarship program resumed after the pandemic through the support of Cong. Kristine Singson.",
  },
  {
    id: "2024",
    year: "2024",
    title: "CELI",
    body: "We evolved into Culinary Eco-Life, Inc. (CELI), reflecting a renewed commitment to culinary education integrating environmental stewardship and sustainable living.",
  },
  {
    id: "2025",
    year: "2025",
    title: "Super Manang",
    body: "A renewed commitment to empower women through the Super Manang Program.",
  },
  {
    id: "2026",
    year: "2026",
    title: "Rotary continues",
    body: "Another run of CLP, sponsored by the Rotary Club of Sto. Domingo.",
  },
] as const;

export const successfulScholars = [
  {
    name: "JM Sto. Domingo",
    detail: "CLP Batch 9, 2015",
    story: "A deaf chef honored abroad. Jesus Miguel A. Sto. Domingo, a Filipino chef and Demi Chef de Partie, with eight years in Dubai.",
    image: "/images/scholar-jm-poster.png",
    imageAlt: "Filipino Pride: JM Sto. Domingo honored for his work as a chef in Dubai",
    imageFit: "contain",
  },
  {
    name: "Philip Brandon Makil",
    detail: "CLP-Candon, Batch 2013",
    story: "",
    image: null,
    href: "https://drive.google.com/file/d/1lzbIX0N4s9D5_Z-cja_hYQv_hkqF6hGz/view",
    linkLabel: "CLP Journey 2010",
  },
  {
    name: "Chef Mon Quitelin",
    detail: "CLP-Candon, Batch 2013",
    story: "",
    image: null,
  },
  {
    name: "Peter Billutes",
    detail: "Batch 6, 2014",
    story: "Kitchen Manager, CYMA.",
    image: null,
  },
  {
    name: "Executive Chef of Mesa Group",
    detail: "",
    story: "",
    image: null,
  },
  {
    name: "Gina Lat Rousset",
    detail: "CLP Batch 2016",
    story: "A restaurant owner in Lourdes, France.",
    image: "/images/scholar-gina.jpg",
    imageAlt: "Gina Lat Rousset in her restaurant kitchen, a Cooking For Life graduate",
    imageFit: "cover",
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
    image: "/images/green-chef-class.jpg",
    alt: "A chef instructing students at a Green Chefmanship kitchen class",
    position: "center 30%",
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
    image: "/images/earth-kitchen-stove.jpg",
    alt: "A chef beside a brick stove at the Earth Kitchen",
    position: "center 30%",
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
    role: "President & Founder",
    lines: [
      "CCP Emeritus. First Filipina Certified Culinary Professional, IACP, 1999.",
      "First Asian awardee of the Antonin Careme Society, 2015.",
      "She advocates lifelong learning, green practices, and sustainable livelihood, and has built this work in Bulacan, Leyte, Agusan del Sur, and Butuan City.",
    ],
    image: "/images/person-annie.png",
    alt: "Susana P. Guerrero standing in a garden",
    nameClass: "text-green",
    position: "center 18%",
    comingSoon: false,
  },
  {
    index: "02 / 07",
    name: "Catherine Ruth S. Catapia",
    role: "Chef Instructor, CCA Manila",
    lines: [
      "Graduate of the Diploma in Culinary Arts & Technology Management, CCA Manila.",
      "Former Program Officer, CEF Cooking for Life Program (CLP).",
      "Former Quality Assurance Officer, Artstream Hospitality Management Group, Inc.",
      "Pursuing a Master of Science in Culinary Arts.",
    ],
    image: "/images/person-kat.jpg",
    alt: "Catherine Ruth S. Catapia, chef instructor at CCA Manila",
    nameClass: "text-ink",
    position: "center 20%",
    comingSoon: false,
  },
  {
    index: "03 / 07",
    name: "Juan Martin N. del Prado",
    role: "Chef Instructor",
    lines: [
      "Graduate of the Diploma in Culinary Arts & Technology Management, CCA Manila.",
      "Former First Corporate Chef at San Miguel Corporation, Purefoods Culinary Center.",
      "Chef Instructor, CCA Manila and the Asian School of Hospitality Arts (ASHA).",
      "Currently operating a home catering service.",
    ],
    image: "/images/person-martin.jpg",
    alt: "Juan Martin N. del Prado in the CCA kitchen",
    nameClass: "text-ink",
    position: "center 18%",
    comingSoon: false,
  },
  {
    index: "04 / 07",
    name: "Rev. Fr. Rolie Richie Gomez",
    role: "Missionary, MSC",
    lines: [
      "A missionary of the Missionaries of the Sacred Heart (MSC).",
      "A pastoral leader with a global mission, accompanying MSC communities worldwide.",
      "A spiritual minister and environmentalist.",
      "A mentor in Nonviolent Communication (NVC), fostering understanding and compassion.",
    ],
    image: "/images/person-richie.jpg",
    alt: "Rev. Fr. Rolie Richie Gomez",
    nameClass: "text-ink",
    position: "center 12%",
    comingSoon: false,
  },
  {
    index: "05 / 07",
    name: "Ma. Veritas F. Luna",
    role: "Chancellor Emeritus, CCA Manila",
    lines: [
      "RND, MSN, PhD.",
      "President and Chairperson of the Board of Trustees, Nutrition Foundation of the Philippines.",
      "PRC Registered Nutritionist-Dietitian.",
      "A respected educator and leader in Philippine culinary and nutrition.",
    ],
    image: "/images/person-veritas.jpg",
    alt: "Ma. Veritas F. Luna",
    nameClass: "text-ink",
    position: "center 18%",
    comingSoon: false,
  },
  {
    index: "06 / 07",
    name: "Marcial C. Pimentel III",
    role: "Former Program Coordinator, CEF-CLP",
    lines: [
      "Graduate of BSHRM, Asian School of Hospitality Arts.",
      "Former Program Manager, ASHA.",
      "Pursuing a Master of Science in HRM.",
    ],
    image: "/images/person-marcial.jpg",
    alt: "Marcial C. Pimentel III",
    nameClass: "text-ink",
    position: "center 15%",
    comingSoon: false,
  },
  {
    index: "07 / 07",
    name: "Patricia Isabel G. Trinidad",
    role: "Business Development Executive, CCA Manila",
    lines: [
      "Graduate of Business Management at Singapore Management University.",
      "Certified Digital Marketing Professional and entrepreneur.",
    ],
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
      "A culinary training program designed to provide scholarships to deserving individuals, giving them the training they need to succeed in the food industry. Culinary Eco-Life, Inc. works hand-in-hand with the Center for Culinary Arts (CCA) Manila to run a three-month intensive, hands-on training for underprivileged individuals who seek employment in the food and beverage industry.",
      "CLP is about giving out-of-school youths the skills that make them employable. In partnership with the LGU of Candon City, Ilocos Sur, Rotary Club District 3780 Sto. Domingo, and New Baegjae, South Korea, 90% have been employed by F&B groups. There have been over 800 graduates, trained in culinary skills, Green Chefmanship practices, and spiritual and values formation.",
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
      "Green Chefmanship is 80 percent attitude. Simple things, such as making sure you are using a blue flame in cooking, or making the effort to peel and slice carefully, help reduce the volume of waste. Proper preparation and cooking, and correct portioning of the food that is served, translate to the least wastage. Even this is not rendered useless, as it is given to hog raisers for feed. By rigorously segregating recyclable bottles and tins and cutting down the use of plastic packaging, residual waste is greatly reduced.",
    ],
    links: [
      { label: "Read the environmental pledge", href: "/documents/green-chefmanship-pledge.pdf" },
    ],
    image: "/images/green-chef-class.jpg",
    alt: "A chef instructing students at a Green Chefmanship kitchen class",
    position: "center 30%",
    images: [
      {
        src: "/images/green-chef-class.jpg",
        alt: "A chef instructing students at a Green Chefmanship kitchen class",
        position: "center 30%",
      },
      {
        src: "/images/green-chef-cca.jpg",
        alt: "The Center for Culinary Arts, Manila kitchen facility",
        position: "center",
      },
    ],
    flip: true,
  },
  {
    id: "green-tech",
    kicker: "03 / Green Technology",
    title: "Green Tech Projects",
    paragraphs: [
      "Ozonation technology uses a low-cost, low-technology, custom-made ozonator.",
      "Ozonation of air removes airborne contaminants, enriches the oxygen, and aids in pest control. Ozonation of water produces highly oxygenated, pH 8 alkaline water, and treats wastewater.",
      "The water ozonator is portable and chemical-free. It sterilizes food preparation, utensils, and drinking water, and the work earned an ISO 14001 certification for 2013–2017.",
    ],
    links: [{ label: "View the water ozonator flyer", href: "/documents/water-ozonator-flyer.pdf" }],
    image: "/images/flyer-ozonator.jpg",
    alt: "Water ozonator flyer for Culinary Eco-Life",
    position: "center",
    fit: "contain",
    flip: false,
  },
  {
    id: "super-manang",
    kicker: "04 / Livelihood",
    title: "Super Manang",
    paragraphs: [
      "An outreach livelihood program intended to develop the basic culinary skills of women in depressed areas. It has about 200 beneficiaries whose services are sought after by families from neighboring subdivisions. They have also been taught skills in deboning milkfish and tilapia, which are highly in demand by fish exporters, thus providing them with job opportunities.",
    ],
    points: [
      "Empowered women through practical livelihood skills.",
      "Encouraged confidence and entrepreneurial skills.",
      "Created sustainable income opportunities for families.",
    ],
    image: "/images/program-manang.png",
    alt: "Women in a community livelihood session around a shared table",
    position: "center",
    flip: false,
  },
  {
    id: "earth-kitchen",
    kicker: "05 / Renewable Energy",
    title: "The Earth Kitchen",
    paragraphs: [
      "The Earth Kitchen houses the caramelizer stove, solar-powered food dehydrator, and slow-cooking stove. An appropriate technology on renewable energy systems.",
      "The Earth Kitchen completed last April 22, 2016 has already shown great potential of reducing energy consumption. The Earth Kitchen houses the caramelizer stove, solar-powered food dehydrator, solar drier for buko shells and the slow cooking stove.",
    ],
    image: "/images/earth-kitchen-building.jpg",
    alt: "The Earth Kitchen building, with its name painted in leaves beside the door",
    position: "center top",
    fit: "contain",
    frame: "3/4",
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
    headline: "Guardians of quiet dreams",
    body: "At Culinary Eco-Life Inc., we have sat across table after table from passionate, dream-filled individuals whose only barrier to a future was the inability to afford an education. We knew that to change their story, we couldn’t just hand out meals; we had to hand them the tools to build their own lives. But we could never have done it alone. We needed a partner willing to pour their heart into our cause. We found that soul in the Center for Culinary Arts (CCA), Manila.\n\nAs the social responsibility arm of CCA Manila, we have watched magic happen in the quietest, most human ways. Through a beautiful culture of volunteerism, CCA Manila’s master chefs and esteemed faculty did not just step into our classrooms as teachers — they stepped in as guardians of these quiet dreams. They donated their days off, their world-class expertise, and above all, their patience.",
    tag: "Culinary Education",
    flip: false,
    images: [
      {
        src: "/images/spg-class.jpg",
        alt: "Susana Guerrero teaching a Cooking For Life scholar to prepare vegetables",
        position: "center 40%",
      },
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
    headline: "One of our longest-running collaborations",
    body: "With the City Government of Candon, Ilocos Sur, Office of Mayor Eric D. Singson. The partnership began in 2010 and was renewed in 2023 up to the present. Over the years, this initiative has empowered communities and transformed lives through culinary education, producing 500 successful graduates who have gone on to pursue careers, entrepreneurship, and further professional growth here and abroad.",
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
      {
        src: "/images/partner-candon-mayor.jpg",
        alt: "Mayor Eric Singson greeting a Cooking For Life graduate in Candon",
        position: "center",
      },
      {
        src: "/images/partner-candon-group.jpg",
        alt: "Candon City officials and chefs at a Cooking For Life graduation",
        position: "center",
      },
      {
        src: "/images/partner-candon-opening.jpg",
        alt: "Opening ceremony for a Candon City Cooking For Life batch",
        position: "center",
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
    headline: "We should start caring for the environment",
    body: "Our crusade for environmental transformation in the hospitality industry, and in the world, has taken one step at a time.\n\nDubbed a culinary environmentalist, our founder and president, Susana “Annie” Pascual–Guerrero, has shown deep compassion as she cuts across all ages, walks of life, and educational backgrounds to deliver her message: “We should start caring for the environment and sustainability in all aspects of thinking.” “We have to fill the Earth with love so that it will be renewed and restored. In turn, it will nurture us and revitalize future generations of humanity.”\n\nWith her efforts, we formed strong partnerships so that environmental citizenship is always incorporated. These include Zero Waste Philippines, where Ma’am Annie served as president for four years, and FTC, an environmental group spreading Bokashi composting nationwide. During her term as president of Zero Waste Philippines, the organization collaborated closely with the Office of the Environmental Ombudsman for strict compliance with Republic Act 9003, the Ecological Solid Waste Management Act of 2000.",
    tag: "Environmental Stewardship",
    flip: false,
    images: [
      {
        src: "/images/partner-zw-group.jpg",
        alt: "Zero Waste Philippines members together on an outdoor stair",
        position: "center",
      },
      {
        src: "/images/partner-zw-advocacy.jpg",
        alt: "Susana Guerrero with advocates holding A Pinch of Love, A Cupful of Passion",
        position: "center",
      },
      {
        src: "/images/bokashi-brochure.jpg",
        alt: "Bokashi brochure on how to use bran, juice, and fermented waste",
        position: "center",
        fit: "contain",
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
    body: "Earth Day Network collaborates with hospitality leaders like The Cravings Group and educational foundations like CEF, now Culinary Eco-Life, Inc. Together, they champion eco-friendly programs, campaign against food waste, and push for climate literacy within the food and beverage industry.",
    tag: "Green Chefmanship",
    flip: true,
    images: [
      {
        src: "/images/partner-earth-zbo.jpg",
        alt: "Earth Day Network partners at the Zero Basura Olympics",
        position: "center",
      },
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
        src: "/images/green-chef-class.jpg",
        alt: "A chef instructing students at a Green Chefmanship kitchen class",
        position: "center 30%",
      },
      {
        src: "/images/green-chef-cca.jpg",
        alt: "The Center for Culinary Arts, Manila kitchen facility",
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
    headline: "Livelihood for nine tribes of Lumad",
    body: "In Agusan del Sur and Butuan City in Mindanao, we introduced local, low-tech and low-cost technologies, while providing livelihood for nine tribes of Lumad in honey gathering. We worked with Fr. Richie Gomez of the MSC-Center for the Poor Agriculture Cooperative (MSC-CEPAGCO). We empowered the Lumad community in Mindanao through education, financial assistance, and environmental advocacy for the poor.",
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
    headline: "90% employed by F&B groups",
    body: "In partnership with Rotary District 3780, Sto. Domingo and New Baegjae, South Korea, 90% have been employed by F&B groups. Currently, another batch of 25 scholars will be graduating in 2026. There have been over 150 graduates under the CLP-Rotary Club of Sto. Domingo program who have been trained in culinary skills, Green Chefmanship practices, and spiritual and values formation.",
    tag: "Community Partnership",
    flip: true,
    images: [
      {
        src: "/images/partner-rotary.png",
        alt: "A chef preparing food during a Rotary Club partnership training",
        position: "center top",
      },
      {
        src: "/images/partner-rotary-2026.jpg",
        alt: "The 2026 Cooking For Life Rotary batch with Susana P. Guerrero",
        position: "center",
      },
      {
        src: "/images/partner-rotary-signing.jpg",
        alt: "Rotary Club of Sto. Domingo and Culinary Eco-Life signing a partnership",
        position: "center",
      },
    ] satisfies GalleryImage[],
  },
] as const;

export const vision =
  "We envision a world where humans live in harmony with the rest of God’s Creation, using earth’s resources to meet our present needs as well as the next generation.";

export const mission =
  "To contribute towards the realization of our vision, we must learn to directly respond to the many challenges posed by the ecological crisis.";

export const ourStory = [
  "Since the founding of Culinary Education Foundation (CEF) in September 2001, it has evolved into a leading foundation in the hospitality industry. It has earned the respect and support of partner individuals, companies, funding institutions, and NGOs who share the aspiration for which the foundation was created.",
  "CEF has been the beneficiary of organizations here and abroad: the World Bank’s Bagong Paraan, the Canadian International Development Agency (CIDA) Culinary Training Program, AUSAID of Australia, the Mobile Kitchen Project with AI-HU of Taiwan, a USDA Grant, and DEG of Germany. Locally: Nestlé’s Maggi, Jelly Ace, the CDO Grant, the Department of Tourism, which partnered with CEF for two years in the Manila Food and Wine Festival, and Candon City, Ilocos Sur, which has been supporting scholars from 2010 to the present.",
  "Registered as Culinary Eco-Life, Inc. (CELI) in 2024, CELI enjoys the support of private individuals who sponsor deserving scholars, and of accomplished chefs who volunteer as instructors for the Cooking for Life Program. CELI takes pride in programs that have provided for the welfare of thousands of beneficiaries.",
  "To date, there are approximately 4,000 beneficiaries under the CEF/CELI program since its founding in 2001. They all cooked for a cause.",
] as const;

export const phones = {
  telephone: ["8927-2747", "8426-0017"],
  mobile: ["0935-5907093", "0938-7138896"],
} as const;

export const programDocuments = [
  {
    label: "CEF audio-visual presentation",
    href: "https://drive.google.com/file/d/1caL8tD0SKhJO7M8uklcqYpkTGXXICxBm/view",
  },
  {
    label: "Programs matrix",
    href: "https://docs.google.com/document/d/1RQy3mIuuKJT2-_65eWdfZYWmOoWzqezCGwox0359wpw/edit",
  },
  {
    label: "CEF brochure",
    href: "https://drive.google.com/file/d/1n9ckyDhjzPfrAR36xvn7aPi1cmhE1_3d/view",
  },
  {
    label: "CELI flyer",
    href: "/images/flyer-celi.jpg",
  },
  {
    label: "CELI–CEPAGCO programs",
    href: "/documents/celi-cepagco-programs.pdf",
  },
] as const;

export const founderLinks = [
  {
    label: "SPG projects",
    href: "https://docs.google.com/presentation/d/1p20D-mtp4LeC_zGdR6O-e1PfDaj9FtL1/edit",
  },
] as const;

export const spgBooks = [
  {
    title: "An A–Z Guide for a Greenchef",
    author: "Annie Pascual-Guerrero",
    image: "/images/book-greenchef.jpg",
    width: 1264,
    height: 2000,
    href: "/books/greenchef",
  },
  {
    title: "An A–Z Guide for a Green Pinoy",
    author: "Annie Pascual-Guerrero",
    image: "/images/book-green-pinoy.jpg",
    width: 1280,
    height: 2000,
  },
  {
    title: "Sustainability Manual",
    author: "Annie Pascual-Guerrero",
    image: "/images/book-sustainability.jpg",
    width: 1490,
    height: 2000,
  },
] as const;

export const candonDocuments = [
  {
    label: "Resolution expressing profound gratitude",
    href: "https://drive.google.com/file/d/1mA43WVXtA-O9B-cMLttPz_0QhZiDrv8_/view",
  },
  {
    label: "SPG as a daughter of Candon City",
    href: "https://drive.google.com/file/d/10q7A9F1Ln6pMwXm2_rqrrcALH5te2G7G/view",
  },
] as const;

export const supportOffers = [
  {
    title: "A–Z Guide for a Greenchef",
    body: "An e-book. Every purchase helps support culinary education and scholarships.",
    href: "/books/greenchef",
    prices: [
      "₱599 for the e-book",
      "₱999 for the e-book and support for a scholar",
      "₱2,999 for the e-book and Green Chefmanship training for 20 people",
    ],
  },
  {
    title: "Annie’s Kitchen products",
    body: "A purchase of Annie’s Kitchen products also supports the scholarships.",
    links: [
      {
        label: "Product list",
        href: "https://drive.google.com/file/d/1bm-ySJm4T5nD38pQrvj2RWECT6sA9gxM/view",
      },
      {
        label: "More products",
        href: "https://drive.google.com/file/d/11GNdmmlpoycIvqxmo4depC_7bFE_MHS3/view",
      },
    ],
  },
] as const;

export const graduateRows = [
  { year: "2013, May", katipunan: "Batch 1", candon: "", rotary: "", scholars: "27" },
  { year: "2013, August", katipunan: "Batch 2", candon: "", rotary: "", scholars: "24" },
  { year: "2013", katipunan: "Batch 3", candon: "", rotary: "", scholars: "23" },
  { year: "2013, November", katipunan: "", candon: "Batch 1", rotary: "", scholars: "50" },
  { year: "2014, April", katipunan: "Batch 4", candon: "", rotary: "", scholars: "50" },
  { year: "2014, July", katipunan: "Batch 5", candon: "", rotary: "", scholars: "50" },
  { year: "2014, October", katipunan: "Batch 6", candon: "", rotary: "", scholars: "50" },
  { year: "2014", katipunan: "Batch 7", candon: "", rotary: "", scholars: "50" },
  { year: "2015, January", katipunan: "Batch 8", candon: "", rotary: "", scholars: "50" },
  { year: "2015, April", katipunan: "Batch 9", candon: "", rotary: "", scholars: "50" },
  { year: "2015, August", katipunan: "—", candon: "Batch 2", rotary: "", scholars: "50" },
  { year: "2017", katipunan: "Batch 10", candon: "", rotary: "", scholars: "27" },
  { year: "2018", katipunan: "", candon: "", rotary: "Batches 1–4", scholars: "91" },
  { year: "2019", katipunan: "Batch 11", candon: "", rotary: "", scholars: "27" },
  { year: "2019", katipunan: "Batch 12", candon: "", rotary: "", scholars: "25" },
  { year: "2019", katipunan: "", candon: "", rotary: "Batch 5", scholars: "20" },
  { year: "2022", katipunan: "", candon: "", rotary: "Batch 6", scholars: "18" },
  { year: "2023", katipunan: "", candon: "Batch 3", rotary: "", scholars: "50" },
  { year: "2024", katipunan: "", candon: "Batch 4", rotary: "", scholars: "50" },
  { year: "2025", katipunan: "", candon: "Batch 5", rotary: "", scholars: "50" },
  { year: "2026", katipunan: "", candon: "", rotary: "Batch 7", scholars: "25" },
] as const;

export const candonRows = [
  { year: "2013", batch: "Batch 1", scholars: "50" },
  { year: "2015", batch: "Batch 3", scholars: "50" },
  { year: "2023", batch: "Batch 4", scholars: "50" },
  { year: "2024", batch: "Batch 5", scholars: "50" },
  { year: "2025", batch: "Batch 6", scholars: "50" },
] as const;

export const award = {
  title: "2014 Sustainable Business Awards",
  body: "Cravings Group. Best Practice in Leadership for Corporate Social Responsibility.",
  href: "https://drive.google.com/file/d/1Ckq_0DNCsJ8lr7AiwHsqwNsD7nN8IpMa/view",
} as const;

export const antoninAward = {
  title: "Antonin Careme Society, 2015",
  body: "Susana “Annie” Pascual-Guerrero became the first Asian awardee of the Antonin Careme Society.",
  href: "/documents/antonin-careme.pdf",
  linkLabel: "Read the write-up",
  image: "/images/award-antonin.jpg",
  imageAlt: "Susana Annie Pascual-Guerrero speaking as the first Asian Antonin Careme honoree",
} as const;

export const pressClipping = {
  outlet: "The Standard",
  date: "September 6, 2015",
  title: "The Wonders of Bokashi",
  image: "/images/press-bokashi.jpg",
  href: "/documents/2015-press-releases.pdf",
} as const;

export const pressReleases = [
  { outlet: "Daily Tribune", date: "August 4, 2013", title: "CEF sees bright future ahead for first batch of graduates" },
  { outlet: "Manila Bulletin", date: "August 15, 2013", title: "Scholars beat the odds with passion and knowledge" },
  { outlet: "Philippine Daily Inquirer", date: "August 13, 2013", title: "Cooking for Life grads ready to face real life" },
  { outlet: "Hospitality News Philippines", date: "January 25, 2015", title: "Kitchen Scholars" },
  { outlet: "Philippine Star", date: "May 18, 2015", title: "CEF scholars share stories of hope, positive transformation" },
  { outlet: "Manila Bulletin", date: "May 17, 2015", title: "Culinary scholars share stories of hope, positive transformation" },
  { outlet: "Business Mirror", date: "November 2017", title: "Rotary Club extends support for scholarship program" },
  { outlet: "Philippine Daily Inquirer", date: "November 17, 2017", title: "Rotary Club’s D3780 supports culinary scholarship" },
  { outlet: "Business Mirror", date: "March 12, 2018", title: "3 groups seal partnership to support 200 scholars" },
  { outlet: "Manila Times", date: "March 12, 2018", title: "Culinary foundation, “Cooking for Life Program: meant to motivate scholars.”" },
] as const;
