import Image from "next/image";
import { StatusTag, type Status } from "./StatusTag";

export function ProjectCard({
  image,
  alt,
  title,
  meta,
  status,
  onClick,
}: {
  image: string;
  alt: string;
  title: string;
  meta: string;
  status: Status;
  onClick: () => void;
}) {
  return (
    <button type="button" className="pcard" onClick={onClick} aria-haspopup="dialog">
      <div className="pcard__media">
        <Image src={image} alt={alt} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 300px" />
      </div>
      <div className="pcard__body">
        <span className="pcard__title">{title}</span>
        <span className="pcard__meta">
          {meta} <span className="pcard__sep" aria-hidden="true">·</span> <StatusTag status={status} />
        </span>
      </div>
    </button>
  );
}
