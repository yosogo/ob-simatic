import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, d as renderTemplate } from './bundle-astro/server-CFdTn5Vq.js';
import 'piccolore';
import 'html-escaper';
import { $ as $$AddToCartBtn } from './bundle-AddToCartBtn-Cyc3RW9N.js';
/* empty css                               */

const $$Astro = createAstro("https://yosogo.github.io");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    image,
    brand,
    title,
    code,
    href = "#",
    ui,
    categorySlug = "",
    price = 0
  } = Astro2.props;
  const imagePath = image.startsWith("/") ? `/ob-simatic${image}` : image;
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-astro-cid-tjdfhdqb> <a${addAttribute(href, "href")} class="product-image skeleton-loader" data-astro-cid-tjdfhdqb> <img${addAttribute(imagePath, "src")}${addAttribute(title, "alt")} loading="lazy" onload="this.parentElement.classList.remove('skeleton-loader'); this.classList.add('loaded')" data-astro-cid-tjdfhdqb> </a> <div class="product-info" data-astro-cid-tjdfhdqb> <a href="#" class="product-brand" data-astro-cid-tjdfhdqb>${brand}</a> <a${addAttribute(href, "href")} class="product-title"${addAttribute(title, "title")} data-astro-cid-tjdfhdqb> <span class="product-code" data-astro-cid-tjdfhdqb>${code}</span> ${title} </a> </div> <div class="product-actions" style="margin-top: 15px;" data-astro-cid-tjdfhdqb> ${renderComponent($$result, "AddToCartBtn", $$AddToCartBtn, { "product": { id: code, title, image, brand, categorySlug, price }, "ui": ui, "variant": "secondary", "data-astro-cid-tjdfhdqb": true })} </div> </div> `;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
