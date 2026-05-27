"use client";

import { useState } from "react";

type Dish = {
  name: string;
  price: string;
  priceSub?: string;
  desc: string;
  img: string;
  alt: string;
  tags: string[];
  badges?: { label: string; variant: "chef" | "veg" }[];
};

type Tab = "entrees" | "plats" | "desserts" | "boissons";
type Filter = "all" | "chef" | "poisson" | "viande" | "veg";

const MENU: Record<Tab, Dish[]> = {
  entrees: [
    {
      name: "Burrata des Pouilles",
      price: "18 €",
      desc: "Tomates anciennes du Lavandou, basilic frais, huile d'olive de Giens, fleur de sel.",
      img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
      alt: "Burrata des Pouilles",
      tags: ["chef", "veg"],
      badges: [{ label: "Suggestion du chef", variant: "chef" }],
    },
    {
      name: "Carpaccio de daurade",
      price: "19 €",
      desc: "Citron de Menton, huile d'olive première pression, baies roses, copeaux de parmesan.",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
      alt: "Carpaccio de daurade",
      tags: ["poisson"],
    },
    {
      name: "Tartare de thon rouge",
      price: "22 €",
      desc: "Avocat de Sicile, sésame doré, vinaigrette gingembre-sésame, tuile de riz.",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
      alt: "Tartare de thon rouge",
      tags: ["chef", "poisson"],
      badges: [{ label: "Suggestion du chef", variant: "chef" }],
    },
    {
      name: "Niçoise du jardin",
      price: "16 €",
      desc: "Tomates cerises confites, fèves, olives Taggiasche, œuf parfait, basilic, tapenade noire.",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
      alt: "Salade niçoise revisitée",
      tags: ["veg"],
      badges: [{ label: "Végétarien", variant: "veg" }],
    },
    {
      name: "Anchois marinés",
      price: "15 €",
      desc: "Focaccia tiède maison, tapenade d'olives noires de Nyons, citron confit.",
      img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80",
      alt: "Anchois marinés et focaccia",
      tags: ["poisson"],
    },
    {
      name: "Velouté de petits pois",
      price: "14 €",
      desc: "Menthe fraîche, ricotta fumée, croûtons à l'ail des ours.",
      img: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=900&q=80",
      alt: "Velouté de petits pois",
      tags: ["veg"],
      badges: [{ label: "Végétarien", variant: "veg" }],
    },
  ],
  plats: [
    {
      name: "Loup grillé entier",
      price: "38 €",
      desc: "Fenouil confit à l'anis, beurre blanc au safran, pommes grenailles écrasées.",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
      alt: "Loup grillé entier",
      tags: ["chef", "poisson"],
      badges: [{ label: "Suggestion du chef", variant: "chef" }],
    },
    {
      name: "Linguine alle vongole",
      price: "26 €",
      desc: "Palourdes du bassin de Thau, ail nouveau, persil plat, vin blanc, piment doux.",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
      alt: "Linguine aux palourdes",
      tags: ["poisson"],
    },
    {
      name: "Poulpe braisé à la grecque",
      price: "32 €",
      desc: "Pommes grenailles fumées, gremolata, romarin, jus corsé au citron confit.",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
      alt: "Poulpe braisé",
      tags: ["chef", "poisson"],
      badges: [{ label: "Suggestion du chef", variant: "chef" }],
    },
    {
      name: "Risotto safrané",
      price: "24 €",
      desc: "Carnaroli crémeux, courgettes trompette, pistou maison, parmesan affiné 24 mois.",
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
      alt: "Risotto safrané",
      tags: ["veg"],
      badges: [{ label: "Végétarien", variant: "veg" }],
    },
    {
      name: "Côte de bœuf maturée",
      price: "72 €",
      priceSub: "pour deux",
      desc: "1 kg, maturée 40 jours, frites maison, sauce béarnaise, sel de Guérande.",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
      alt: "Côte de bœuf maturée",
      tags: ["viande"],
    },
    {
      name: "Bouillabaisse de Giens",
      price: "42 €",
      desc: "Pêche du jour, rouille traditionnelle, croûtons à l'ail, safran de Forcalquier.",
      img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
      alt: "Bouillabaisse de Giens",
      tags: ["chef", "poisson"],
      badges: [{ label: "Suggestion du chef", variant: "chef" }],
    },
  ],
  desserts: [
    {
      name: "Tarte au citron revisitée",
      price: "11 €",
      desc: "Sablé breton, crème de citron de Menton, meringue italienne flambée minute.",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
      alt: "Tarte au citron",
      tags: ["veg"],
      badges: [{ label: "Végétarien", variant: "veg" }],
    },
    {
      name: "Fraises de Carros",
      price: "12 €",
      desc: "Mascarpone à la vanille de Tahiti, basilic frais, crumble amande.",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
      alt: "Fraises et mascarpone",
      tags: ["chef", "veg"],
      badges: [
        { label: "Suggestion", variant: "chef" },
        { label: "Veg", variant: "veg" },
      ],
    },
    {
      name: "Lait d'amande & abricots",
      price: "10 €",
      desc: "Glace artisanale au lait d'amande, abricots du Roussillon rôtis au miel de romarin.",
      img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
      alt: "Glace amande abricots",
      tags: ["veg"],
      badges: [{ label: "Végétarien", variant: "veg" }],
    },
    {
      name: "Tiramisu pistache de Bronte",
      price: "11 €",
      desc: "Biscuits imbibés au café, mascarpone, pistache de Sicile, cacao Valrhona.",
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
      alt: "Tiramisu pistache",
      tags: ["veg"],
      badges: [{ label: "Végétarien", variant: "veg" }],
    },
  ],
  boissons: [
    {
      name: "Spritz Pradeau",
      price: "12 €",
      desc: "Aperol, prosecco, eau pétillante, romarin frais, zeste d'orange brûlé.",
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
      alt: "Spritz signature",
      tags: ["chef"],
      badges: [{ label: "Signature", variant: "chef" }],
    },
    {
      name: "Rosé de Provence",
      price: "8 / 38 €",
      desc: "Côtes de Provence, Domaine local. Au verre ou à la bouteille.",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
      alt: "Rosé de Provence",
      tags: [],
    },
    {
      name: "Vermentino de Corse",
      price: "9 / 42 €",
      desc: "Notes d'agrumes et de fleurs blanches, idéal sur les poissons.",
      img: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=900&q=80",
      alt: "Vermentino Corse",
      tags: [],
    },
    {
      name: "Limonade maison",
      price: "7 €",
      desc: "Citrons jaunes pressés, sirop romarin-thym, eau pétillante de Quézac.",
      img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=80",
      alt: "Limonade maison",
      tags: ["veg"],
      badges: [{ label: "Sans alcool", variant: "veg" }],
    },
  ],
};

