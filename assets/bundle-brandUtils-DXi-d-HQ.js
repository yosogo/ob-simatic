import fs from 'fs';
import path from 'path';
import { f as formatUrlSlug, c as categoriesData } from './bundle-categories-BRqQzMPB.js';

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
function getProductImages(productId) {
  if (!productId) return [];
  const safeId = formatUrlSlug(productId);
  const productDir = path.join(process.cwd(), "public", "images", "products", safeId);
  try {
    if (!fs.existsSync(productDir)) {
      return [];
    }
    const files = fs.readdirSync(productDir);
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    return images.map((img) => `${BASE_URL}/images/products/${safeId}/${img}`);
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

function normalizeBrandName(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function getProductBrandSlug(categorySlug) {
  if (!categorySlug || !categoriesData[categorySlug]) return "Other";
  let current = categoriesData[categorySlug];
  const chain = [current];
  while (current.parentSlug && categoriesData[current.parentSlug]) {
    current = categoriesData[current.parentSlug];
    chain.unshift(current);
  }
  if (chain.length >= 2) {
    const brandCategory = chain[1];
    const brandName = brandCategory.i18n?.["en"]?.name || brandCategory.slug;
    return normalizeBrandName(brandName);
  }
  return "Other";
}
function getBrandNameFromSlug(slug, lang) {
  if (slug === "Other" || slug === "other") {
    return lang === "ar" ? "آخر" : lang === "en" ? "Other" : "Diğer";
  }
  const allCategories = Object.values(categoriesData);
  const matchingCat = allCategories.find((cat) => {
    const enName = cat.i18n?.["en"]?.name || cat.slug;
    return normalizeBrandName(enName) === slug;
  });
  if (matchingCat) {
    const cat = matchingCat;
    return cat.i18n[lang]?.name || cat.i18n["en"]?.name || cat.i18n["tr"]?.name || slug;
  }
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export { getBrandNameFromSlug as a, getProductImage as b, getProductImages as c, getProductBrandSlug as g };
