import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProjectsSlider } from "@/components/ProjectsSlider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatusTag } from "@/components/StatusTag";
import { FAQ, SERVICES, STEPS } from "@/lib/content";
import { INSTAGRAM_URL, SHOW_REVIEW_NOTES, WHATSAPP_URL } from "@/lib/site";

const Note = ({ children }: { children: React.ReactNode }) =>
  SHOW_REVIEW_NOTES ? <span className="review-note">{children}</span> : null;

const SERVICE_PHOTOS = [
  "/assets/photos/casa-negra-render.png",
  "/assets/photos/margarita.png",
  "/assets/photos/estructura-obra.png",
];
const SERVICE_TAGS = ["Proyecto", "Planificación", "Obra"];

const PILLARS = [
  {
    title: "Conocemos al máximo a quienes van a habitar",
    text: "Antes de proyectar nos interesa saber de tu día a día: tu familia, tus rutinas y el uso que le vas a dar a cada espacio.",
    photo: "/assets/photos/cocina-blanca.png",
    alt: "Cocina blanca con isla de mármol y banquetas de madera",
  },
  {
    title: "Cada casa parte de cero",
    text: "Preferimos no partir de ejemplos de otras casas. Proyectamos desde tu vida y la manera en que querés habitar cada ambiente.",
    photo: "/assets/photos/casa-lavandas.png",
    alt: "Vivienda de dos plantas con piedra, madera y jardín de lavandas",
  },
  {
    title: "Materiales y detalles con intención",
    text: "La elección de materiales y las terminaciones forman parte del proyecto desde el inicio, no se resuelven al final.",
    photo: "/assets/photos/fachada-gaviones.png",
    alt: "Fachada con muros de gaviones de piedra, carpinterías de madera y aberturas vidriadas",
  },
  {
    title: "Nos gustan los desafíos",
    text: "Estructuras de ingeniería complejas, nuevas tecnologías y soluciones técnicas trabajadas junto a ingenieros.",
    photo: "/assets/photos/voladizo-hormigon.png",
    alt: "Losa de hormigón en voladizo con baranda de vidrio y revestimiento de madera",
  },
  {
    title: "No le tememos a la obra",
    text: "En la construcción los imprevistos suceden. Acompañamos la obra y buscamos una solución para cada problema que se presente.",
    photo: "/assets/photos/estructura-obra.png",
    alt: "Estructura de hormigón en construcción",
  },
];

