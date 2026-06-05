"use client";
import { useState } from "react";
import { site } from "@/lib/site";

const field =
  "w-full rounded-[10px] border border-white/15 bg-navy-800 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-brand-bright focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) || "");
    const body = [
      "Nom : " + get("nom"),
      "Société : " + get("societe"),
      "Email : " + get("email"),
      "Téléphone : " + get("tel"),
      "Type de besoin : " + get("besoin"),
      "Relation : " + get("relation"),
      "",
      get("message"),
    ].join("\n");
    const subject = "Demande de devis — " + (get("societe") || get("nom") || "site web");
    window.location.href =
      "mailto:" + site.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
      <button type="submit" className="inline-flex items-center gap-2 rounded-[10px] bg-brand-cta px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-ctaHover">
        Envoyer ma demande
      </button>
      {sent && (
        <p className="text-sm text-brand-green">Votre logiciel de messagerie s&apos;ouvre avec votre demande pré-remplie. Sinon, écrivez-nous à {site.contact.email}.</p>
      )}
      <p className="text-xs text-ink-faint">Vos informations restent confidentielles et ne servent qu&apos;à répondre à votre demande.</p>
    </form>
  );
}
