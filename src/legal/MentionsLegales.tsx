export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-noir mb-8">Mentions legales</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-noir-light leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-noir">1. Editeur du site</h2>
          <p>
            Le site <strong>mielchateaudejeurre.fr</strong> est edite par :<br />
            <strong>SARL Chateau de Jeurre</strong><br />
            Capital social : [A completer] &euro;<br />
            Siege social : Chateau de Jeurre, 91590 Morigny-Champigny, France<br />
            RCS : [Numero RCS a completer]<br />
            SIRET : [Numero SIRET a completer]<br />
            TVA intracommunautaire : [Numero TVA a completer]<br />
            Directeur de la publication : [Nom du dirigeant]<br />
            Email : contact@chateau-jeurre.fr<br />
            Telephone : +33 1 XX XX XX XX
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">2. Hebergement</h2>
          <p>
            Le site est heberge par :<br />
            [Nom de l'hebergeur]<br />
            [Adresse de l'hebergeur]<br />
            [Telephone de l'hebergeur]
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">3. Propriete intellectuelle</h2>
          <p>
            L'ensemble du contenu du site (textes, images, logos, graphismes) est la propriete
            exclusive de la SARL Chateau de Jeurre, sauf mention contraire. Toute reproduction,
            representation, modification ou exploitation, meme partielle, est interdite sans
            autorisation ecrite prealable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">4. Donnees personnelles</h2>
          <p>
            Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi
            Informatique et Libertes, vous disposez d'un droit d'acces, de rectification, de
            suppression et d'opposition sur vos donnees personnelles. Pour exercer ces droits,
            contactez-nous a : contact@chateau-jeurre.fr
          </p>
          <p>
            Pour plus d'informations, consultez notre{' '}
            <a href="/confidentialite" className="text-honey-dark underline">
              politique de confidentialite
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">5. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies strictement necessaires au fonctionnement du
            panier d'achat et au traitement securise des paiements. Aucun cookie publicitaire ou
            de tracage n'est utilise.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">6. Mediateur de la consommation</h2>
          <p>
            Conformement aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de
            litige non resolu, le consommateur peut recourir gratuitement au service de mediation :<br />
            [Nom du mediateur]<br />
            [Adresse / site web du mediateur]
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-noir">7. Droit applicable</h2>
          <p>
            Les presentes mentions legales sont soumises au droit francais. En cas de litige, les
            tribunaux francais seront seuls competents.
          </p>
        </section>
      </div>
    </div>
  )
}
