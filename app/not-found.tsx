import { Button } from "@/components/Button";

export const metadata = { title: "Página no encontrada | BACA Arquitectura & Diseño" };

export default function NotFound() {
  return (
    <main id="main" className="notfound">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo/baca-logo-claro.svg" alt="BACA Arquitectura & Diseño" width={96} height={96} />
      <h1 className="display">Esta página no existe.</h1>
      <p>Puede que el enlace haya cambiado. Volvé al inicio o escribinos y te ayudamos.</p>
      <div className="notfound__actions">
        <Button href="/">Volver al inicio</Button>
        <Button variant="secondary" href="https://wa.link/srzvce" target="_blank">Escribinos por WhatsApp</Button>
      </div>
    </main>
  );
}
