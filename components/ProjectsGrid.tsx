"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/content";
import { INSTAGRAM_URL } from "@/lib/site";
import { Icon } from "./Icon";
import { Lightbox } from "./Lightbox";
import { ProjectCard } from "./ProjectCard";

const ORDER = ["piedra", "jardin", "clasica", "blackmagic", "aviation", "margarita", "gaia"] as const;

export function ProjectsGrid() {
  const [active, setActive] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="pgrid">
        {ORDER.map((id) => {
          const p = PROJECTS[id];
          return (
            <ProjectCard
              key={id}
              image={p.cover}
              alt={p.alt}
              title={p.title}
              meta={p.meta}
              status={p.status}
              onClick={() => {
                setActive(p);
                setIndex(0);
              }}
            />
          );
        })}
        <a className="pgrid__insta" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <span>Más obras y avances en Instagram</span>
          <span className="pgrid__insta-handle">
            @baca_arquitectura <Icon name="move-right" />
          </span>
        </a>
      </div>

      {active && (
        <Lightbox
          images={active.gallery}
          index={index}
          title={active.title}
          onIndexChange={setIndex}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
