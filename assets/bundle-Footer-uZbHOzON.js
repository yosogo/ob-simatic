import { a as createComponent, m as maybeRenderHead, d as renderTemplate, c as createAstro, e as addAttribute, b as renderScript, f as defineStyleVars, r as renderComponent, g as renderHead, h as renderSlot } from './bundle-astro/server-CFdTn5Vq.js';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                */
import data from './bundle-data-BFSAed7v.js';
import { S as SUPPORTED_LANGUAGES, a as getLocalizedPath } from './bundle-i18n-DP8Q0ndo.js';

const $$FloatingButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="floating-buttons" data-astro-cid-v4o2aonp> <a href="https://wa.me/905396127564" class="float-btn whatsapp" target="_blank" title="WhatsApp ile iletişim" data-astro-cid-v4o2aonp> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-v4o2aonp> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-v4o2aonp></path> </svg> </a> <a href="tel:+905396127564" class="float-btn phone" title="Bizi arayın" data-astro-cid-v4o2aonp> <svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-v4o2aonp> <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" data-astro-cid-v4o2aonp></path> </svg> </a> </div> `;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/FloatingButtons.astro", void 0);

const name = "OB Simatic Otomasyon";
const shortName = "OB Simatic";
const description = "15 yıllık deneyime sahip bir firma olarak, endüstriyel otomasyon ürünleri ve teknik destek hizmetlerinde güvenli iş ortaklığı sunmaktadır.";
const metaDescription = "PLC, Sürücü, Panel ve Endüstriyel Otomasyon Ürünleri Tedarikçisi";
const contact = {"address":"ob-simatic , Kilis , Türkiye","phone":"+90 539 612 75 64","email":"info@obsimatic.com","whatsapp":"+905396127564"};
const logo = {"text1":"OB","text2":"simatic otomasyon"};
const colors = {"primaryRgb":"0, 86, 179"};
const copyright = "Ekkeri. Tüm hakları saklıdır.";
const siteData = {
  name,
  shortName,
  description,
  metaDescription,
  contact,
  logo,
  colors,
  copyright,
};

const $$Astro$5 = createAstro("https://yosogo.github.io");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/muhammed/Desktop/code/aaa/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/muhammed/Desktop/code/aaa/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$4 = createAstro("https://yosogo.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, lang = "tr" } = Astro2.props;
  const $$definedVars = defineStyleVars([{ accent: siteData.colors.primaryRgb }]);
  return renderTemplate`<html${addAttribute(lang, "lang")} dir="ltr"${addAttribute($$definedVars, "style")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(siteData.metaDescription, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/ob-simatic/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "FloatingButtons", $$FloatingButtons, {})} </body></html>`;
}, "C:/Users/muhammed/Desktop/code/aaa/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro("https://yosogo.github.io");
const $$MegaMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MegaMenu;
  const { lang = "tr" } = Astro2.props;
  const baseUrl = `/ob-simatic/${lang}`;
  const categories = Object.entries(data.categories).map(
    ([slug, cat]) => ({
      slug,
      name: cat.name,
      parentSlug: cat.parentSlug,
      image: cat.image
    })
  );
  const categoriesWithProducts = new Set(
    Object.values(data.products).map((p) => p.categorySlug)
  );
  function hasProducts(categorySlug) {
    if (categoriesWithProducts.has(categorySlug)) return true;
    const children = categories.filter((c) => c.parentSlug === categorySlug);
    return children.some((child) => hasProducts(child.slug));
  }
  function getChildren(parentSlug) {
    return categories.filter((cat) => cat.parentSlug === parentSlug).filter((cat) => hasProducts(cat.slug));
  }
  const rootCategories = getChildren(null);
  return renderTemplate`${rootCategories.map((root) => {
    const children = getChildren(root.slug);
    const hasChildren = children.length > 0;
    return renderTemplate`${maybeRenderHead()}<li${addAttribute(hasChildren ? "has-sub-category" : "", "class")} data-selector="first-level-navigation"><a${addAttribute(`${baseUrl}/${root.slug}`, "href")}${addAttribute(root.name, "title")}><span>${root.name}</span></a>${hasChildren && renderTemplate`<button class="submenu-toggle" aria-label="Toggle submenu"><span class="toggle-arrow">›</span></button>`}${hasChildren && renderTemplate`<div class="sub-category category-level-2"><ul>${children.map((child) => {
      const grandChildren = getChildren(child.slug);
      const hasGrandChildren = grandChildren.length > 0;
      return renderTemplate`<li${addAttribute(
        hasGrandChildren ? "has-sub-category" : "",
        "class"
      )}><a${addAttribute(`${baseUrl}/${child.slug}`, "href")}${addAttribute(child.name, "title")}><span>${child.name}</span></a>${hasGrandChildren && renderTemplate`<button class="submenu-toggle" aria-label="Toggle submenu"><span class="toggle-arrow">
›
</span></button>`}${hasGrandChildren && renderTemplate`<div class="sub-category category-level-3"><ul>${grandChildren.map(
        (grandChild) => renderTemplate`<li><a${addAttribute(`${baseUrl}/${grandChild.slug}`, "href")}${addAttribute(
          grandChild.name,
          "title"
        )}><span>${grandChild.name}</span></a></li>`
      )}</ul></div>`}</li>`;
    })}</ul></div>`}</li>`;
  })}`;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/MegaMenu.astro", void 0);

