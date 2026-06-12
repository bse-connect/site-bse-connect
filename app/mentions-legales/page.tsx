import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Mentions légales",
  "Mentions légales et politique de confidentialité de BSE Connect.",
  "/mentions-legales"
);

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 py-7">
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      <div className="mt-3 space-y-1.5 text-sm text-ink-muted">{children}</div>
    </div>
  );
}

export default function Mentions() {
  const l = site.legal;
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <section className="py-12">
        <Container className="max-w-3xl">
          <Block title="Éditeur du site">
            <p>BSE Connect — {l.forme}, au capital de {l.capital}.</p>
            <p>Siège social : {site.contact.street}, {site.contact.postalCode} {site.contact.city}.</p>
            <p>SIREN : {l.siren} · SIRET (siège) : {l.siret}.</p>
            <p>{l.rcs} (immatriculée le {l.immat}).</p>
            <p>Code APE/NAF : {l.ape}.</p>
            <p>N° TVA intracommunautaire : {l.tva}.</p>
            <p>Directeur de la publication : {l.director}.</p>
            <p>Email : {site.contact.email}.</p>
          </Block>
          <Block title="Assurance">
            <p>Responsabilité civile décennale souscrite auprès de {l.insurer} — contrat « {l.insuranceContract} ». Activités garanties : terrassement, électricité-télécommunications, réseaux souterrains, télécommunication / vidéocommunication. Couverture : France métropolitaine et DROM.</p>
          </Block>
          <Block title="Hébergement">
            <p>Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).</p>
          </Block>
          <Block title="Crédits visuels">
            <p>Les photographies et visuels présents sur ce site sont des images d&apos;illustration.</p>
          </Block>
          <Block title="Données personnelles (RGPD)">
            <p>Les informations transmises via le formulaire de contact servent uniquement à répondre aux demandes ; elles ne sont ni cédées ni revendues. Conformément au RGPD, toute personne dispose d&apos;un droit d&apos;accès, de rectification et de suppression de ses données en écrivant à {site.contact.email}.</p>
          </Block>
        </Container>
      </section>
    </>
  );
}