const TABS: { id: Tab; label: string }[] = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

const FILTERS: { id: Filter; label: string; color: string }[] = [
  { id: "all", label: "Tout afficher", color: "" },
  { id: "chef", label: "Suggestions du chef", color: "var(--c-terracotta)" },
  { id: "poisson", label: "Poisson", color: "var(--c-lagon)" },
  { id: "viande", label: "Viande", color: "#9B4D3D" },
  { id: "veg", label: "Végétarien", color: "var(--c-olivier)" },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>("entrees");
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const dishes = MENU[activeTab].filter(
    (d) => activeFilter === "all" || d.tags.includes(activeFilter)
  );

  return (
    <section className="section section--sable" id="carte">
      <svg
        className="wave-divider"
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: "absolute", top: "-1px", left: 0, right: 0 }}
      >
        <path
          d="M0,0 L0,44 C180,82 360,82 540,52 C720,22 900,22 1080,52 C1260,82 1380,82 1440,52 L1440,0 Z"
          fill="var(--c-bg)"
        />
      </svg>

      <div className="container">
        <div className="section__head section__head--center">
          <div>
            <div className="eyebrow reveal">La Carte</div>
            <h2
              className="section__title reveal reveal--delay-1"
              style={{ marginTop: 20 }}
            >
              Des saveurs <em>du marché</em>, à l&apos;assiette.
            </h2>
          </div>
          <p className="section__intro reveal reveal--delay-2">
            Une cuisine du Sud qui change au rythme des arrivages. Voici une
            sélection — laissez-vous porter par les suggestions du chef.
          </p>
        </div>

        {/* Tabs */}
        <div className="menu__tabs reveal" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className="menu__tab"
              role="tab"
              aria-selected={activeTab === tab.id ? "true" : "false"}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveFilter("all");
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="menu__filters reveal" role="group" aria-label="Filtres">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className="chip"
              data-filter={f.id}
              aria-pressed={activeFilter === f.id ? "true" : "false"}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.color && (
                <span
                  className="chip__dot"
                  style={{ background: f.color }}
                />
              )}
              {f.label}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="menu__panel is-active" role="tabpanel" aria-label={`Plats — ${TABS.find(t => t.id === activeTab)?.label}`}>
          <div className="menu__grid">
            {dishes.map((dish) => (
              <article key={dish.name} className="dish">
                <div className="dish__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dish.img} alt={dish.alt} loading="lazy" />
                  {dish.badges && dish.badges.length > 0 && (
                    <div className="dish__badges">
                      {dish.badges.map((b) => (
                        <span
                          key={b.label}
                          className={`badge badge--${b.variant}`}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="dish__body">
                  <div className="dish__row">
                    <h3 className="dish__name">{dish.name}</h3>
                    <span className="dish__price">
                      {dish.price}
                      {dish.priceSub && (
                        <small
                          style={{
                            fontSize: "0.55em",
                            color: "var(--c-charbon-60)",
                            fontStyle: "normal",
                            display: "block",
                          }}
                        >
                          {dish.priceSub}
                        </small>
                      )}
                    </span>
                  </div>
                  <p className="dish__desc">{dish.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="menu__cta reveal">
          <a href="#reserver" className="btn btn--dark">
            Voir les disponibilités
          </a>
        </div>
      </div>
    </section>
  );
}
