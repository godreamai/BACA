import type { Status } from "@/components/StatusTag";

const P = "/assets/photos/";

export type Photo = { src: string; alt: string; caption: string };

export type Project = {
  id: string;
  title: string;
  meta: string;
  status: Status;
  index: string;
  ratio: string;
  cover: string;
  alt: string;
  gallery: Photo[];
};

const gallery = (title: string, files: [string, string][]): Photo[] =>
  files.map(([file, caption]) => ({
    src: `${P}${file}.png`,
    alt: caption,
    caption: `${title} — ${caption}`,
  }));

export const PROJECTS: Record<string, Project> = {
  piedra: {
    id: "piedra",
    title: "Vivienda de piedra y hormigón",
    meta: "Vivienda unifamiliar",
    status: "obra",
    index: "01",
    ratio: "4 / 5",
    cover: `${P}muro-piedra-atardecer.png`,
    alt: "Vivienda con muro curvo de piedra y volumen de hormigón",
    gallery: gallery("Vivienda de piedra y hormigón", [
      ["muro-piedra-atardecer", "Muro curvo de piedra"],
      ["voladizo-hormigon", "Voladizo de hormigón"],
      ["fachada-gaviones", "Fachada con gaviones"],
    ]),
  },
  blackmagic: {
    id: "blackmagic",
    title: "Black Magic",
    meta: "Vivienda unifamiliar",
    status: "render",
    index: "02",
    ratio: "4 / 5",
    cover: `${P}casa-negra-render.png`,
    alt: "Render de vivienda de una planta con fachada oscura de listones y pileta",
    gallery: gallery("Black Magic · Render", [["casa-negra-render", "Vista desde el jardín"]]),
  },
  clasica: {
    id: "clasica",
    title: "Residencia de lenguaje clásico",
    meta: "Vivienda unifamiliar",
    status: "obra",
    index: "03",
    ratio: "3 / 4",
    cover: `${P}residencia-clasica.png`,
    alt: "Residencia de lenguaje clásico con techo de pizarra y acceso empedrado",
    gallery: gallery("Residencia de lenguaje clásico", [["residencia-clasica", "Fachada principal"]]),
  },
  jardin: {
    id: "jardin",
    title: "Vivienda con jardín",
    meta: "Vivienda unifamiliar",
    status: "obra",
    index: "04",
    ratio: "1 / 1",
    cover: `${P}casa-lavandas.png`,
    alt: "Vivienda de dos plantas con piedra, madera y jardín de lavandas",
    gallery: gallery("Vivienda con jardín", [
      ["casa-lavandas", "Fachada al jardín"],
      ["cocina-blanca", "Cocina"],
      ["escalera-helicoidal", "Escalera helicoidal"],
    ]),
  },
  aviation: {
    id: "aviation",
    title: "Aviation",
    meta: "Vivienda unifamiliar",
    status: "en-obra",
    index: "05",
    ratio: "4 / 5",
    cover: `${P}aviation.png`,
    alt: "Estructura de hormigón visto con aleros en voladizo",
    gallery: gallery("Aviation · En obra", [
      ["aviation", "Estructura de hormigón"],
      ["estructura-obra", "Avance de obra"],
    ]),
  },
  margarita: {
    id: "margarita",
    title: "Margarita",
    meta: "Vivienda unifamiliar",
    status: "proyecto",
    index: "06",
    ratio: "3 / 4",
    cover: `${P}margarita.png`,
    alt: "Volumen revestido en piedra rodeado de vegetación",
    gallery: gallery("Margarita · Proyecto", [["margarita", "Acceso"]]),
  },
  gaia: {
    id: "gaia",
    title: "GAIA",
    meta: "Espacio comercial",
    status: "obra",
    index: "07",
    ratio: "4 / 5",
    cover: `${P}local-comercial.png`,
    alt: "Frente comercial vidriado con cartel GAIA",
    gallery: gallery("GAIA", [["local-comercial", "Frente comercial"]]),
  },
};

export const STEPS = [
  { n: "01", title: "Escuchamos y conocemos las necesidades", text: "Conocemos a tu familia, tus rutinas y la forma en que querés habitar cada ambiente." },
  { n: "02", title: "Estudiamos el terreno y el contexto", text: "Lote, orientación, entorno y normativa local." },
  { n: "03", title: "Diseñamos a medida", text: "Un proyecto propio, con materiales y detalles pensados para vos." },
  { n: "04", title: "Planificamos las decisiones", text: "Priorizamos gastos y ordenamos cada etapa antes de empezar." },
  { n: "05", title: "Acompañamos el desarrollo de la obra", text: "Supervisión, replanteo, documentación y finalización." },
];

export const SERVICES: { n: string; title: string; lede: string; note?: string; items: string[] }[] = [
  {
    n: "01",
    title: "Diseño y proyecto arquitectónico",
    lede: "Espacios desarrollados a partir de tu manera de vivir.",
    items: [
      "Relevamiento de necesidades, costumbres y rutinas",
      "Conceptualización y diseño a medida",
      "Diseño según entorno, orientación y lote",
      "Selección de materiales y terminaciones",
    ],
  },
  {
    n: "02",
    title: "Asesoramiento y planificación",
    lede: "Decisiones de proyecto fundamentadas en el lote, las necesidades y los recursos disponibles.",
    items: [
      "Orientación para elegir el terreno",
      "Priorización de gastos y presupuesto de obra",
      "Estudio de factibilidad municipal",
      "Licencias y permisos, según la jurisdicción",
    ],
  },
  {
    n: "03",
    title: "Acompañamiento y seguimiento de obra",
    lede: "Seguimiento del proceso constructivo y atención a los desafíos de cada etapa.",
    note: "Pendiente de validación: alcance de la construcción.",
    items: [
      "Coordinación con profesionales e ingenieros",
      "Supervisión y dirección de la ejecución",
      "Replanteo y seguimiento de la documentación",
      "Gestión de imprevistos hasta la finalización",
    ],
  },
];

export const FAQ = [
  { question: "¿Cómo empiezo un proyecto con ustedes?", answer: "Escribinos por WhatsApp y contanos qué tenés en mente. Acordamos un horario para conocernos y entender cómo vivís." },
  { question: "¿Pueden acompañarme desde la elección del lote?", answer: "Sí. Te orientamos para encontrar un terreno con la ubicación, las medidas y la orientación que tu proyecto va a necesitar." },
  { question: "¿Qué necesito para una primera consulta?", answer: "Con contarnos qué tenés en mente alcanza. Si ya tenés el lote, sumá la ubicación y sus medidas." },
  { question: "¿Cuáles son las etapas de un proyecto?", answer: "Escuchamos tus necesidades, estudiamos el terreno y su contexto, diseñamos a medida, planificamos las decisiones y acompañamos el desarrollo de la obra. Cada proyecto tiene su propio recorrido." },
  { question: "¿Se ocupan de los permisos?", answer: "Antes de proyectar estudiamos la factibilidad municipal para que el proyecto se adecue a la normativa de la zona donde está tu lote. Las licencias y permisos dependen de cada jurisdicción." },
  { question: "¿En qué zonas trabajan?", answer: "Somos un estudio de Buenos Aires, Argentina. Escribinos contándonos dónde está tu proyecto y lo conversamos." },
  { question: "¿Cómo coordinamos una reunión?", answer: "Escribinos por WhatsApp y acordamos un horario para conocernos." },
];
