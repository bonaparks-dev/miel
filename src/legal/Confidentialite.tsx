export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-noir mb-8">Politique de confidentialité</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-noir-light leading-relaxed">
        <p className="text-sm text-gris">Dernière mise à jour : février 2026</p>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est :<br />
            <strong>SARL Château de Jeurre</strong><br />
            Château de Jeurre, 91590 Morigny-Champigny, France<br />
            Email : contact@chateau-jeurre.fr
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">2. Données collectées</h2>
          <p>Lors de votre commande, nous collectons les données suivantes :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale de livraison</li>
          </ul>
          <p>
            Les données de paiement (numéro de carte bancaire) sont traitées exclusivement
            par notre prestataire de paiement <strong>Stripe</strong> et ne sont jamais
            stockées sur nos serveurs.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">3. Finalités du traitement</h2>
          <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Traitement et suivi de votre commande</li>
            <li>Livraison des produits</li>
            <li>Gestion de la relation client (SAV, réclamations)</li>
            <li>Respect des obligations légales (facturation, comptabilité)</li>
          </ul>
          <p>
            Vos données ne sont <strong>jamais</strong> utilisées à des fins de prospection
            commerciale, sauf consentement explicite de votre part.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur l'exécution du contrat de vente
            (article 6.1.b du RGPD) et sur nos obligations légales en matière de
            facturation et de comptabilité (article 6.1.c du RGPD).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">5. Destinataires des données</h2>
          <p>Vos données peuvent être transmises aux destinataires suivants :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Stripe</strong> : prestataire de paiement sécurisé</li>
            <li><strong>Transporteur</strong> : pour la livraison de votre commande</li>
            <li><strong>Comptable / expert-comptable</strong> : obligations fiscales</li>
          </ul>
          <p>Aucune donnée n'est transférée hors de l'Union européenne.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">6. Durée de conservation</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Données de commande : 5 ans (obligations comptables)</li>
            <li>Données de contact : 3 ans après la dernière commande</li>
            <li>Cookies : 13 mois maximum</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">7. Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des
            droits suivants :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong>Droit de limitation</strong> : demander la limitation du traitement</li>
          </ul>
          <p>
            Pour exercer vos droits, envoyez un email à <strong>contact@chateau-jeurre.fr</strong> en
            joignant une copie d'une pièce d'identité.
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL :{' '}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honey-dark underline"
            >
              www.cnil.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">8. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies <strong>strictement nécessaires</strong> au
            fonctionnement du panier d'achat et au processus de paiement. Aucun cookie
            publicitaire, analytique ou de traçage n'est déposé.
          </p>
          <p>
            Lors de votre première visite, une bannière vous informe de l'utilisation de
            cookies et vous permet d'accepter ou de refuser leur dépôt. Votre choix est
            conservé pendant 13 mois.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">9. Sécurité</h2>
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées
            pour protéger vos données personnelles contre tout accès non autorisé, perte,
            altération ou divulgation. Les paiements sont sécurisés par le protocole SSL
            via Stripe.
          </p>
        </section>
      </div>
    </div>
  )
}
