const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

const SUPPORTED_LANGUAGES = ["tr", "en", "ar"];
const DEFAULT_LANGUAGE = "tr";
const RTL_LANGUAGES = ["ar"];
function isRTL(lang) {
  return RTL_LANGUAGES.includes(lang);
}
function getLocalizedPath(path, lang) {
  const basePath = "/ob-simatic";
  const cleanPath = path.replace(/^\/ob-simatic\/?/, "").replace(/^\/?/, "");
  let pathWithoutLang = cleanPath;
  for (const l of SUPPORTED_LANGUAGES) {
    if (cleanPath.startsWith(`${l}/`) || cleanPath === l) {
      pathWithoutLang = cleanPath.substring(l.length).replace(/^\//, "");
      break;
    }
  }
  if (pathWithoutLang) {
    return `${basePath}/${lang}/${pathWithoutLang}`;
  }
  return `${basePath}/${lang}`;
}
async function getUI(lang) {
  try {
    const ui = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/ar/ui.json": () => import('./bundle-ui-TDl7HkfQ.js'),"../data/en/ui.json": () => import('./bundle-ui-DoK1oza5.js'),"../data/tr/ui.json": () => import('./bundle-ui-DRslIyPC.js')})), `../data/${lang}/ui.json`, 4);
    return ui.default;
  } catch {
    const ui = await import('./bundle-ui-DRslIyPC.js');
    return ui.default;
  }
}
async function getSite(lang) {
  try {
    const site = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/ar/site.json": () => import('./bundle-site-CtzCXM9b.js'),"../data/en/site.json": () => import('./bundle-site-C7kJ-Cmf.js'),"../data/tr/site.json": () => import('./bundle-site-CXYh_uU-.js')})), `../data/${lang}/site.json`, 4);
    return site.default;
  } catch {
    const site = await import('./bundle-site-CXYh_uU-.js');
    return site.default;
  }
}
async function getData() {
  const data = await import('./bundle-data-BFSAed7v.js');
  return data.default;
}
async function getPageData(lang) {
  const [ui, site, data] = await Promise.all([
    getUI(lang),
    getSite(lang),
    getData()
  ]);
  return { ui, site, data, lang, isRTL: isRTL(lang) };
}

export { DEFAULT_LANGUAGE as D, SUPPORTED_LANGUAGES as S, getLocalizedPath as a, getPageData as g };
