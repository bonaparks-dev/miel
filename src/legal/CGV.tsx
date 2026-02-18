export default function CGV() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-noir mb-8">Conditions Generales de Vente</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-noir-light leading-relaxed">
        <p className="text-sm text-gris">Derniere mise a jour : fevrier 2026</p>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 1 – Objet</h2>
          <p>
            Les presentes conditions generales de vente (CGV) regissent les ventes de produits
            alimentaires (miel) effectuees sur le site <strong>mielchateaudejeurre.fr</strong>,
            edite par la SARL Chateau de Jeurre (ci-apres "le Vendeur"), a tout consommateur
            (ci-apres "le Client").
          </p>
          <p>
            Toute commande implique l'acceptation sans reserve des presentes CGV.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 2 – Produits</h2>
          <p>
            Les produits proposes a la vente sont du miel de fleurs artisanal, recolte en France.
            Les photographies et descriptions sont aussi fideles que possible mais ne peuvent
            garantir une similarite parfaite avec le produit recu, en raison du caractere
            artisanal de la production.
          </p>
          <p>
            Chaque produit est accompagne de ses mentions obligatoires conformement au reglement
            (UE) n&deg;1169/2011 : denomination, poids net, origine, DDM, conditions de conservation,
            identite du producteur et numero de lot.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 3 – Prix</h2>
          <p>
            Les prix sont indiques en euros, toutes taxes comprises (TTC). Le prix au kilogramme
            est affiche conformement a l'arrete du 3 decembre 1987. Les frais de livraison sont
            indiques avant la validation de la commande. Le Vendeur se reserve le droit de modifier
            ses prix a tout moment, les produits etant factures au prix en vigueur au moment de la
            commande.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 4 – Commande</h2>
          <p>
            Le Client passe commande en suivant le processus en ligne : selection du produit,
            ajout au panier, saisie des coordonnees de livraison, acceptation des CGV, puis
            paiement. La commande est confirmee par un email de confirmation envoye a l'adresse
            indiquee par le Client.
          </p>
          <p>
            Le Vendeur se reserve le droit de refuser ou d'annuler toute commande en cas de
            motif legitime (probleme de paiement, adresse erronee, suspicion de fraude).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 5 – Paiement</h2>
          <p>
            Le paiement s'effectue en ligne par carte bancaire via la plateforme securisee
            Stripe. Le montant est debite au moment de la validation de la commande. Les
            donnees bancaires du Client ne sont jamais stockees sur les serveurs du Vendeur.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 6 – Livraison</h2>
          <p>
            Les produits sont livres a l'adresse indiquee par le Client lors de la commande.
            Les delais de livraison sont donnes a titre indicatif (generalement 3 a 5 jours
            ouvres en France metropolitaine). Le Vendeur ne peut etre tenu responsable de
            retards imputables au transporteur.
          </p>
          <p>
            La livraison est gratuite a partir de {50} &euro; d'achat. En dessous, les frais
            de livraison s'elevent a {5.90} &euro; TTC.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 7 – Droit de retractation</h2>
          <p>
            Conformement aux articles L.221-18 et suivants du Code de la consommation, le Client
            dispose d'un delai de 14 jours a compter de la reception du produit pour exercer son
            droit de retractation, sans avoir a justifier de motif.
          </p>
          <p>
            <strong>Exception :</strong> Conformement a l'article L.221-28, le droit de
            retractation ne peut etre exerce pour les denrees alimentaires perissables ou dont
            la date de durabilite minimale est depassee. En l'espece, le miel etant un produit
            alimentaire a DDM, le droit de retractation s'applique tant que le produit est
            retourne non ouvert, dans son emballage d'origine, et en parfait etat.
          </p>
          <p>
            Pour exercer ce droit, le Client doit notifier sa decision par email a
            contact@chateau-jeurre.fr. Les frais de retour sont a la charge du Client.
            Le remboursement sera effectue dans un delai de 14 jours suivant la reception
            du produit retourne.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 8 – Garanties et reclamations</h2>
          <p>
            Le Vendeur garantit la conformite des produits aux normes alimentaires en vigueur.
            En cas de produit defectueux ou non conforme, le Client doit contacter le Vendeur
            dans les 48 heures suivant la reception a contact@chateau-jeurre.fr, en joignant
            des photos du produit. Un remplacement ou remboursement sera propose.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 9 – Responsabilite</h2>
          <p>
            Le Vendeur decline toute responsabilite en cas de mauvaise utilisation ou
            conservation du produit par le Client. Le miel doit etre conserve conformement
            aux indications figurant sur l'etiquette.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 10 – Donnees personnelles</h2>
          <p>
            Les donnees collectees lors de la commande sont necessaires au traitement de
            celle-ci et ne sont en aucun cas cedees a des tiers a des fins commerciales.
            Pour plus d'informations, consultez notre{' '}
            <a href="/confidentialite" className="text-honey-dark underline">
              politique de confidentialite
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 11 – Mediation</h2>
          <p>
            En cas de litige, le Client peut recourir gratuitement a un mediateur de la
            consommation conformement aux articles L.616-1 et R.616-1 du Code de la
            consommation. Le mediateur designe est :<br />
            [Nom et coordonnees du mediateur a completer]
          </p>
          <p>
            Le Client peut egalement deposer sa reclamation sur la plateforme europeenne
            de resolution des litiges en ligne :{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honey-dark underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">Article 12 – Droit applicable</h2>
          <p>
            Les presentes CGV sont soumises au droit francais. Tout litige relatif a
            l'interpretation ou a l'execution des presentes sera soumis aux tribunaux
            competents du ressort du siege social du Vendeur.
          </p>
        </section>
      </div>
    </div>
  )
}
