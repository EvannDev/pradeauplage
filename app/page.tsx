import Image from "next/image";
import NavBar from "./components/NavBar";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <>
      {/* Skip to main content (a11y) */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Global scroll/reveal/counter/parallax effects */}
      <ScrollEffects />

      {/* ═══ NAVIGATION ═══════════════════════════════════════════════════ */}
      <NavBar />

      {/* ═══ HERO ═════════════════════════════════════════════════════════ */}
      <header className="hero" id="hero" aria-label="Section héro">
        <div className="hero__bg">
          <Image
            src="/hero.png"
            alt="Terrasse du Pradeau Plage avec pergola en bois, bougainvilliers et vue sur la mer turquoise de Giens"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "70% center" }}
            sizes="100vw"
          />
        </div>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__eyebrow eyebrow">
            Restaurant de plage · Depuis 2024
          </div>
          <h1 className="hero__title">
            Le Sud,
            <br />
            <em>dans votre</em>
            <br />
            assiette.
          </h1>
          <p className="hero__sub">
            Cuisine méditerranéenne, pieds dans le sable.
            <br />
            Une parenthèse provençale sur la Presqu&apos;île de Giens.
          </p>
          <div className="hero__ctas">
            <a href="#reserver" className="btn btn--primary">
              Réserver ma table
            </a>
            <a href="#carte" className="btn btn--ghost">
              Voir la carte du jour
            </a>
          </div>
        </div>
      </header>

      {/* ═══ L'EXPÉRIENCE ═════════════════════════════════════════════════ */}
      <main id="main-content">
      <section className="section" id="experience">
        {/* Olive motif */}
        <svg
          className="motif"
          style={{ top: 40, right: "5%", width: 180 }}
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M30 100 Q100 30 170 100"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <ellipse cx="60" cy="80" rx="10" ry="4" fill="currentColor" transform="rotate(-30 60 80)" />
          <ellipse cx="80" cy="65" rx="10" ry="4" fill="currentColor" transform="rotate(-20 80 65)" />
          <ellipse cx="100" cy="58" rx="10" ry="4" fill="currentColor" transform="rotate(0 100 58)" />
          <ellipse cx="120" cy="65" rx="10" ry="4" fill="currentColor" transform="rotate(20 120 65)" />
          <ellipse cx="140" cy="80" rx="10" ry="4" fill="currentColor" transform="rotate(30 140 80)" />
        </svg>

        <div className="container">
          <div className="experience">
            <div className="experience__copy">
              <div className="eyebrow reveal">L&apos;Expérience</div>
              <h2 className="reveal reveal--delay-1" style={{ marginTop: 24 }}>
                Une table <em>face à la mer</em>, sous les pins.
              </h2>
              <p className="reveal reveal--delay-2">
                À Pradeau Plage, le temps suspend son cours. Les pieds dans le
                sable, l&apos;horizon turquoise pour seul décor, et dans
                l&apos;assiette la générosité d&apos;une cuisine provençale qui
                respire le marché du matin.
              </p>
              <p className="reveal reveal--delay-3">
                Poissons du jour, légumes maraîchers, huile d&apos;olive de la
                presqu&apos;île. Une ode au Sud, simple et lumineuse, où chaque
                déjeuner devient une carte postale.
              </p>
              <div className="experience__sign reveal reveal--delay-3">
                <div>
                  <div className="experience__sign-name">
                    À très bientôt sur la plage,
                  </div>
                  <small>Toute l&apos;équipe Pradeau</small>
                </div>
              </div>
            </div>

            <div
              className="experience__media reveal reveal--delay-2"
              data-parallax="0.15"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
                alt="Terrasse d'un restaurant de plage avec vue sur la mer"
                loading="lazy"
              />
              <div className="experience__tag">Ouvert · 12h — 23h</div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats reveal">
            <div className="stat">
              <div className="stat__num" data-count="1420">0</div>
              <div className="stat__label">Av. des Arbanais</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span data-count="40">0</span>
                <sup>m</sup>
              </div>
              <div className="stat__label">De la plage à la table</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span data-count="100">0</span>%
              </div>
              <div className="stat__label">Produits frais &amp; locaux</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span data-count="7">0</span>/7
              </div>
              <div className="stat__label">Tous les jours en saison</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LA CARTE (client component) ══════════════════════════════════ */}
      <MenuSection />

      {/* ═══ GALERIE (client component) ═══════════════════════════════════ */}
      <GallerySection />

      {/* ═══ LE LIEU / NOTRE HISTOIRE ═════════════════════════════════════ */}
      <section className="section section--sable" id="lieu">
        <div className="container">
          <div className="story">
            <div className="story__media reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1400&q=80"
                alt="Vue du restaurant en bord de mer"
                loading="lazy"
              />
              <div className="story__media-floater">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
                  alt="Détail d'un plat méditerranéen"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="story__copy">
              <div className="eyebrow reveal">Notre histoire</div>
              <h2 className="reveal reveal--delay-1">
                Le Pradeau Plage <em>renaît</em>.
              </h2>
              <p className="reveal reveal--delay-2">
                Niché sur le double tombolo de la Presqu&apos;île de Giens,
                entre la plage de l&apos;Almanarre et les salins, Pradeau Plage
                occupe un cadre unique en Méditerranée — là où la pinède rejoint
                la mer turquoise.
              </p>
              <p className="reveal reveal--delay-2">
                Après plusieurs saisons de sommeil, le lieu a rouvert ses volets
                pour célébrer ce que la Provence sait faire de mieux : une
                cuisine généreuse, des produits qui sentent bon le marché, et
                l&apos;art de prendre son temps.
              </p>
              <blockquote className="story__quote reveal reveal--delay-3">
                « Ici, le service commence quand vos pieds touchent le sable, et
                finit quand le soleil s&apos;est couché. »
                <footer>— L&apos;équipe Pradeau</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AVIS / TÉMOIGNAGES ═══════════════════════════════════════════ */}
      <section className="section section--creme" id="avis">
        <div className="container">
          <div className="section__head section__head--center">
            <div>
              <div className="eyebrow reveal">Avis clients</div>
              <h2
                className="section__title reveal reveal--delay-1"
                style={{ marginTop: 20 }}
              >
                Ils ont <em>aimé</em> leur table.
              </h2>
            </div>
            <p className="section__intro reveal reveal--delay-2">
              Plus de 200 avis sur Google et TripAdvisor &mdash; voici quelques
              retours récents.
            </p>
          </div>

          <div className="reviews__grid reveal">
            <article className="review">
              <div className="review__stars" aria-label="5 étoiles sur 5">★★★★★</div>
              <p className="review__text">
                &laquo;&nbsp;Vue sur mer époustouflante, la bouillabaisse était
                à la hauteur du cadre. On a mangé les pieds dans le sable sous
                un soleil magnifique — à refaire absolument cet été.&nbsp;&raquo;
              </p>
              <div>
                <div className="review__author">Sophie M. &mdash; Paris</div>
                <div className="review__source">via Google · juillet 2025</div>
              </div>
            </article>

            <article className="review">
              <div className="review__stars" aria-label="5 étoiles sur 5">★★★★★</div>
              <p className="review__text">
                &laquo;&nbsp;Accueil chaleureux dès l&apos;arrivée, produits
                ultra-frais, carpaccio de daurade fondant. L&apos;équipe est
                aux petits soins. Un des meilleurs restaurants de la presqu&apos;île,
                sans hésiter.&nbsp;&raquo;
              </p>
              <div>
                <div className="review__author">Thomas R. &mdash; Lyon</div>
                <div className="review__source">via TripAdvisor · août 2025</div>
              </div>
            </article>

            <article className="review">
              <div className="review__stars" aria-label="5 étoiles sur 5">★★★★★</div>
              <p className="review__text">
                &laquo;&nbsp;Déjeuner en famille avec les enfants — ils ont été
                super bien accueillis. La terrasse sous les pins est un vrai
                havre de paix, et les portions sont généreuses. On reviendra
                l&apos;an prochain.&nbsp;&raquo;
              </p>
              <div>
                <div className="review__author">Clara &amp; Antoine &mdash; Bordeaux</div>
                <div className="review__source">via Google · juin 2025</div>
              </div>
            </article>

            <article className="review">
              <div className="review__stars" aria-label="4 étoiles sur 5">★★★★☆</div>
              <p className="review__text">
                &laquo;&nbsp;Excellent rapport qualité-prix pour la région. Le
                risotto safrané était crémeux comme il faut. Seul bémol : très
                fréquenté en juillet, préférez réserver à l&apos;avance pour
                avoir une table en bord de mer.&nbsp;&raquo;
              </p>
              <div>
                <div className="review__author">Marc L. &mdash; Marseille</div>
                <div className="review__source">via TripAdvisor · juillet 2025</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ RÉSERVATION ══════════════════════════════════════════════════ */}
      <section className="reserve" id="reserver">
        <div className="container reserve__inner">
          <div
            className="eyebrow reveal"
            style={{ color: "var(--c-sable)", justifyContent: "center" }}
          >
            Réservation
          </div>
          <h2 className="reveal reveal--delay-1" style={{ marginTop: 18 }}>
            Une table vous <em>attend</em>.
          </h2>
          <p className="reveal reveal--delay-2">
            Choisissez votre date directement en ligne, ou appelez-nous.
            <br />
            Pour les groupes de plus de 8 personnes, contactez-nous.
          </p>
          <div className="reserve__ctas reveal reveal--delay-3">
            <a
              href="https://bookings.zenchef.com/results?rid=357244"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Choisir ma date →
            </a>
            <a href="tel:0494582906" className="btn btn--ghost">
              Nous appeler
            </a>
          </div>

          {/* Zenchef inline booking widget */}
          <div className="reserver__embed reveal reveal--delay-3">
            <iframe
              src="https://bookings.zenchef.com/results?rid=357244"
              title="Réserver une table en ligne — Zenchef"
              loading="lazy"
              allow="payment"
            />
          </div>

          <a href="tel:0494582906" className="reserve__phone reveal reveal--delay-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            04 94 58 29 06
          </a>
          <div className="reserve__hours reveal reveal--delay-3">
            Service midi 12h–14h30 · Soir 19h–22h30 · 7j/7 en saison
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ══════════════════════════════════════════════════════ */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="eyebrow reveal">Contact &amp; accès</div>
              <h2
                className="section__title reveal reveal--delay-1"
                style={{ marginTop: 20 }}
              >
                Vous nous <em>trouverez</em> ici.
              </h2>
            </div>
            <p className="section__intro reveal reveal--delay-2">
              Sur la presqu&apos;île de Giens, à 20 minutes de Hyères-centre.
              Parking gratuit à proximité, accès direct depuis la route du sel.
            </p>
          </div>

          <div className="contact">
            <div className="contact__info reveal">
              <div className="info-item">
                <div className="info-item__label">Adresse</div>
                <div className="info-item__value">
                  1420 Av. des Arbanais
                  <br />
                  Presqu&apos;île de Giens, 83400 Hyères
                </div>
                <div className="info-item__sub">
                  À 40 mètres de la plage de l&apos;Almanarre
                </div>
              </div>
              <div className="info-item">
                <div className="info-item__label">Téléphone</div>
                <div className="info-item__value">
                  <a href="tel:0494582906">04 94 58 29 06</a>
                </div>
                <div className="info-item__sub">
                  Tous les jours de 10h à 23h
                </div>
              </div>
              <div className="info-item">
                <div className="info-item__label">Horaires</div>
                <div className="info-grid">
                  <div>
                    <strong>Midi</strong>
                  </div>
                  <div>12h00 — 14h30</div>
                  <div>
                    <strong>Soir</strong>
                  </div>
                  <div>19h00 — 22h30</div>
                  <div>
                    <strong>Bar</strong>
                  </div>
                  <div>10h00 — 23h00</div>
                  <div>
                    <strong>Saison</strong>
                  </div>
                  <div>Avril → Octobre</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-item__label">Accès &amp; parking</div>
                <div className="info-item__sub">
                  Parking gratuit à 100 m · Arrêt bus Almanarre ligne 67 ·
                  Pistes cyclables.
                </div>
              </div>
              <div className="info-item">
                <div className="info-item__label">Suivez-nous</div>
                <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                  <a
                    href="https://www.facebook.com/pradeauplage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline"
                    style={{ padding: "10px 18px", fontSize: 12 }}
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="btn btn--outline"
                    style={{ padding: "10px 18px", fontSize: 12 }}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__map reveal reveal--delay-1">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.1280%2C43.0270%2C6.1740%2C43.0570&layer=mapnik&marker=43.0420%2C6.1495"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de Pradeau Plage à Giens"
              />
              <div className="contact__map-card">
                <strong>Pradeau Plage</strong>
                <small>
                  1420 Av. des Arbanais
                  <br />
                  Presqu&apos;île de Giens · 83400 Hyères
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>{/* end #main-content */}

      {/* ═══ FOOTER ═══════════════════════════════════════════════════════ */}
      <footer>
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#hero" className="footer__logo">
                <span className="nav__logo-mark">P</span>
                <span className="nav__logo-text">
                  <strong
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                    }}
                  >
                    Pradeau Plage
                  </strong>
                  <small
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      opacity: 0.6,
                      display: "block",
                      marginTop: 4,
                    }}
                  >
                    Presqu&apos;île de Giens
                  </small>
                </span>
              </a>
              <p>
                Restaurant de plage méditerranéen. Cuisine du marché, produits
                frais, vue sur la baie. Une parenthèse provençale toute
                l&apos;année.
              </p>
              <div className="footer__social" style={{ marginTop: 20 }}>
                <a
                  href="https://www.facebook.com/pradeauplage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#carte">La Carte</a></li>
                <li><a href="#lieu">Le Lieu</a></li>
                <li><a href="#galerie">Galerie</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Réservation</h4>
              <ul>
                <li>
                  <a
                    href="https://bookings.zenchef.com/results?rid=357244"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zenchef
                  </a>
                </li>
                <li><a href="tel:0494582906">04 94 58 29 06</a></li>
                <li><a href="#reserver">Groupes &amp; événements</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Adresse</h4>
              <ul>
                <li>1420 Av. des Arbanais</li>
                <li>Presqu&apos;île de Giens</li>
                <li>83400 Hyères</li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© 2026 Pradeau Plage. Tous droits réservés.</span>
            <span>Mentions légales · CGV · Cookies</span>
          </div>
        </div>
      </footer>
    </>
  );
}
