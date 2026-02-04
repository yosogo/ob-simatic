import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, u as unescapeHTML, r as renderComponent, d as renderScript } from './bundle-astro/server-7QLI93ZA.js';
import 'piccolore';
import 'clsx';
import { s as siteData, d as getLocalizedPath, c as categories, p as products } from './bundle-Footer-B1Slu2TZ.js';
import fs from 'node:fs';
import path from 'node:path';
/* empty css                               */
import { g as getCategoryImage } from './bundle-categoryImages-kKEd2I7N.js';
import { $ as $$ProductCard } from './bundle-ProductCard-BISc6ZG_.js';
import fs$1 from 'fs';
import path$1 from 'path';

const $$Astro$4 = createAstro("https://www.ob-simatic.com");
const $$HeroSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroSearch;
  const { lang = "tr", ui } = Astro2.props;
  const heroTitle = ui?.hero?.title || "Aradığınız Ürünü Bulun";
  const heroSubtitle = ui?.hero?.subtitle || "Siemens PLC, Sürücü, Panel ve Otomasyon Yedek Parçaları";
  const searchPlaceholder = ui?.search?.placeholderMobile || "Ürün numarasını yazın (Örn: 6ES7...)";
  const searchButton = ui?.buttons?.search || "ARA";
  let heroImage = "";
  const BASE_URL = "/".replace(/\/$/, "");
  const selectedImage = siteData?.hero?.backgroundImage;
  if (selectedImage) {
    if (selectedImage.startsWith(BASE_URL)) {
      heroImage = selectedImage;
    } else {
      heroImage = `${BASE_URL}${selectedImage.startsWith("/") ? "" : "/"}${selectedImage}`;
    }
  }
  if (!heroImage) {
    try {
      const heroDir = path.join(process.cwd(), "public", "images", "background");
      if (fs.existsSync(heroDir)) {
        const files = fs.readdirSync(heroDir);
        const image = files.find((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        if (image) {
          heroImage = `${BASE_URL}/images/background/${image}`;
        }
      }
    } catch (e) {
      console.error("Error finding hero image:", e);
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="hero-search"${addAttribute(heroImage ? `background-image: url('${heroImage}');` : `background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);`, "style")} data-astro-cid-gp6napx3> <div class="overlay" data-astro-cid-gp6napx3></div> <div class="content" data-astro-cid-gp6napx3> <h1 data-astro-cid-gp6napx3>${heroTitle}</h1> <p data-astro-cid-gp6napx3>${heroSubtitle}</p> <div class="search-container" data-astro-cid-gp6napx3> <form${addAttribute(getLocalizedPath("/arama", lang), "action")} method="get" data-astro-cid-gp6napx3> <input type="text" name="q"${addAttribute(searchPlaceholder, "placeholder")} data-astro-cid-gp6napx3> <button type="submit"${addAttribute(searchButton, "title")} data-astro-cid-gp6napx3> <span class="btn-text" data-astro-cid-gp6napx3>${searchButton}</span> <span class="btn-icon" data-astro-cid-gp6napx3> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gp6napx3> <circle cx="11" cy="11" r="8" data-astro-cid-gp6napx3></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-gp6napx3></line> </svg> </span> </button> </form> </div> </div> </section> `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/HeroSearch.astro", void 0);

const $$Astro$3 = createAstro("https://www.ob-simatic.com");
const $$ServicePillars = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicePillars;
  const { lang = "tr", ui } = Astro2.props;
  const pagesPath = path.join(process.cwd(), "src/data/pages.json");
  let pagesData = {};
  try {
    if (fs.existsSync(pagesPath)) {
      pagesData = JSON.parse(fs.readFileSync(pagesPath, "utf-8"));
    }
  } catch (e) {
    console.error("Error reading pages.json", e);
  }
  const getPageSummary = (slug, defaultTitle, defaultDesc, defaultIcon) => {
    const page = pagesData[slug];
    if (page && page[lang]) {
      return {
        title: page[lang].title || defaultTitle,
        desc: page[lang].summary || defaultDesc,
        icon: page[lang].icon || defaultIcon
      };
    }
    return { title: defaultTitle, desc: defaultDesc, icon: defaultIcon };
  };
  const defaultSalesIcon = `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`;
  const defaultPurchaseIcon = `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.83a2 2 0 0 0-1.78-1.07l-2.45.15a2 2 0 0 0-1.5 1l-1.39 2.5a.6.6 0 0 1-.52.28H6a2 2 0 0 0-2 2v6l-2 3.4a2 2 0 0 0 1.76 2.91H20a2 2 0 0 0 2-2V7a2 2 0 0 0-.58-1.5z"></path><circle cx="12" cy="13" r="1.5"></circle></svg>`;
  const defaultServiceIcon = `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
  const salesData = getPageSummary(
    "satis",
    ui?.services?.sales?.title || "SATI\u015E",
    ui?.services?.sales?.desc || "Siemens PLC, Operat\xF6r Panelleri ve S\xFCr\xFCc\xFCler konusunda geni\u015F stok ve uzmanl\u0131kla hizmet veriyoruz.",
    defaultSalesIcon
  );
  const salesTitle = salesData.title;
  const salesDesc = salesData.desc;
  const salesIcon = salesData.icon;
  const salesBtn = ui?.services?.sales?.button || "Detayl\u0131 Bilgi";
  const purchaseData = getPageSummary(
    "satin-alma",
    ui?.services?.purchase?.title || "SATIN ALMA",
    ui?.services?.purchase?.desc || "Kullan\u0131lmayan veya at\u0131l durumda bulunan otomasyon \xFCr\xFCnlerinizi de\u011Ferinde sat\u0131n al\u0131yoruz.",
    defaultPurchaseIcon
  );
  const purchaseTitle = purchaseData.title;
  const purchaseDesc = purchaseData.desc;
  const purchaseIcon = purchaseData.icon;
  const purchaseBtn = ui?.services?.purchase?.button || "Teklif Al";
  const serviceData = getPageSummary(
    "teknik-servis",
    ui?.services?.technical?.title || "TEKN\u0130K SERV\u0130S",
    ui?.services?.technical?.desc || "End\xFCstriyel otomasyon sistemlerinize dair t\xFCm bak\u0131m, onar\u0131m ve teknik servis ihtiya\xE7lar\u0131.",
    defaultServiceIcon
  );
  const serviceTitle = serviceData.title;
  const serviceDesc = serviceData.desc;
  const serviceIcon = serviceData.icon;
  const serviceBtn = ui?.services?.technical?.button || "Tamir Formu";
  return renderTemplate`${maybeRenderHead()}<section class="p-home__services" data-astro-cid-2gbovvl7> <div class="container" data-astro-cid-2gbovvl7> <!-- Sales Column --> <div class="service-item" data-astro-cid-2gbovvl7> <div class="icon-wrapper sales" data-astro-cid-2gbovvl7>${unescapeHTML(salesIcon)}</div> <div class="content" data-astro-cid-2gbovvl7> <h3 data-astro-cid-2gbovvl7>${salesTitle}</h3> <p data-astro-cid-2gbovvl7>${salesDesc}</p> <a${addAttribute(getLocalizedPath("/teknik-servis", lang), "href")} class="service-link" data-astro-cid-2gbovvl7> <span data-astro-cid-2gbovvl7>${salesBtn}</span> <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2gbovvl7><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-2gbovvl7></line><polyline points="12 5 19 12 12 19" data-astro-cid-2gbovvl7></polyline></svg> </a> </div> </div> <!-- Purchasing Column --> <div class="service-item" data-astro-cid-2gbovvl7> <div class="icon-wrapper purchase" data-astro-cid-2gbovvl7>${unescapeHTML(purchaseIcon)}</div> <div class="content" data-astro-cid-2gbovvl7> <h3 data-astro-cid-2gbovvl7>${purchaseTitle}</h3> <p data-astro-cid-2gbovvl7>${purchaseDesc}</p> <a${addAttribute(getLocalizedPath("/satin-alma", lang), "href")} class="service-link" data-astro-cid-2gbovvl7> <span data-astro-cid-2gbovvl7>${purchaseBtn}</span> <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2gbovvl7><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-2gbovvl7></line><polyline points="12 5 19 12 12 19" data-astro-cid-2gbovvl7></polyline></svg> </a> </div> </div> <!-- Technical Service Column --> <div class="service-item" data-astro-cid-2gbovvl7> <div class="icon-wrapper service" data-astro-cid-2gbovvl7>${unescapeHTML(serviceIcon)}</div> <div class="content" data-astro-cid-2gbovvl7> <h3 data-astro-cid-2gbovvl7>${serviceTitle}</h3> <p data-astro-cid-2gbovvl7>${serviceDesc}</p> <a${addAttribute(getLocalizedPath("/teknik-servis", lang), "href")} class="service-link" data-astro-cid-2gbovvl7> <span data-astro-cid-2gbovvl7>${serviceBtn}</span> <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2gbovvl7><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-2gbovvl7></line><polyline points="12 5 19 12 12 19" data-astro-cid-2gbovvl7></polyline></svg> </a> </div> </div> </div> </section> `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/ServicePillars.astro", void 0);

const $$Astro$2 = createAstro("https://www.ob-simatic.com");
const $$ProductCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductCategories;
  const { lang = "tr", ui } = Astro2.props;
  const sectionTitle = ui?.sections?.productGroups || "Otomasyon \xDCr\xFCn Gruplar\u0131";
  const sectionDesc = ui?.sections?.productGroupsDesc || "\u0130htiyac\u0131n\u0131z olan t\xFCm end\xFCstriyel \xE7\xF6z\xFCm \xFCr\xFCnleri stoklar\u0131m\u0131zda";
  const viewProductsText = ui?.buttons?.viewProducts || "\xDCr\xFCnleri \u0130ncele";
  function getCatLoc(cat, lang2) {
    return cat.i18n[lang2] || cat.i18n["en"] || cat.i18n["tr"];
  }
  const allCategories = Object.values(categories).map((cat) => {
    const loc = getCatLoc(cat, lang);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title,
      parentSlug: cat.parentSlug,
      order: cat.order || 0,
      // Dynamically discover image from folder instead of using cat.image
      image: getCategoryImage(cat.slug)
    };
  });
  const categories$1 = allCategories.filter((cat) => cat.parentSlug === null).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => ({
    title: cat.name,
    slug: cat.slug,
    image: cat.image
  }));
  return renderTemplate`${maybeRenderHead()}<section class="products" data-astro-cid-xf6hngan> <div class="container" data-astro-cid-xf6hngan> <div class="section-title" data-astro-cid-xf6hngan> <h2 data-astro-cid-xf6hngan>${sectionTitle}</h2> <p data-astro-cid-xf6hngan>${sectionDesc}</p> </div> <div class="grid" data-astro-cid-xf6hngan> ${categories$1.map((cat) => renderTemplate`<a${addAttribute(cat.slug ? getLocalizedPath(`/${cat.slug}`, lang) : "#", "href")} class="category-card" data-astro-cid-xf6hngan> <div class="card-image" data-astro-cid-xf6hngan> ${cat.image && !cat.image.includes("default") ? renderTemplate`<img${addAttribute(cat.image, "src")}${addAttribute(cat.title, "alt")} loading="lazy" data-astro-cid-xf6hngan>` : renderTemplate`<i class="fas fa-folder-open fa-3x text-primary opacity-50" data-astro-cid-xf6hngan></i>`} </div> <h3 data-astro-cid-xf6hngan>${cat.title}</h3> <span class="view-btn" data-astro-cid-xf6hngan>${viewProductsText}</span> </a>`)} </div> </div> </section> `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/ProductCategories.astro", void 0);

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
function getProductImages(productId) {
  if (!productId) return [];
  const productDir = path$1.join(process.cwd(), "public", "images", "products", productId);
  try {
    if (!fs$1.existsSync(productDir)) {
      return [];
    }
    const files = fs$1.readdirSync(productDir);
    const images = files.filter((file) => {
      const ext = path$1.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    return images.map((img) => `${BASE_URL}/images/products/${productId}/${img}`);
  } catch (error) {
    console.error(`Error reading product images for ${productId}:`, error);
    return [];
  }
}
function getDefaultImage() {
  return "";
}
function getProductImage(productId, defaultImage) {
  const images = getProductImages(productId);
  if (images.length > 0) return images[0];
  return defaultImage || getDefaultImage();
}

const $$Astro$1 = createAstro("https://www.ob-simatic.com");
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const { lang = "tr", ui } = Astro2.props;
  const allProducts = Object.values(products).map((prod) => {
    const image = getProductImage(prod.id);
    return {
      ...prod,
      image,
      title: prod.i18n[lang]?.title || prod.i18n["en"]?.title || prod.i18n["tr"]?.title
    };
  });
  const featuredProducts = allProducts.slice(0, 3);
  const sectionTitle = lang === "ar" ? "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0645\u064A\u0632\u0629" : lang === "en" ? "Featured Products" : "\xD6ne \xC7\u0131kan \xDCr\xFCnler";
  const viewAllText = ui?.buttons?.viewAll || (lang === "ar" ? "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644" : lang === "en" ? "View All" : "T\xFCm\xFCn\xFC G\xF6ster");
  return renderTemplate`${maybeRenderHead()}<section class="featured-products" data-astro-cid-izcvjprn> <div class="container" data-astro-cid-izcvjprn> <div class="section-header" data-astro-cid-izcvjprn> <h2 data-astro-cid-izcvjprn>${sectionTitle}</h2> <a${addAttribute(getLocalizedPath("/arama", lang), "href")} class="view-all-btn" data-astro-cid-izcvjprn>${viewAllText}</a> </div> <div class="products-grid" data-astro-cid-izcvjprn> ${featuredProducts.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "image": product.image, "brand": product.brand, "title": product.title, "code": product.id, "href": getLocalizedPath(`/urun/${product.id}`, lang), "ui": ui, "categorySlug": product.categorySlug, "price": product.price, "data-astro-cid-izcvjprn": true })}`)} </div> </div> </section> `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/FeaturedProducts.astro", void 0);

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$Manufacturers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Manufacturers;
  const { lang = "tr", ui } = Astro2.props;
  const sectionTitle = ui?.sections?.brands || "\xC7al\u0131\u015Ft\u0131\u011F\u0131m\u0131z Markalar";
  function getCatLoc(cat, lang2) {
    return cat.i18n[lang2] || cat.i18n["en"] || cat.i18n["tr"];
  }
  const rootCategories = Object.values(categories).filter(
    (cat) => !cat.parentSlug
  );
  const rootSlugs = new Set(rootCategories.map((cat) => cat.slug));
  const brandCategories = Object.values(categories).filter(
    (cat) => cat.parentSlug && rootSlugs.has(cat.parentSlug)
  );
  const brands = [
    ...new Set(brandCategories.map((cat) => getCatLoc(cat, lang).name))
  ].sort();
  return renderTemplate`${maybeRenderHead()}<section class="manufacturers" data-astro-cid-vhoeen67> <div class="container" data-astro-cid-vhoeen67> <div class="section-title" data-astro-cid-vhoeen67> <h2 data-astro-cid-vhoeen67>${sectionTitle}</h2> </div> <div class="brand-grid" data-astro-cid-vhoeen67> ${brands.map((brand) => renderTemplate`<div class="brand-item" data-astro-cid-vhoeen67> <span class="brand-name" data-astro-cid-vhoeen67>${brand}</span> </div>`)} </div> </div> </section> `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Manufacturers.astro", void 0);

const $$Popup = createComponent(($$result, $$props, $$slots) => {
  const settings = siteData.campaign_popup || {};
  const enabled = settings.enabled !== false;
  let image = "";
  try {
    const popupDir = path.join(process.cwd(), "public", "images", "floatingpopup");
    if (fs.existsSync(popupDir)) {
      const files = fs.readdirSync(popupDir);
      const foundImage = files.find((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
      if (foundImage) {
        image = `${"/".replace(/\/$/, "")}/images/floatingpopup/${foundImage}`;
      }
    }
  } catch (e) {
    console.error("Error finding popup image:", e);
  }
  if (!enabled || !image) {
    return;
  }
  const ctaLink = settings.cta_link || "#";
  const hasLink = ctaLink !== "#";
  return renderTemplate`${maybeRenderHead()}<div id="campaign-popup" class="popup-overlay" data-astro-cid-qzaw6m73> <div class="popup-content" data-astro-cid-qzaw6m73> <button id="close-popup" class="close-btn" data-astro-cid-qzaw6m73>&times;</button> ${hasLink ? renderTemplate`<a${addAttribute(ctaLink, "href")} class="popup-link" data-astro-cid-qzaw6m73> <img${addAttribute(image, "src")} alt="Special Offer" class="popup-image" data-astro-cid-qzaw6m73> </a>` : renderTemplate`<img${addAttribute(image, "src")} alt="Special Offer" class="popup-image" data-astro-cid-qzaw6m73>`} </div> </div> ${renderScript($$result, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Popup.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Popup.astro", void 0);

export { $$Popup as $, $$HeroSearch as a, $$ServicePillars as b, $$ProductCategories as c, $$FeaturedProducts as d, $$Manufacturers as e };
