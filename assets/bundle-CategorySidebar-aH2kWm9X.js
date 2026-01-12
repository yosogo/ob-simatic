import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './bundle-astro/server-CFdTn5Vq.js';
import 'piccolore';
import 'html-escaper';
import 'clsx';
import data from './bundle-data-BFSAed7v.js';
/* empty css                                */

const $$Astro = createAstro("https://yosogo.github.io");
const $$CategorySidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategorySidebar;
  const {
    currentCategorySlug = "",
    categories = [],
    brands = [{ name: "Siemens", count: 12 }],
    blogLinks = [],
    lang = "tr"
  } = Astro2.props;
  const baseUrl = `/ob-simatic/${lang}`;
  const categoriesTitle = lang === "ar" ? "\u0627\u0644\u0641\u0626\u0627\u062A" : lang === "en" ? "Categories" : "Kategoriler";
  function getCategoryChain(slug) {
    const chain = [];
    let currentSlug = slug;
    while (currentSlug && data.categories[currentSlug]) {
      const cat = data.categories[currentSlug];
      chain.unshift({
        slug: currentSlug,
        name: cat.name,
        title: cat.title || cat.name
      });
      currentSlug = cat.parentSlug;
    }
    return chain;
  }
  const categoryChain = currentCategorySlug ? getCategoryChain(currentCategorySlug) : [];
  const topLevelCategories = Object.entries(data.categories).filter(([slug, cat]) => cat.parentSlug === null).map(([slug, cat]) => ({
    slug,
    name: cat.name,
    title: cat.title
  }));
  const currentCategory = data.categories[currentCategorySlug];
  const parentSlug = currentCategory?.parentSlug;
  parentSlug ? Object.entries(data.categories).filter(([slug, cat]) => cat.parentSlug === parentSlug).map(([slug, cat]) => ({
    slug,
    name: cat.name,
    title: cat.title,
    isActive: slug === currentCategorySlug
  })) : [];
  const childCategories = Object.entries(data.categories).filter(([slug, cat]) => cat.parentSlug === currentCategorySlug).map(([slug, cat]) => ({
    slug,
    name: cat.name,
    title: cat.title
  }));
  return renderTemplate`${maybeRenderHead()}<aside class="category-sidebar" data-astro-cid-u2obp545> <!-- Category Chain (breadcrumb style) --> ${categoryChain.length > 0 && renderTemplate`<div class="sidebar-section category-nav" data-astro-cid-u2obp545> <h3 class="sidebar-title" data-astro-cid-u2obp545>${categoriesTitle}</h3> <ul class="nav-list category-chain" data-astro-cid-u2obp545> ${categoryChain.map((cat, index) => renderTemplate`<li${addAttribute(
    index === categoryChain.length - 1 ? "active" : "",
    "class"
  )}${addAttribute(`padding-left: ${index * 15}px`, "style")} data-astro-cid-u2obp545> <a${addAttribute(`${baseUrl}/${cat.slug}`, "href")} data-astro-cid-u2obp545> ${index > 0 && renderTemplate`<span class="chain-arrow" data-astro-cid-u2obp545>└</span>`} ${cat.title} </a> </li>`)} </ul>  ${childCategories.length > 0 && renderTemplate`<ul class="nav-list sub-categories" data-astro-cid-u2obp545> ${childCategories.map((cat) => renderTemplate`<li${addAttribute(`padding-left: ${categoryChain.length * 15}px`, "style")} data-astro-cid-u2obp545> <a${addAttribute(`${baseUrl}/${cat.slug}`, "href")} data-astro-cid-u2obp545> <span class="chain-arrow" data-astro-cid-u2obp545>└</span> ${cat.title} </a> </li>`)} </ul>`} </div>`} <!-- Fallback: Top-Level Categories (if no current category) --> ${categoryChain.length === 0 && renderTemplate`<div class="sidebar-section category-nav" data-astro-cid-u2obp545> <h3 class="sidebar-title" data-astro-cid-u2obp545>${categoriesTitle}</h3> <ul class="nav-list" data-astro-cid-u2obp545> ${topLevelCategories.map((cat) => renderTemplate`<li data-astro-cid-u2obp545> <a${addAttribute(`${baseUrl}/${cat.slug}`, "href")} data-astro-cid-u2obp545> ${cat.title || cat.name} </a> </li>`)} </ul> </div>`} </aside> `;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/CategorySidebar.astro", void 0);

export { $$CategorySidebar as $ };
