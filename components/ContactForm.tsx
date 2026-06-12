"use client";
import { useState } from "react";
import { site } from "@/lib/site";

// Clé d'accès Web3Forms (publique par conception — associée à l'adresse de réception)
const WEB3FORMS_KEY = "4692d8ed-26f6-45fa-b0f3-10ea9745fef3";

const field =
  "w-full rounded-[10px] border border-white/15 bg-navy-800 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-brand-bright focus:outline-none";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // piège anti-robot : un humain ne remplit pas ce champ
    data.append("access_key", WEB3FORMS_KEY);
    data.append("from_name", "Site bseconnect.fr");
    data.append(
      "subject",
      "Demande de devis — " + (String(data.get("societe") || "") || String(data.get("nom") || "site web"))
    );
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="nom" required placeholder="Nom *" className={field} aria-label="Nom" />
        <input name="societe" placeholder="Société" className={field} aria-label="Société" />
        <input name="email" type="email" required placeholder="Email *" className={field} aria-label="Email" />
        <input name="tel" placeholder="Téléphone" className={field} aria-label="Téléphone" />
      </div>
      <select name="besoin" className={field} aria-label="Type de besoin" defaultValue="">
        <option value="" disabled>Type de besoin…</option>
        <option>Contrôle d&apos;accès</option>
        <option>Vidéosurveillance</option>
        <option>Intrusion &amp; interphonie</option>
        <option>Courants faibles &amp; câblage</option>
        <option>Autre / projet global</option>
      </select>
      <select name="relation" className={field} aria-label="Relation" defaultValue="">
        <option value="" disabled>Vous êtes…</option>
        <option>Client final (en direct)</option>
        <option>Donneur d&apos;ordre / intégrateur (sous-traitance)</option>
      </select>
      <textarea name="message" required rows={5} placeholder="Décrivez votre besoin, votre site, vos contraintes… *" className={field} aria-label="Message" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-[10px] bg-brand-cta px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-ctaHover disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
      <div aria-live="polite">
        {status === "ok" && (
          <p className="text-sm text-brand-green">
            ✓ Votre demande a bien été envoyée. Nous revenons vers vous sous 24&nbsp;h ouvrées.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-ink-muted">
            L&apos;envoi a échoué. Vous pouvez nous écrire directement à{" "}
            <a href={"mailto:" + site.contact.email} className="text-brand-bright underline">{site.contact.email}</a>.
          </p>
        )}
      </div>
      <p className="text-xs text-ink-faint">Vos informations restent confidentielles et ne servent qu&apos;à répondre à votre demande.</p>
    </form>
  );
}
