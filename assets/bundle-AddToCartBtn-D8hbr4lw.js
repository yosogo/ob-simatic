import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderScript, d as renderTemplate, r as renderComponent, F as Fragment } from './bundle-astro/server-CFdTn5Vq.js';
import 'piccolore';
import 'html-escaper';
/* empty css                              */

const $$Astro = createAstro("https://yosogo.github.io");
const $$AddToCartBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddToCartBtn;
  const { product, ui, variant = "primary" } = Astro2.props;
  const btnText = ui?.cart?.addToCart || "Add to Cart";
  ui?.cart?.added || "Added!";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`add-to-cart-btn ${variant}`, "class")}${addAttribute(JSON.stringify(product), "data-product")}${addAttribute(btnText, "aria-label")} data-astro-cid-qcxqbkbb> ${variant === "icon" ? renderTemplate`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qcxqbkbb> <path d="M12 5v14M5 12h14" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qcxqbkbb></path> </svg>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qcxqbkbb": true }, { "default": ($$result2) => renderTemplate` <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qcxqbkbb> <circle cx="9" cy="21" r="1" data-astro-cid-qcxqbkbb></circle> <circle cx="20" cy="21" r="1" data-astro-cid-qcxqbkbb></circle> <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" data-astro-cid-qcxqbkbb></path> </svg> <span class="btn-text" data-astro-cid-qcxqbkbb>${btnText}</span> ` })}`} </button> ${renderScript($$result, "C:/Users/muhammed/Desktop/code/aaa/src/components/AddToCartBtn.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/muhammed/Desktop/code/aaa/src/components/AddToCartBtn.astro", void 0);

export { $$AddToCartBtn as $ };
