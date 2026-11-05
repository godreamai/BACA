export type Status = "obra" | "en-obra" | "proyecto" | "render";

const LABELS: Record<Status, string> = {
  obra: "Obra terminada",
  "en-obra": "En obra",
  proyecto: "Proyecto",
  render: "Render",
};

export function StatusTag({ status }: { status: Status }) {
  return <span className={`baca-tag baca-tag--${status}`}>{LABELS[status]}</span>;
}
