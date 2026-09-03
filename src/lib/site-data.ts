import marketResidential from "@/assets/market-residential.jpg.asset.json";
import marketWater from "@/assets/market-water.jpg.asset.json";
import marketTransport from "@/assets/market-transport.jpg.asset.json";
import marketCommercial from "@/assets/market-commercial.jpg.asset.json";
import marketEnergy from "@/assets/market-energy.jpg.asset.json";
import marketMining from "@/assets/market-mining.jpg.asset.json";
import marketPublic from "@/assets/market-public.jpg.asset.json";
import projectMbare from "@/assets/project-mbare-musika.jpg.asset.json";
import projectPomona from "@/assets/project-pomona-flats.jpg.asset.json";
import projectDacomb from "@/assets/project-dacomb-cluster.jpg.asset.json";
import projectZiminya from "@/assets/project-ziminya-dam.jpg.asset.json";

export const stats = [
  {
    value: "25+",
    label: "Years of experience",
    copy: "A quarter-century of civil and structural engineering across Zimbabwe and the region.",
  },
  {
    value: "120+",
    label: "Projects delivered",
    copy: "From residential developments to bulk water, roads and industrial civils, concept to completion.",
  },
  {
    value: "4",
    label: "Core disciplines",
    copy: "Transport, structures, water and project delivery, one integrated team, one accountable engineer.",
  },
];

export const differentiators = [
  {
    title: "25+ years, 120+ projects",
    copy: "A track record built on delivery, across residential, transport, water and energy infrastructure.",
  },
  {
    title: "One accountable engineer",
    copy: "A single registered engineer holds the design thread from first concept to final certificate, so nothing falls between consultants.",
  },
  {
    title: "ISO 9001 certified, ZACE registered",
    copy: "Independently certified quality management, and a registered member firm of Zimbabwe Association of Consulting Engineers.",
  },
  {
    title: "Progress you can see",
    copy: "Custom project monitoring software gives you, your board and your funder the same live view of the site, at the same moment.",
  },
];

export const disciplines = [
  {
    id: "transportation",
    name: "Transportation",
    image: "/images/project-sherwood-road.webp",
    lead: "We seek to provide efficient, reliable and sustainable transportation systems to enhance economic growth.",
    copy: "From rural haul roads to urban carriageways, we plan, design and supervise transport infrastructure that stands up to traffic loading, climate and the realities of African construction.",
    points: [
      "Geometric road design",
      "Pavement design & materials",
      "Bridges, culverts & stormwater drainage",
      "Traffic impact assessments",
    ],
  },
  {
    id: "structural",
    name: "Structural Engineering",
    image: "/images/services-structural.webp",
    lead: "Concrete, steel and masonry resolved with precision, detailed so the structure rises exactly as drawn.",
    copy: "We design frames, foundations and retaining works for buildings and infrastructure, coordinating with architects and contractors so the detail on the drawing is the detail that gets built.",
    points: [
      "Reinforced concrete & steel frames",
      "Foundations & retaining structures",
      "Reinforcement detailing & schedules",
      "Structural appraisals & remedial design",
    ],
  },
  {
    id: "water",
    name: "Water & Sanitation",
    image: "/images/water-sanitation.webp",
    lead: "Water where it is needed, when it is needed, with room for the community you are becoming.",
    copy: "Hydrology, hydraulic design and civil works for supply, storage, reticulation and treatment, supported through construction to commissioning.",
    points: [
      "Bulk water & reticulation design",
      "Hydrology & hydraulic modelling",
      "Sewer reticulation & treatment works",
      "Dams, irrigation & water security",
    ],
  },
  {
    id: "delivery",
    name: "Project Management",
    image: "/images/about-site-engineers.webp",
    lead: "One programme, one accountable engineer, and a live view of site for everyone funding it.",
    copy: "We hold the thread between design intent and the completed asset, managing contractors, budgets and quality through to the final certificate.",
    points: [
      "Contract administration",
      "Construction supervision",
      "Programme & cost monitoring",
      "Digital site monitoring & reporting",
    ],
  },
];

export const markets = [
  {
    name: "Residential",
    image: marketResidential.url,
    copy: "Structural design and civil services for residential estates and cluster housing, from reinforced concrete frames to the roads, stormwater and reticulation that make a stand ready to build on.",
  },
  {
    name: "Water & Sanitation",
    image: marketWater.url,
    copy: "Civil works, hydrology and hydraulic design for water security and irrigation infrastructure, with construction supervision support through to commissioning.",
  },
  {
    name: "Transportation",
    image: marketTransport.url,
    copy: "Pavement investigation, rehabilitation design and drainage for urban roads that carry real traffic and real rainfall.",
  },
  {
    name: "Commercial",
    image: marketCommercial.url,
    copy: "Structural and civil design for forecourts, retail and event buildings, where heavy-duty engineering and everyday use have to work side by side.",
  },
  {
    name: "Energy",
    image: marketEnergy.url,
    copy: "Civil and structural works for power generation infrastructure, delivered against compressed programmes where the civils sit on the critical path.",
  },
  {
    name: "Mining",
    image: marketMining.url,
    copy: "Access roads and civil infrastructure for mining operations, engineered for heavy haulage and remote terrain so production is never stranded by the season.",
  },
  {
    name: "Public & Institutional",
    image: marketPublic.url,
    copy: "Structural design and project management for government, municipal and institutional clients, from emergency rebuilds to facilities that have to perform under public scrutiny.",
  },
];