const $$Astro$2 = createAstro("https://yosogo.github.io");
const $$CartDrawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CartDrawer;
  const { lang, ui } = Astro2.props;
  const translations = {
    title: ui?.cart?.title || "Shopping Cart",
    empty: ui?.cart?.empty || "Your cart is empty",
    checkout: ui?.cart?.checkout || "Checkout via WhatsApp",
    totalItems: ui?.cart?.totalItems || "Total Items",
    remove: ui?.cart?.remove || "Remove",
    continue: ui?.cart?.continue || "Continue Shopping"
  };
  return renderTemplate`${maybeRenderHead()}<div id="cart-drawer" class="cart-drawer"${addAttribute(JSON.stringify(translations), "data-translations")}${addAttribute(lang, "data-lang")} data-astro-cid-fwi5d3ie> <div class="cart-overlay" id="cart-overlay" data-astro-cid-fwi5d3ie></div> <div class="cart-content" data-astro-cid-fwi5d3ie> <div class="cart-header" data-astro-cid-fwi5d3ie> <h2 data-astro-cid-fwi5d3ie>${translations.title}</h2> <button id="close-cart" class="close-btn" data-astro-cid-fwi5d3ie>&times;</button> </div> <div class="cart-items-container" id="cart-items" data-astro-cid-fwi5d3ie> <!-- Items will be injected here via JS --> <div class="empty-cart-message" data-astro-cid-fwi5d3ie> <p data-astro-cid-fwi5d3ie>${translations.empty}</p> <button class="continue-btn" data-astro-cid-fwi5d3ie>${translations.continue}</button> </div> </div> <div class="cart-footer" id="cart-footer" data-astro-cid-fwi5d3ie> <div class="cart-summary" data-astro-cid-fwi5d3ie> <div class="summary-row" data-astro-cid-fwi5d3ie> <span data-astro-cid-fwi5d3ie>${translations.totalItems}:</span> <span id="cart-total-count" data-astro-cid-fwi5d3ie>0</span> </div> <div class="summary-row total-row" data-astro-cid-fwi5d3ie> <span data-astro-cid-fwi5d3ie>Toplam:</span> <span id="cart-total-price" class="total-price" data-astro-cid-fwi5d3ie>$0.00</span> </div> <div class="summary-row try-row" id="cart-try-row" data-astro-cid-fwi5d3ie> <span data-astro-cid-fwi5d3ie>≈</span> <span id="cart-total-try" class="try-total" data-astro-cid-fwi5d3ie>₺0</span> </div> </div> <a href="#" id="whatsapp-checkout" target="_blank" class="checkout-btn" data-astro-cid-fwi5d3ie> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-fwi5d3ie> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-fwi5d3ie></path> </svg> ${translations.checkout} </a> </div> </div> </div> ${renderScript($$result, "C:/Users/muhammed/Desktop/code/aaa/src/components/CartDrawer.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/CartDrawer.astro", void 0);

const $$Astro$1 = createAstro("https://yosogo.github.io");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "tr", ui } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const searchPlaceholder = ui?.search?.placeholder || "\xDCr\xFCn ad\u0131, kodu veya kategori aray\u0131n...";
  const searchPlaceholderMobile = ui?.search?.placeholderMobile || "\xDCr\xFCn numaras\u0131n\u0131 yaz\u0131n";
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <!-- Top Row: Logo, Search, Actions --> <div class="header-top" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <!-- Mobile Menu Button (Visible on Mobile) --> <button class="mobile-menu-btn" aria-label="Menu" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <line x1="3" y1="12" x2="21" y2="12" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="6" x2="21" y2="6" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="18" x2="21" y2="18" data-astro-cid-3ef6ksr2></line> </svg> </button> <!-- Logo --> <a${addAttribute(`/ob-simatic/${lang}`, "href")} class="logo" data-astro-cid-3ef6ksr2> <div class="logo-symbol" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" data-astro-cid-3ef6ksr2></path> </svg> </div> <div class="logo-text" data-astro-cid-3ef6ksr2> <span class="babil" data-astro-cid-3ef6ksr2>${siteData.logo.text1}</span> <span class="otomasyon" data-astro-cid-3ef6ksr2>${siteData.logo.text2}</span> </div> </a> <!-- Search Bar (Desktop) --> <div class="header-search desktop-search" data-astro-cid-3ef6ksr2> <form${addAttribute(`/ob-simatic/${lang}/arama`, "action")} method="get" data-astro-cid-3ef6ksr2> <input type="text" name="q"${addAttribute(searchPlaceholder, "placeholder")} data-astro-cid-3ef6ksr2> <button type="submit"${addAttribute(ui?.buttons?.search || "Ara", "title")} data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="11" cy="11" r="8" data-astro-cid-3ef6ksr2></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-3ef6ksr2></line> </svg> </button> </form> </div> <!-- Actions / Actions (Desktop) --> <div class="header-actions" data-astro-cid-3ef6ksr2> <!-- Cart Button (Independent) --> <button class="cart-btn" aria-label="Cart" id="header-cart-btn" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="9" cy="21" r="1" data-astro-cid-3ef6ksr2></circle> <circle cx="20" cy="21" r="1" data-astro-cid-3ef6ksr2></circle> <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" data-astro-cid-3ef6ksr2></path> </svg> <span class="cart-count" data-astro-cid-3ef6ksr2>0</span> </button> <!-- Desktop Lang Buttons --> <div class="header-lang-wrapper desktop-lang-wrapper" data-astro-cid-3ef6ksr2> <div class="header-lang-buttons" data-astro-cid-3ef6ksr2> ${SUPPORTED_LANGUAGES.map((l) => renderTemplate`<a${addAttribute(getLocalizedPath(currentPath, l), "href")}${addAttribute(`lang-btn ${l === lang ? "active" : ""}`, "class")} data-astro-cid-3ef6ksr2> ${l.toUpperCase()} </a>`)} </div> </div> </div> </div> </div> <!-- Bottom Row: Navigation --> <div class="header-bottom" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <!-- Mobile Menu Overlay --> <div class="nav-overlay" data-astro-cid-3ef6ksr2></div> <!-- Navigation --> <nav class="nav" data-astro-cid-3ef6ksr2> <!-- Mobile Nav Header (Inside Drawer) --> <div class="mobile-nav-header" data-astro-cid-3ef6ksr2> <div class="logo-symbol" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" data-astro-cid-3ef6ksr2></path> </svg> </div> <span class="mobile-nav-title" data-astro-cid-3ef6ksr2>${siteData.shortName}</span> <button class="mobile-close-btn" aria-label="Close" data-astro-cid-3ef6ksr2> &times; </button> </div> <!-- Mobile Language Buttons --> <div class="header-lang-wrapper mobile-lang-wrapper" data-astro-cid-3ef6ksr2> <div class="header-lang-buttons" data-astro-cid-3ef6ksr2> ${SUPPORTED_LANGUAGES.map((l) => renderTemplate`<a${addAttribute(getLocalizedPath(currentPath, l), "href")}${addAttribute(`lang-btn ${l === lang ? "active" : ""}`, "class")} data-astro-cid-3ef6ksr2> ${l.toUpperCase()} </a>`)} </div> </div> <!-- Mobile Search (Visible only inside mobile menu) --> <div class="mobile-search" data-astro-cid-3ef6ksr2> <form${addAttribute(`/ob-simatic/${lang}/arama`, "action")} method="get" data-astro-cid-3ef6ksr2> <input type="text" name="q"${addAttribute(searchPlaceholderMobile, "placeholder")} data-astro-cid-3ef6ksr2> <button type="submit"${addAttribute(ui?.buttons?.search || "Ara", "title")} data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="11" cy="11" r="8" data-astro-cid-3ef6ksr2></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-3ef6ksr2></line> </svg> </button> </form> </div> <ul class="nav-list" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "MegaMenu", $$MegaMenu, { "lang": lang, "data-astro-cid-3ef6ksr2": true })} </ul> </nav> </div> </div> ${renderComponent($$result, "CartDrawer", $$CartDrawer, { "lang": lang, "ui": ui, "data-astro-cid-3ef6ksr2": true })} </header> ${renderScript($$result, "C:/Users/muhammed/Desktop/code/aaa/src/components/Header.astro?astro&type=script&index=0&lang.ts")}  ${renderScript($$result, "C:/Users/muhammed/Desktop/code/aaa/src/components/Header.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://yosogo.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "tr", ui, site } = Astro2.props;
  const baseUrl = `/ob-simatic/${lang}`;
  const siteInfo = site || siteData;
  const quickLinksTitle = ui?.footer?.quickLinks || "H\u0131zl\u0131 Eri\u015Fim";
  const contactTitle = ui?.footer?.contactInfo || "\u0130leti\u015Fim";
  const homeText = ui?.nav?.home || "Anasayfa";
  const aboutText = ui?.footer?.about || "Kurumsal";
  const contactText = ui?.footer?.contact || "\u0130leti\u015Fim";
  ui?.footer?.privacy || "KVKK Ayd\u0131nlatma Metni";
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>${siteInfo.siteName || siteInfo.name}</h3> <p data-astro-cid-sz7xmlte> ${siteInfo.seo?.description || siteInfo.description} </p> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>${quickLinksTitle}</h3> <ul class="quick-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a${addAttribute(`${baseUrl}`, "href")} data-astro-cid-sz7xmlte>${homeText}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(`${baseUrl}/kurumsal`, "href")} data-astro-cid-sz7xmlte>${aboutText}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(`${baseUrl}/iletisim`, "href")} data-astro-cid-sz7xmlte>${contactText}</a></li> </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>${contactTitle}</h3> <div class="contact-item" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-sz7xmlte></path><circle cx="12" cy="10" r="3" data-astro-cid-sz7xmlte></circle></svg> <span data-astro-cid-sz7xmlte>${siteInfo.contact?.address || siteData.contact.address}</span> </div> <div class="contact-item" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-sz7xmlte></path></svg> <span data-astro-cid-sz7xmlte>${siteInfo.contact?.phone || siteData.contact.phone}</span> </div> <div class="contact-item" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-sz7xmlte></path><polyline points="22,6 12,13 2,6" data-astro-cid-sz7xmlte></polyline></svg> <span data-astro-cid-sz7xmlte>${siteInfo.contact?.email || siteData.contact.email}</span> </div> </div> </div> <div class="bottom-bar" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${siteData.copyright}</p> </div> </footer> `;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b, siteData as s };
