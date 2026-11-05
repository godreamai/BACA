"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Icon } from "./Icon";

const ITEMS = [
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

export function Differentials() {
  const [open, setOpen] = useState(-1); // item abierto (-1 = todos cerrados al cargar)
  const [shown, setShown] = useState(0); // foto visible: la del último item abierto
  const uid = useId();

  return (
    <div className="dif">
      <ul className="dif__list">
        {ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <li key={it.title} className={"dif__item" + (isOpen ? " dif__item--open" : "")}>
              <button
                type="button"
                className="dif__trigger"
                aria-expanded={isOpen}
                aria-controls={`${uid}-${i}`}
                onClick={() => {
                  setOpen(isOpen ? -1 : i);
                  if (!isOpen) setShown(i);
                }}
              >
                <span>{it.title}</span>
                <Icon name="plus" size={20} />
              </button>
              <div className="dif__panel" id={`${uid}-${i}`}>
                <div>
                  <p>{it.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="dif__aside">
        <div className="dif__photo" aria-live="polite">
          {ITEMS.map((it, i) => (
            <Image
              key={it.photo}
              src={it.photo}
              alt={shown === i ? it.alt : ""}
              aria-hidden={shown !== i}
              fill
              sizes="(max-width: 900px) 80vw, 380px"
              className={shown === i ? "is-on" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