export const clients = [
  { name: "WestProp Holdings", logo: "/images/clients/westprop.png", href: "https://www.westprop.com/" },
  { name: "Vesta Properties", logo: "/images/clients/vesta.png", href: "https://www.vestaproperties.co.zw/" },
  { name: "TotalEnergies", logo: "/images/clients/totalenergies.png", href: "https://totalenergies.com/" },
  { name: "Sandawana Mine", logo: "/images/clients/sandawana.png", href: "https://mutapagold.com/" },
  { name: "City of Harare", logo: "/images/clients/city-of-harare.png", href: "https://www.hararecity.co.zw/" },
  { name: "ZINWA", logo: "/images/clients/zinwa.png", href: "https://www.zinwa.co.zw/" },
];

export const services = [
  {
    name: "Consulting Civil Engineering",
    copy: "Clarity from the first sketch to the final certificate. One accountable engineer, one signature, and a design you can commit to with confidence.",
  },
  {
    name: "Structural Engineering Solutions",
    copy: "Concrete, steel and masonry resolved with precision, and detailed with enough care that the structure rises exactly as drawn.",
  },
  {
    name: "Civil Infrastructure Development",
    copy: "Roads, bridges and stormwater shaped for African conditions, designed to perform through every season, built from materials close at hand.",
  },
  {
    name: "Water & Sanitation Engineering",
    copy: "Water where it is needed, when it is needed. Supply, storage, reticulation and treatment designed with room for the community you are becoming.",
  },
  {
    name: "Mining & Industrial Infrastructure",
    copy: "Reliable access, all year round. Haul roads, platforms and plant civils engineered to keep production moving straight through the wet season.",
  },
  {
    name: "Energy & Power Infrastructure",
    copy: "Generation brought online sooner. Plinths, hardstands and switchyard civils sequenced so installation can begin while later foundations are still being cast.",
  },
];

export const featuredProject = {
  name: "Mbare Musika Temporary Traders Market Redevelopment",
  meta: "Featured · Public & Institutional · 2025",
  image: "/images/project-northgate-estate.webp",
  copy: "Emergency rebuild of one of Zimbabwe's largest fresh-produce and informal trading hubs after the fire that destroyed it, delivered in roughly three months ahead of the festive season.",
};

export const projects = [
  {
    name: "WestProp Pomona City Flats",
    sector: "Residential",
    meta: "WestProp Holdings · 2025",
    image: "/images/project-pomona-flats.webp",
    copy: "Structural and civil design for 352 apartments across 22 blocks, Harare North's first high-rise residential enclave within the wider Pomona City development.",
  },
  {
    name: "Dacomb Drive Cluster Housing Development",
    sector: "Residential",
    meta: "Vesta Properties · 2024",
    image: "/images/project-dacomb-cluster.webp",
    copy: "Civil and structural engineering for a 36-unit luxury cluster housing scheme across 4.7 hectares of constrained suburban infill.",
  },
  {
    name: "Ziminya Dam Water Security & Irrigation Project",
    sector: "Water & Sanitation",
    meta: "Zimbabwe National Water Authority (ZINWA) · 2023",
    image: "/images/project-ziminya-dam.webp",
    copy: "Engineering support on a strategic national dam addressing chronic water shortages in drought-prone Nkayi District, with roughly 98 million cubic metres of storage.",
  },
];

export const insights = [
  {
    tag: "Water",
    title: "Sizing stormwater for a rainfall pattern that is no longer typical",
    date: "22 July 2026",
    image: "/images/water-sanitation.webp",
  },
  {
    tag: "Structures",
    title: "The certainty a ground investigation buys",
    date: "30 June 2026",
    image: "/images/project-zvirenje-road.webp",
  },
  {
    tag: "Delivery",
    title: "Phasing services so capital follows demand",
    date: "11 June 2026",
    image: "/images/project-northgate-estate.webp",
  },
  {
    tag: "Digital",
    title: "Drone monitoring changes the conversation, not just the reporting",
    date: "19 May 2026",
    image: "/images/harare-skyline.webp",
  },
  {
    tag: "Transport",
    title: "Designing haul roads for the wet season, not the dry one",
    date: "28 April 2026",
    image: "/images/project-sherwood-road.webp",
  },
  {
    tag: "Sustainability",
    title: "The operating cost of a building is decided in the first fortnight",
    date: "2 April 2026",
    image: "/images/services-structural.webp",
  },
];

export const appointments = [
  {
    name: "Consultancy engineering",
    copy: "Engineering consultancy and consulting civil engineer appointments, design authority, submissions and site inspection from one accountable practice in Harare.",
  },
  {
    name: "Civil & structural engineering",
    copy: "Civil structure engineering for buildings and infrastructure, concrete, steel, roads, stormwater and urban servicing from integrated consultants.",
  },
  {
    name: "Construction advisory",
    copy: "Engineering advisory on claims, delay, variations and contract disputes, independent technical advice for developers, funders and contractors.",
  },
  {
    name: "Advisory drafting & CAD detailing",
    copy: "CAD drafting, advisory detailing, reinforcement schedules and revision-controlled civil and structural drawings for Zimbabwe projects.",
  },
];