function Photo({ src, alt, sizes, priority }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return (
    <div className="ph">
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* 1 · Hero (ocupa el 100% del alto visible) */}
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero__logo" src="/assets/logo/baca-logo-claro.svg" alt="" aria-hidden="true" />
          <div className="wrap hero__grid">
            <div className="hero__text">
              <h1 id="hero-title" className="display hero__title">
                Arquitectura para vivirla <span>a tu manera.</span>
              </h1>
              <p className="lede">
                Cada proyecto comienza por entender cómo vivís. Diseñamos espacios que responden a tus necesidades, tu entorno y los detalles que hacen única a tu casa.
              </p>
              <div className="hero__actions">
                <Button variant="primary" size="lg" href={WHATSAPP_URL} target="_blank">
                  Contanos tu proyecto
                </Button>
                <Button variant="secondary" size="lg" href="#proyectos">Explorar proyectos</Button>
              </div>
            </div>
            <div className="hero__photos">
              <figure>
                <Photo src="/assets/photos/casa-pileta-noche.png" alt="Vivienda de dos plantas con galería iluminada y pileta al atardecer" sizes="(max-width: 900px) 45vw, 380px" priority />
                <figcaption>
                  <span>Vivienda con pileta</span>
                  <StatusTag status="obra" />
                </figcaption>
              </figure>
              <figure>
                <Photo src="/assets/photos/voladizo-hormigon.png" alt="Losa de hormigón en voladizo con baranda de vidrio y revestimiento de madera" sizes="(max-width: 900px) 45vw, 380px" />
                <figcaption>
                  <span>Vivienda de piedra y hormigón</span>
                  <StatusTag status="obra" />
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 2 · Proyectos (slider) */}
        <section id="proyectos" className="projects" aria-labelledby="proyectos-title">
          <div className="wrap projects__layout">
            <div className="projects__intro">
              <h2 id="proyectos-title" className="title">Proyectos</h2>
              <p>
                Viviendas contemporáneas y de lenguaje clásico, espacios comerciales y obras en curso. Cada imagen indica si es una obra terminada, una obra en curso, un proyecto o un render.
              </p>
              <Note>Pendiente de validación: nombres y estados según el feed; fotos provisionales en baja resolución.</Note>
            </div>
            <ProjectsSlider />
          </div>
        </section>

        {/* 3 · Estudio */}
        <section id="estudio" className="studio" aria-labelledby="estudio-title">
          <div className="wrap studio__inner">
            <div className="studio__text">
              <h2 id="estudio-title" className="title">Cada proyecto, una forma única de habitar.</h2>
              <p className="lede">
                Antes de proyectar nos ocupamos de saber de tu día a día: cómo está compuesta tu familia, tus rutinas, tus gustos, tus hobbies y hasta tus mascotas. Con eso diseñamos una casa que responde a tu manera de vivir, con el mismo cuidado puesto en la estructura, los materiales y la obra.
              </p>
              <div className="studio__sign">
                <strong>Arq. Facundo Bató</strong>
                <span>BACA Arquitectura &amp; Diseño · Buenos Aires, Argentina</span>
              </div>
            </div>
            {/* Las fotos "se apoyan" sobre el plano: composición diagonal con marcos de dibujo técnico */}
            <div className="studio__stage">
              <div className="studio__plan" aria-hidden="true" />
              <figure className="studio__shot studio__shot--b">
                <Photo src="/assets/photos/cocina-blanca.png" alt="Cocina blanca con isla de mármol y banquetas de madera" sizes="(max-width: 900px) 40vw, 300px" />
              </figure>
              <figure className="studio__shot studio__shot--a">
                <Photo src="/assets/photos/escalera-helicoidal.png" alt="Escalera helicoidal blanca con peldaños de madera y baranda de hierro" sizes="(max-width: 900px) 40vw, 300px" />
              </figure>
            </div>
          </div>
        </section>

        {/* 4 · Servicios */}
        <section id="servicios" className="services" aria-labelledby="servicios-title">
          <div className="wrap">
            <div className="services__head">
              <h2 id="servicios-title" className="title">Del primer concepto <span>a la obra.</span></h2>
              <p>Tres frentes de trabajo que se pueden tomar juntos o por separado, según en qué punto estés.</p>
            </div>
            <div className="services__cols">
              {SERVICES.map((s, i) => (
                <article key={s.n} className={`service service--${i + 1}`}>
                  <div className="service__photo">
                    <Image src={SERVICE_PHOTOS[i]} alt="" fill sizes="(max-width: 900px) 90vw, 380px" />
                  </div>
                  <div className="service__body">
                    <span className="service__tag">{SERVICE_TAGS[i]}</span>
                    <h3>{s.title}</h3>
                    <p>{s.lede}</p>
                    {s.note && <Note>{s.note}</Note>}
                    <ul>
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · Proceso */}
        <section id="proceso" className="process" aria-labelledby="proceso-title">
          <div className="wrap">
            <div className="process__head">
              <h2 id="proceso-title" className="title">Un proceso atento <span>a cada detalle.</span></h2>
              <p>Así se ordena, en general, un proyecto con nosotros. Cada casa tiene sus tiempos y sus particularidades, y el recorrido se ajusta a cada una.</p>
            </div>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.n} className="step">
                  <span className="step__n" aria-hidden="true">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6 · Diferenciales (columnas con foto, sin desplegables) */}
        <section id="diferenciales" className="diff" aria-labelledby="dif-title">
          <div className="wrap">
            <h2 id="dif-title" className="title diff__title">No solo diseñamos <span>casas.</span></h2>
            <ul className="pillars">
              {PILLARS.map((p) => (
                <li key={p.title} className="pillar">
                  <div className="pillar__photo">
                    <Image src={p.photo} alt={p.alt} fill sizes="(max-width: 700px) 104px, (max-width: 1100px) 30vw, 240px" />
                  </div>
                  <div className="pillar__body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32 }}>
              <Note>Pendiente: reseñas de Google solo si están verificadas y autorizadas.</Note>
            </div>
          </div>
        </section>

        {/* 7 · Preguntas (desplegables: clic para ver la respuesta) */}
        <section id="preguntas" className="faq" aria-labelledby="faq-title">
          <div className="wrap faq__inner">
            <div className="faq__intro">
              <h2 id="faq-title" className="title">Antes de <span>empezar.</span></h2>
              <p>¿Tenés otra duda? Escribinos y lo conversamos.</p>
              <div><Button variant="secondary" href={WHATSAPP_URL} target="_blank" icon="message-circle" iconPosition="start">Consultar por WhatsApp</Button></div>
            </div>
            <Accordion items={FAQ} />
          </div>
        </section>

        {/* 8 · Contacto */}
        <section id="contacto" className="contact" aria-labelledby="contacto-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="contact__logo" src="/assets/logo/baca-logo-oscuro.svg" alt="" aria-hidden="true" />
          <div className="wrap contact__inner">
            <div className="contact__text">
              <h2 id="contacto-title" className="display contact__title">
                Tu próximo proyecto empieza con una <em>conversación.</em>
              </h2>
              <p className="lede">Contanos qué tenés en mente. Si ya tenés el lote, sumá la ubicación y sus medidas.</p>
            </div>
            <div className="contact__actions">
              <Button variant="blush" size="lg" href={WHATSAPP_URL} target="_blank" icon="message-circle" iconPosition="start">
                Escribinos por WhatsApp
              </Button>
              <Button variant="outline-light" size="lg" href={INSTAGRAM_URL} target="_blank">Ver Instagram</Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
