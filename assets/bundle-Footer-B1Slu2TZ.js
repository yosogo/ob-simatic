import { b as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, d as renderScript, f as defineStyleVars, g as renderHead, h as renderSlot } from './bundle-astro/server-7QLI93ZA.js';
import 'piccolore';
/* empty css                                  */
import 'clsx';

const about = {"ar":{"aboutText":"بخبرة تمتد لأكثر من 15 عاماً، نقدم شراكة تجارية موثوقة في منتجات الأتمتة الصناعية وخدمات الدعم الفني. نوفر خدمات البيع والشراء والدعم الفني لأجهزة سيمنس PLC ولوحات التشغيل HMI والمحركات ومنتجات الأتمتة الأخرى.\n\nنهدف إلى تقديم منتجات عالية الجودة بأفضل الأسعار لعملائنا وأن نكون شريكاً تجارياً موثوقاً. بفريقنا المحترف، نقدم الحلول الأكثر دقة لاحتياجاتك في الأتمتة الصناعية.","aboutTitle":"من نحن","missionText":"زيادة كفاءة عمليات الإنتاج من خلال تقديم منتجات وخدمات عالية الجودة لعملائنا في قطاع الأتمتة الصناعية، وبناء علاقات ثقة طويلة الأمد مع شركائنا التجاريين.","missionTitle":"مهمتنا","subtitle":"عن أو بي سيماتيك للأتمتة","title":"من نحن","values":["الموثوقية","الجودة","رضا العملاء","الاحترافية","التطوير المستمر"],"valuesTitle":"قيمنا","visionText":"أن نصبح المزود الرائد لحلول الأتمتة الصناعية في تركيا وعلامة تجارية منافسة عالمياً.","visionTitle":"رؤيتنا"},"en":{"aboutText":"As a company with 15 years of experience, we provide reliable business partnership in industrial automation products and technical support services. We offer sales, purchasing and technical service for Siemens PLC, HMI Panel, Drives and other automation products.\n\nWe aim to offer our customers the highest quality products at the most competitive prices and to be a reliable business partner. With our professional team, we produce the most accurate solutions for your industrial automation needs.","aboutTitle":"About Us","missionText":"To increase the efficiency of production processes by providing the highest quality products and services to our customers in the industrial automation sector and to establish long-term trust relationships with our business partners.","missionTitle":"Our Mission","subtitle":"About OB Simatic Automation","title":"About Us","values":["Reliability","Quality","Customer Satisfaction","Professionalism","Continuous Improvement"],"valuesTitle":"Our Values","visionText":"To become Turkey's leading industrial automation solutions provider and become a globally competitive brand.","visionTitle":"Our Vision"},"tr":{"aboutText":"15 yıllık deneyime sahip bir firma olarak, endüstriyel otomasyon ürünleri ve teknik destek hizmetlerinde güvenli iş ortaklığı sunmaktadır. Siemens PLC, HMI Panel, Sürücü ve diğer otomasyon ürünlerinde satış, satın alma ve teknik servis hizmetleri vermekteyiz.\n\nMüşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmayı ve güvenilir bir iş ortağı olmayı hedefliyoruz. Profesyonel ekibimizle, endüstriyel otomasyon ihtiyaçlarınız için en doğru çözümleri üretiyoruz.","aboutTitle":"Hakkımızda","missionText":"Endüstriyel otomasyon sektöründe müşterilerimize en kaliteli ürünleri ve hizmetleri sunarak, üretim süreçlerinin verimliliğini artırmak ve iş ortaklarımızla uzun vadeli güven ilişkisi kurmaktır.","missionTitle":"Misyonumuz","subtitle":"OB Simatic Otomasyon Hakkında","title":"Kurumsal","values":["Güvenilirlik","Kalite","Müşteri Memnuniyeti","Profesyonellik","Sürekli Gelişim"],"valuesTitle":"Değerlerimiz","visionText":"Türkiye'nin önde gelen endüstriyel otomasyon çözümleri sağlayıcısı olmak ve global pazarda rekabet edebilir bir marka haline gelmektir.","visionTitle":"Vizyonumuz"}};
const campaign_popup = {"enabled":false};
const colors = {"accent":"#e7af40","primary":"#db9e2e","primaryRgb":"219, 158, 46","secondary":"#333333"};
const contact$1 = {"address":"ob-ic , Kilis , Türe","email":"info@obsimatic.com","i18n":{"ar":{"address":"","email":"","phone":"","whatsapp":""},"en":{"address":"","email":"","phone":"","whatsapp":""},"tr":{"address":"","email":"","phone":"","whatsapp":""}},"phone":"+90 9554465","whatsapp":"905522323"};
const copyright = "Ekkeri. Tüm hakları saklıdır.";
const default_images = {"category":"/images/categories/labeip2025-9-6--19-10-023.png"};
const deployment = {"repoUrl":""};
const description = "15 yıllık deneyime sahip bir firma olarak, endüstriyel otomasyon ürünleri ve teknik destek hizmetlerinde güvenli iş ortaklığı sunmaktadır.";
const hero = {"backgroundImage":""};
const logo = {"text1":"OB","text2":"simatic otomasyon"};
const messages$1 = {"cart_checkout":{"ar":"مرحباً، أود طلب المنتجات التالية:","en":"Hello, I would like to order the following products:","tr":"Merhaba, aşağıdaki ürünler için sipariş vermek istiyorum:"},"floating_button":{"ar":"مرحباً، لدي استفسار.","en":"Hello, I have a question.","tr":"Merhaba, bir sorum var."},"product_inquiry":{"ar":"أرغب في معرفة عروضكم التي تخص هذا المنتج. المعرف: {id}","en":"I would like to know your offers regarding this product. ID: {id}","tr":"Bu ürünle ilgili tekliflerinizi öğrenmek istiyorum. ID: {id}"}};
const metaDescription = "PLC, Sürücü, Panel ve Endüstriyel Otomasyon Ürünleri Tedarikçisi";
const name = "";
const shortName = "OB Simatic";
const social = {"facebook":"#","instagram":"#","linkedin":"#","twitter":"","youtube":""};
const siteData = {
  about,
  campaign_popup,
  colors,
  contact: contact$1,
  copyright,
  default_images,
  deployment,
  description,
  hero,
  logo,
  messages: messages$1,
  metaDescription,
  name,
  shortName,
  social,
};

const site = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about,
  campaign_popup,
  colors,
  contact: contact$1,
  copyright,
  default: siteData,
  default_images,
  deployment,
  description,
  hero,
  logo,
  messages: messages$1,
  metaDescription,
  name,
  shortName,
  social
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://www.ob-simatic.com");
const $$FloatingButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FloatingButtons;
  const lang = Astro2.currentLocale || "tr";
  const customSettings = siteData.messages.floating_button_custom || {};
  const isCustomEnabled = customSettings.enabled === true;
  const customCode = customSettings.code || "";
  const contact = siteData.contact || {};
  const localizedContent = contact.i18n?.[lang] || {};
  const waRaw = localizedContent.whatsapp || contact.whatsapp || siteData.contact.whatsapp;
  const waNumber = waRaw.replace(/\D/g, "");
  const msgTemplate = siteData.messages.floating_button[lang] || siteData.messages.floating_button["tr"];
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(msgTemplate)}`;
  return renderTemplate`${isCustomEnabled ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(customCode)}` })}` : renderTemplate`${maybeRenderHead()}<div class="floating-buttons" data-astro-cid-v4o2aonp><a${addAttribute(waLink, "href")} class="float-btn whatsapp" target="_blank" title="WhatsApp" data-astro-cid-v4o2aonp><svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-v4o2aonp><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-v4o2aonp></path></svg></a><a href="tel:+905396127564" class="float-btn phone" title="Bizi arayın" data-astro-cid-v4o2aonp><svg viewBox="0 0 24 24" fill="currentColor" data-astro-cid-v4o2aonp><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" data-astro-cid-v4o2aonp></path></svg></a></div>`}`;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/FloatingButtons.astro", void 0);

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

const surucu = {"slug":"surucu","parentSlug":null,"i18n":{"tr":{"name":"Sürücü","title":"Sürücü - Hareket Kontrol Sistemleri","description":"Sürücü ve frekans invertörleri"},"en":{"name":"Sürücü","title":"Sürücü - Hareket Kontrol Sistemleri","description":"Sürücü ve frekans invertörleri"},"ar":{"name":"driver","title":"Sürücü - Hareket Kontrol Sistemleri","description":"Sürücü ve frekans invertörleri"}},"order":5};
const panel = {"slug":"panel","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Panel","title":"Panel - Operatör Panelleri ve HMI","description":"Operatör panelleri ve HMI sistemleri"},"en":{"name":"Panel","title":"Panel - Operatör Panelleri ve HMI","description":"Operatör panelleri ve HMI sistemleri"},"ar":{"name":"Panel","title":"Panel - Operatör Panelleri ve HMI","description":"Operatör panelleri ve HMI sistemleri"}},"order":3};
const sim = {"slug":"sim","parentSlug":null,"order":2,"i18n":{"tr":{"name":"to","title":"","description":""},"en":{"name":"vi","title":"","description":""},"ar":{"name":"we","title":"","description":""}}};
const plc = {"slug":"plc","parentSlug":null,"order":1,"i18n":{"tr":{"name":"plc","title":"","description":""},"en":{"name":"plc","title":"","description":""},"ar":{"name":"plc","title":"","description":""}}};
const simens = {"slug":"simens","parentSlug":"siemens-plc","i18n":{"tr":{"name":"Yeni Kategori","title":"","description":""},"en":{"name":"New Category","title":"","description":""},"ar":{"name":"فئة جديدة","title":"","description":""}},"order":0};
const categories = {
  "8888": {"slug":"8888","parentSlug":"9999","order":0,"i18n":{"tr":{"name":"يلايبلا","title":"","description":""},"en":{"name":"يلايبلا","title":"","description":""},"ar":{"name":"يلايبلا","title":"","description":""}}},
  "9999": {"slug":"9999","parentSlug":"plc","order":0,"i18n":{"tr":{"name":"ياي","title":"","description":""},"en":{"name":"ياي","title":"","description":""},"ar":{"name":"ياي","title":"","description":""}}},
  "siemens-plc": {"slug":"siemens-plc","parentSlug":"plc","i18n":{"tr":{"name":"SIEMENS","title":"SIEMENS PLC","description":"SIEMENS PLC ürünleri"},"en":{"name":"SIEMENS","title":"SIEMENS PLC","description":"SIEMENS PLC ürünleri"},"ar":{"name":"SIEMENS","title":"SIEMENS PLC","description":"SIEMENS PLC ürünleri"}},"order":0},
  "simatic-s7-1500": {"slug":"simatic-s7-1500","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-1500","title":"SIMATIC S7-1500 PLC","description":"SIEMENS SIMATIC S7-1500 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-1500","title":"SIMATIC S7-1500 PLC","description":"SIEMENS SIMATIC S7-1500 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-1500","title":"SIMATIC S7-1500 PLC","description":"SIEMENS SIMATIC S7-1500 serisi PLC ürünleri"}},"order":0},
  "simatic-s7-1200": {"slug":"simatic-s7-1200","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-1200","title":"SIMATIC S7-1200 PLC","description":"SIEMENS SIMATIC S7-1200 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-1200","title":"SIMATIC S7-1200 PLC","description":"SIEMENS SIMATIC S7-1200 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-1200","title":"SIMATIC S7-1200 PLC","description":"SIEMENS SIMATIC S7-1200 serisi PLC ürünleri"}},"order":0},
  "simatic-s7-300": {"slug":"simatic-s7-300","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-300","title":"SIMATIC S7-300 PLC","description":"SIEMENS SIMATIC S7-300 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-300","title":"SIMATIC S7-300 PLC","description":"SIEMENS SIMATIC S7-300 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-300","title":"SIMATIC S7-300 PLC","description":"SIEMENS SIMATIC S7-300 serisi PLC ürünleri"}},"order":0},
  "simatic-s7-400": {"slug":"simatic-s7-400","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-400","title":"SIMATIC S7-400 PLC","description":"SIEMENS SIMATIC S7-400 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-400","title":"SIMATIC S7-400 PLC","description":"SIEMENS SIMATIC S7-400 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-400","title":"SIMATIC S7-400 PLC","description":"SIEMENS SIMATIC S7-400 serisi PLC ürünleri"}},"order":0},
  "simatic-et200": {"slug":"simatic-et200","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC ET200","title":"SIMATIC ET200 Dağıtılmış I/O","description":"SIEMENS ET200 dağıtılmış giriş çıkış sistemleri"},"en":{"name":"SIMATIC ET200","title":"SIMATIC ET200 Dağıtılmış I/O","description":"SIEMENS ET200 dağıtılmış giriş çıkış sistemleri"},"ar":{"name":"SIMATIC ET200","title":"SIMATIC ET200 Dağıtılmış I/O","description":"SIEMENS ET200 dağıtılmış giriş çıkış sistemleri"}},"order":0},
  "siemens-logo": {"slug":"siemens-logo","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"LOGO!","title":"SIEMENS LOGO!","description":"SIEMENS LOGO! lojik modülleri"},"en":{"name":"LOGO!","title":"SIEMENS LOGO!","description":"SIEMENS LOGO! lojik modülleri"},"ar":{"name":"LOGO!","title":"SIEMENS LOGO!","description":"SIEMENS LOGO! lojik modülleri"}},"order":0},
  "schneider-plc": {"slug":"schneider-plc","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"aasassas","title":"SCHNEIDER PLC","description":"SCHNEIDER PLC ürünleri"},"en":{"name":"aasassas","title":"SCHNEIDER PLC","description":"SCHNEIDER PLC ürünleri"},"ar":{"name":"aasassas","title":"SCHNEIDER PLC","description":"SCHNEIDER PLC ürünleri"}},"order":0},
  "s7-300-cpu": {"slug":"s7-300-cpu","parentSlug":"simatic-s7-300","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-300 CPU","title":"SIMATIC S7-300 CPU","description":"S7-300 CPU modülleri"},"en":{"name":"S7-300 CPU","title":"SIMATIC S7-300 CPU","description":"S7-300 CPU modülleri"},"ar":{"name":"S7-300 CPU","title":"SIMATIC S7-300 CPU","description":"S7-300 CPU modülleri"}},"order":0},
  "s7-300-dijital-moduller": {"slug":"s7-300-dijital-moduller","parentSlug":"simatic-s7-300","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-300 Dijital Modüller","title":"S7-300 Dijital Giriş/Çıkış Modülleri","description":"S7-300 dijital I/O modülleri"},"en":{"name":"S7-300 Dijital Modüller","title":"S7-300 Dijital Giriş/Çıkış Modülleri","description":"S7-300 dijital I/O modülleri"},"ar":{"name":"S7-300 Dijital Modüller","title":"S7-300 Dijital Giriş/Çıkış Modülleri","description":"S7-300 dijital I/O modülleri"}},"order":0},
  "s7-300-analog-moduller": {"slug":"s7-300-analog-moduller","parentSlug":"simatic-s7-300","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-300 Analog Modüller","title":"S7-300 Analog Giriş/Çıkış Modülleri","description":"S7-300 analog I/O modülleri"},"en":{"name":"S7-300 Analog Modüller","title":"S7-300 Analog Giriş/Çıkış Modülleri","description":"S7-300 analog I/O modülleri"},"ar":{"name":"S7-300 Analog Modüller","title":"S7-300 Analog Giriş/Çıkış Modülleri","description":"S7-300 analog I/O modülleri"}},"order":0},
  "s7-1500-cpu": {"slug":"s7-1500-cpu","parentSlug":"simatic-s7-1500","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-1500 CPU","title":"SIMATIC S7-1500 CPU","description":"S7-1500 CPU modülleri"},"en":{"name":"S7-1500 CPU","title":"SIMATIC S7-1500 CPU","description":"S7-1500 CPU modülleri"},"ar":{"name":"S7-1500 CPU","title":"SIMATIC S7-1500 CPU","description":"S7-1500 CPU modülleri"}},"order":0},
  "s7-400-cpu": {"slug":"s7-400-cpu","parentSlug":"simatic-s7-400","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"CPU Modülleri","title":"S7-400 CPU Modülleri","description":"S7-400 Merkezi İşlem Birimleri"},"en":{"name":"CPU Modülleri","title":"S7-400 CPU Modülleri","description":"S7-400 Merkezi İşlem Birimleri"},"ar":{"name":"CPU Modülleri","title":"S7-400 CPU Modülleri","description":"S7-400 Merkezi İşlem Birimleri"}},"order":0},
  "s7-400-dijital": {"slug":"s7-400-dijital","parentSlug":"simatic-s7-400","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Dijital Modüller","title":"S7-400 Dijital Modüller","description":"S7-400 Dijital I/O"},"en":{"name":"Dijital Modüller","title":"S7-400 Dijital Modüller","description":"S7-400 Dijital I/O"},"ar":{"name":"Dijital Modüller","title":"S7-400 Dijital Modüller","description":"S7-400 Dijital I/O"}},"order":0},
  "s7-400-analog": {"slug":"s7-400-analog","parentSlug":"simatic-s7-400","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Analog Modüller","title":"S7-400 Analog Modüller","description":"S7-400 Analog I/O"},"en":{"name":"Analog Modüller","title":"S7-400 Analog Modüller","description":"S7-400 Analog I/O"},"ar":{"name":"Analog Modüller","title":"S7-400 Analog Modüller","description":"S7-400 Analog I/O"}},"order":0},
  "s7-1500-dijital-moduller": {"slug":"s7-1500-dijital-moduller","parentSlug":"simatic-s7-1500","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-1500 Dijital Modüller","title":"S7-1500 Dijital Giriş/Çıkış Modülleri","description":"S7-1500 dijital I/O modülleri"},"en":{"name":"S7-1500 Dijital Modüller","title":"S7-1500 Dijital Giriş/Çıkış Modülleri","description":"S7-1500 dijital I/O modülleri"},"ar":{"name":"S7-1500 Dijital Modüller","title":"S7-1500 Dijital Giriş/Çıkış Modülleri","description":"S7-1500 dijital I/O modülleri"}},"order":0},
  surucu,
  "siemens-surucu": {"slug":"siemens-surucu","parentSlug":"surucu","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"عععع","title":"SIEMENS Sürücüler","description":"SIEMENS SINAMICS sürücü ürünleri"},"en":{"name":"عععع","title":"SIEMENS Sürücüler","description":"SIEMENS SINAMICS sürücü ürünleri"},"ar":{"name":"عععع","title":"SIEMENS Sürücüler","description":"SIEMENS SINAMICS sürücü ürünleri"}},"order":0},
  "sinamics-g120": {"slug":"sinamics-g120","parentSlug":"siemens-surucu","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SINAMICS G1206666","title":"SINAMICS G120 Serisi","description":"SINAMICS G120 serisi sürücüler"},"en":{"name":"SINAMICS G1206666","title":"SINAMICS G120 Serisi","description":"SINAMICS G120 serisi sürücüler"},"ar":{"name":"SINAMICS G1206666","title":"SINAMICS G120 Serisi","description":"SINAMICS G120 serisi sürücüler"}},"order":0},
  panel,
  "siemens-panel": {"slug":"siemens-panel","parentSlug":"panel","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIEMENS","title":"SIEMENS Operatör Panelleri","description":"SIEMENS SIMATIC HMI panelleri"},"en":{"name":"SIEMENS","title":"SIEMENS Operatör Panelleri","description":"SIEMENS SIMATIC HMI panelleri"},"ar":{"name":"SIEMENS","title":"SIEMENS Operatör Panelleri","description":"SIEMENS SIMATIC HMI panelleri"}},"order":0},
  "simatic-hmi-comfort": {"slug":"simatic-hmi-comfort","parentSlug":"siemens-panel","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC HMI Comfort","title":"SIMATIC HMI Comfort Paneller","description":"SIMATIC HMI Comfort serisi paneller"},"en":{"name":"SIMATIC HMI Comfort","title":"SIMATIC HMI Comfort Paneller","description":"SIMATIC HMI Comfort serisi paneller"},"ar":{"name":"SIMATIC HMI Comfort","title":"SIMATIC HMI Comfort Paneller","description":"SIMATIC HMI Comfort serisi paneller"}},"order":0},
  "simatic-hmi-basic": {"slug":"simatic-hmi-basic","parentSlug":"siemens-panel","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC HMI Basic","title":"SIMATIC HMI Basic Paneller","description":"SIMATIC HMI Basic serisi paneller"},"en":{"name":"SIMATIC HMI Basic","title":"SIMATIC HMI Basic Paneller","description":"SIMATIC HMI Basic serisi paneller"},"ar":{"name":"SIMATIC HMI Basic","title":"SIMATIC HMI Basic Paneller","description":"SIMATIC HMI Basic serisi paneller"}},"order":0},
  sim,
  plc,
  simens,
  "new-category-1770131692905": {"slug":"new-category-1770131692905","parentSlug":null,"image":"","i18n":{"tr":{"name":"Yeni Kategori","title":"","description":""},"en":{"name":"New Category","title":"","description":""},"ar":{"name":"الالاالا","title":"","description":""}},"order":4},
};

const TM221CE16R = {"id":"TM221CE16R","brand":"Schneider Electric","categorySlug":"schneider-plc","price":245,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"Schneider Electric, Modicon M221, 16 IO Relay Ethernet"},"en":{"title":"Schneider Electric, Modicon M221, 16 IO Relay Ethernet"},"ar":{"title":"Schneider Electric, Modicon M221, 16 IO Relay Ethernet"}}};
const TM241CE24T = {"id":"TM241CE24T","brand":"Schneider Electric","categorySlug":"abb-plc","price":450,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"Schneider Electric, Modicon M241, 24 IO Transistor PNP Ethernet"},"en":{"title":"Schneider Electric, Modicon M241, 24 IO Transistor PNP Ethernet"},"ar":{"title":"Schneider Electric, Modicon M241, 24 IO Transistor PNP Ethernet"}}};
const products = {
  "56445": {"id":"56445","categorySlug":"sinamics-g120","price":555,"translations":{"ar":{"keys":[]},"en":{"keys":[]},"tr":{"keys":[]}},"i18n":{"ar":{"title":""},"en":{"title":""},"tr":{"title":""}}},
  "6ES7331-7KF02-0AB0": {"id":"6ES7331-7KF02-0AB0","brand":"Siemens","categorySlug":"sinamics-g120","price":125,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC S7-300, ANALOG INPUT SM 331"},"en":{"title":"SIMATIC S7-300, ANALOG INPUT SM 331"},"ar":{"title":"SIMATIC S7-300, ANALOG INPUT SM 331"}},"translations":{"ar":{"keys":[{"key":"التواجد","value":"متوفر"}]},"en":{"keys":[{"key":"founded","value":"yes"}]},"tr":{"keys":[{"key":"","value":""}]}}},
  "6ES7315-2AH14-0AB0": {"id":"6ES7315-2AH14-0AB0","brand":"Siemens","categorySlug":"sinamics-g120","price":2850,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC S7-300, CPU 315-2DP"},"en":{"title":"SIMATIC S7-300, CPU 315-2DP"},"ar":{"title":"SIMATIC S7-300, CPU 315-2DP"}}},
  "6ES7516-3AP03-0AB0": {"id":"6ES7516-3AP03-0AB0","brand":"Siemens","categorySlug":"s7-1500-cpu","price":88,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"ar":{"title":"وحدة المعالجة المركزية S7-1500"},"en":{"title":"S7-1500 CPU Module"},"tr":{"title":"S7-1500 CPU Ünitesi"}}},
  "6ES7515-2AN03-0AB0": {"id":"6ES7515-2AN03-0AB0","brand":"Siemens","categorySlug":"s7-1500-cpu","price":"contact","inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"S7-1500 CPU 1515-2PN 1 MB + 4.5MB PROFINET"},"en":{"title":"S7-1500 CPU 1515-2PN 1 MB + 4.5MB PROFINET"},"ar":{"title":"S7-1500 CPU 1515-2PN 1 MB + 4.5MB PROFINET"}}},
  TM221CE16R,
  TM241CE24T,
  "1SAP120600R0071": {"id":"1SAP120600R0071","brand":"ABB","categorySlug":"abb-plc","price":320,"inStock":false,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"ABB, AC500-eCo, PM554-TP-ETH CPU"},"en":{"title":"ABB, AC500-eCo, PM554-TP-ETH CPU"},"ar":{"title":"ABB, AC500-eCo, PM554-TP-ETH CPU"}}},
  "3AXD50000038983": {"id":"3AXD50000038983","brand":"ABB","categorySlug":"sim","price":890,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"ABB, ACS580-01-018A-4, 7.5kW Drive"},"en":{"title":"ABB, ACS580-01-018A-4, 7.5kW Drive"},"ar":{"title":"ABB, ACS580-01-018A-4, 7.5kW Drive"}}},
  "6ES7513-1AM03-0AB0": {"id":"6ES7513-1AM03-0AB0","brand":"Siemens","categorySlug":"s7-1500-cpu","price":2950,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC S7-1500, CPU 1513-1 PN, CENTRAL"},"en":{"title":"SIMATIC S7-1500, CPU 1513-1 PN, CENTRAL"},"ar":{"title":"SIMATIC S7-1500, CPU 1513-1 PN, CENTRAL"}}},
  "6SL3210-5BE25-5UV0": {"id":"6SL3210-5BE25-5UV0","brand":"Siemens","categorySlug":"sinamics-v20","price":1850,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SINAMICS V20, 3AC 400V, 5.5kW"},"en":{"title":"SINAMICS V20, 3AC 400V, 5.5kW"},"ar":{"title":"SINAMICS V20, 3AC 400V, 5.5kW"}}},
  "6SL3210-5BE21-5UV0": {"id":"6SL3210-5BE21-5UV0","brand":"Siemens","categorySlug":"sinamics-v20","price":950,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SINAMICS V20, 3AC 400V, 1.5kW"},"en":{"title":"SINAMICS V20, 3AC 400V, 1.5kW"},"ar":{"title":"SINAMICS V20, 3AC 400V, 1.5kW"}}},
  "6AV2124-0GC01-0AX0": {"id":"6AV2124-0GC01-0AX0","brand":"Siemens","categorySlug":"simatic-hmi-comfort","price":3250,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC HMI TP700 Comfort Panel"},"en":{"title":"SIMATIC HMI TP700 Comfort Panel"},"ar":{"title":"SIMATIC HMI TP700 Comfort Panel"}}},
  "6AV2124-0JC01-0AX0": {"id":"6AV2124-0JC01-0AX0","brand":"Siemens","categorySlug":"simatic-hmi-comfort","price":4150,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC HMI TP900 Comfort Panel"},"en":{"title":"SIMATIC HMI TP900 Comfort Panel"},"ar":{"title":"SIMATIC HMI TP900 Comfort Panel"}}},
};

const SUPPORTED_LANGUAGES = ["tr", "en", "ar"];
const DEFAULT_LANGUAGE = "tr";
const RTL_LANGUAGES = ["ar"];
function isRTL(lang) {
  return RTL_LANGUAGES.includes(lang);
}
function getLocalizedPath(path, lang) {
  const base = "/".replace(/\/$/, "");
  let cleanPath = path;
  if (base && cleanPath.startsWith(base)) {
    cleanPath = cleanPath.slice(base.length);
  }
  cleanPath = cleanPath.replace(/^\//, "");
  let pathWithoutLang = cleanPath;
  for (const l of SUPPORTED_LANGUAGES) {
    if (cleanPath.startsWith(`${l}/`) || cleanPath === l) {
      pathWithoutLang = cleanPath.substring(l.length).replace(/^\//, "");
      break;
    }
  }
  let newPath;
  if (lang === DEFAULT_LANGUAGE) {
    newPath = `${base}/${pathWithoutLang}`;
  } else {
    newPath = `${base}/${lang}/${pathWithoutLang}`;
  }
  return newPath.replace(/\/{2,}/g, "/").replace(/\/+$/, "") || "/";
}
async function getUI(lang) {
  try {
    const ui = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/ar/ui.json": () => import('./bundle-ui-CKq_a5IA.js'),"../data/en/ui.json": () => import('./bundle-ui-e3gZMX9d.js'),"../data/tr/ui.json": () => import('./bundle-ui-CVDNvLTV.js')})), `../data/${lang}/ui.json`, 4);
    return ui.default;
  } catch {
    const ui = await import('./bundle-ui-CVDNvLTV.js');
    return ui.default;
  }
}
async function getSite(lang) {
  try {
    const site$1 = await Promise.resolve().then(() => site);
    const data = site$1.default;
    const localized = { ...data };
    if (data.about && data.about[lang]) {
      localized.about = {
        ...data.about[lang]
        // Spreads title, subtitle, aboutText, missionTitle...
      };
    } else {
      localized.about = data.about?.tr || {};
    }
    if (data.contact) {
      localized.contact = { ...data.contact };
      if (data.contact.i18n && data.contact.i18n[lang]) {
        const i18nContact = data.contact.i18n[lang];
        if (i18nContact.address) localized.contact.address = i18nContact.address;
        if (i18nContact.email) localized.contact.email = i18nContact.email;
        if (i18nContact.phone) localized.contact.phone = i18nContact.phone;
        if (i18nContact.whatsapp) localized.contact.whatsapp = i18nContact.whatsapp;
      }
    }
    if (data.messages) {
      localized.messages = {};
      Object.keys(data.messages).forEach((key) => {
        const msgObj = data.messages[key];
        if (msgObj && typeof msgObj === "object" && msgObj[lang]) {
          localized.messages[key] = msgObj[lang];
        } else if (key === "floating_button_custom") {
          localized.messages[key] = msgObj;
        } else {
          localized.messages[key] = msgObj;
        }
      });
    }
    if (!localized.seo) {
      localized.seo = {
        title: localized.shortName || "OB Simatic",
        description: localized.metaDescription || ""
      };
    }
    if (!localized.siteName) {
      localized.siteName = localized.shortName || "OB Simatic";
    }
    return localized;
  } catch (e) {
    console.error("Error loading site.json:", e);
    const site$1 = await Promise.resolve().then(() => site);
    return site$1.default;
  }
}
function getCategories() {
  return categories;
}
function getProducts() {
  return products;
}
async function getData() {
  return { categories: getCategories(), products: getProducts() };
}
async function getPageData(lang) {
  const [ui, site, data] = await Promise.all([
    getUI(lang),
    getSite(lang),
    getData()
  ]);
  return { ui, site, data, lang, isRTL: isRTL(lang) };
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro("https://www.ob-simatic.com");
const $$OrganizationSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OrganizationSchema;
  const { lang = "tr" } = Astro2.props;
  const siteEnv = "https://www.ob-simatic.com".replace(
    /\/$/,
    ""
  );
  const baseEnv = "/".replace(/\/$/, "");
  const baseUrl = baseEnv === "" ? siteEnv : `${siteEnv}${baseEnv}`;
  const contact = siteData.contact || {};
  const social = siteData.social || {};
  const sameAs = [];
  if (social.facebook && social.facebook !== "#") sameAs.push(social.facebook);
  if (social.instagram && social.instagram !== "#") sameAs.push(social.instagram);
  if (social.linkedin && social.linkedin !== "#") sameAs.push(social.linkedin);
  if (social.twitter && social.twitter !== "#") sameAs.push(social.twitter);
  if (social.youtube && social.youtube !== "#") sameAs.push(social.youtube);
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteData.shortName || "OB Simatic",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: siteData.metaDescription || siteData.description || "",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address || "",
      addressCountry: "TR"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone || "",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English", "Arabic"]
    },
    ...contact.email && { email: contact.email },
    ...sameAs.length > 0 && { sameAs }
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(organizationSchema)));
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/schema/OrganizationSchema.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://www.ob-simatic.com");
const $$WebSiteSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$WebSiteSchema;
  const { lang } = Astro2.props;
  const siteEnv = "https://www.ob-simatic.com".replace(
    /\/$/,
    ""
  );
  const baseEnv = "/".replace(/\/$/, "");
  const baseUrl = baseEnv === "" ? siteEnv : `${siteEnv}${baseEnv}`;
  const searchUrl = lang === DEFAULT_LANGUAGE ? `${baseUrl}/arama?q={search_term_string}` : `${baseUrl}/${lang}/arama?q={search_term_string}`;
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteData.shortName || "OB Simatic",
    alternateName: [
      "OB Simatic Otomasyon",
      "OB Simatic Automation",
      "ob-simatic"
    ],
    url: baseUrl,
    description: siteData.metaDescription || siteData.description || "",
    inLanguage: lang === "ar" ? "ar-SA" : lang === "en" ? "en-US" : "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrl
      },
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      name: siteData.shortName || "OB Simatic",
      url: baseUrl
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(webSiteSchema)));
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/schema/WebSiteSchema.astro", void 0);

const $$Astro$6 = createAstro("https://www.ob-simatic.com");
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description = siteData.metaDescription,
    image = "/logo.png",
    type = "website",
    lang,
    isHomePage = false
  } = Astro2.props;
  const siteEnv = "https://www.ob-simatic.com".replace(
    /\/$/,
    ""
  );
  const baseEnv = "/".replace(/\/$/, "");
  const baseUrl = baseEnv === "" ? siteEnv : `${siteEnv}${baseEnv}`;
  const fullUrl = Astro2.url.href;
  const ogImage = image.startsWith("http") ? image : `${baseUrl.replace(/\/$/, "")}${image.startsWith("/") ? "" : "/"}${image}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || baseUrl);
  let pathWithoutLang = Astro2.url.pathname;
  const base = "/".replace(/\/$/, "");
  if (base && pathWithoutLang.startsWith(base)) {
    pathWithoutLang = pathWithoutLang.slice(base.length);
  }
  for (const l of SUPPORTED_LANGUAGES) {
    if (l !== DEFAULT_LANGUAGE) {
      if (pathWithoutLang.startsWith(`/${l}/`) || pathWithoutLang === `/${l}`) {
        pathWithoutLang = pathWithoutLang.replace(`/${l}`, "");
        if (pathWithoutLang === "") pathWithoutLang = "/";
        break;
      }
    }
  }
  const alternateLinks = SUPPORTED_LANGUAGES.map((l) => {
    let href = "";
    if (l === DEFAULT_LANGUAGE) {
      href = `${baseUrl.replace(/\/$/, "")}${pathWithoutLang}`;
      if (pathWithoutLang === "/" && !href.endsWith("/")) href += "/";
    } else {
      const suffix = pathWithoutLang === "/" ? "" : pathWithoutLang;
      href = `${baseUrl.replace(/\/$/, "")}/${l}${suffix}`;
    }
    return { lang: l, href };
  });
  const siteTitle = siteData.shortName || "OB Simatic";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  return renderTemplate`<!-- Global Metadata --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png"${addAttribute(`${baseUrl.replace(/\/$/, "")}/logo.png`, "href")}><link rel="apple-touch-icon"${addAttribute(`${baseUrl.replace(/\/$/, "")}/logo.png`, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google Site Verification --><meta name="google-site-verification" content="UP2JKE_3N04lB4C8UzGf2Ypc94OmD27t0QfDyGGrP4s"><!-- Fonts & Icons (Preconnect for performance) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"><!-- Primary Meta Tags --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Language Alternates -->${alternateLinks.map((link) => renderTemplate`<link rel="alternate"${addAttribute(link.lang, "hreflang")}${addAttribute(link.href, "href")}>`)}<link rel="alternate" hreflang="x-default"${addAttribute(alternateLinks.find((Link) => Link.lang === DEFAULT_LANGUAGE)?.href, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(fullUrl, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:site_name"${addAttribute(siteTitle, "content")}><meta property="og:locale"${addAttribute(lang, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(fullUrl, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Structured Data / JSON-LD -->${renderComponent($$result, "OrganizationSchema", $$OrganizationSchema, { "lang": lang })}${isHomePage && renderTemplate`${renderComponent($$result, "WebSiteSchema", $$WebSiteSchema, { "lang": lang })}`}`;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/SEOHead.astro", void 0);

const $$Astro$5 = createAstro("https://www.ob-simatic.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$4 = createAstro("https://www.ob-simatic.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    lang = "tr",
    description,
    image,
    type,
    isHomePage = false
  } = Astro2.props;
  const direction = isRTL(lang) ? "rtl" : "ltr";
  const $$definedVars = defineStyleVars([{ accent: siteData.colors.primaryRgb }]);
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(direction, "dir")}${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "image": image, "type": type, "lang": lang, "isHomePage": isHomePage })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "FloatingButtons", $$FloatingButtons, {})} </body></html>`;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro("https://www.ob-simatic.com");
const $$MegaMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MegaMenu;
  const { lang = "tr" } = Astro2.props;
  function getLocalizedCategory(slug, lang2) {
    const cat = categories[slug];
    const i18n = cat.i18n[lang2] || cat.i18n["en"] || cat.i18n["tr"];
    return {
      slug: cat.slug,
      name: i18n.name || "",
      parentSlug: cat.parentSlug,
      image: cat.image,
      order: cat.order || 0
    };
  }
  const categoriesList = Object.keys(categories).map(
    (slug) => getLocalizedCategory(slug, lang)
  );
  function getChildren(parentSlug) {
    return categoriesList.filter((cat) => cat.parentSlug === parentSlug).sort((a, b) => (a.order || 0) - (b.order || 0));
  }
  function buildCategoryHTML(parentSlug, level) {
    const cats = getChildren(parentSlug);
    if (cats.length === 0) return "";
    let html = "";
    for (const cat of cats) {
      const children = getChildren(cat.slug);
      const hasChildren = children.length > 0;
      const nextLevel = level + 1;
      const href = getLocalizedPath(`/${cat.slug}`, lang);
      html += `<li class="${hasChildren ? "has-sub-category" : ""}"${level === 1 ? ' data-selector="first-level-navigation"' : ""}>`;
      html += `<a href="${href}" title="${cat.name}"><span>${cat.name}</span></a>`;
      if (hasChildren) {
        html += `<button class="submenu-toggle" aria-label="Toggle submenu"><span class="toggle-arrow">\u203A</span></button>`;
        html += `<div class="sub-category category-level-${nextLevel}">`;
        html += `<ul>`;
        html += buildCategoryHTML(cat.slug, nextLevel);
        html += `</ul>`;
        html += `</div>`;
      }
      html += `</li>`;
    }
    return html;
  }
  const menuHTML = buildCategoryHTML(null, 1);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(menuHTML)}` })}`;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/MegaMenu.astro", void 0);

const contact = {"whatsapp":"905396127564","i18n":{"ar":{"phone":"","whatsapp":"","email":"","address":""},"en":{"phone":"","whatsapp":"","email":"","address":""},"tr":{"phone":"","whatsapp":"","email":"","address":""}}};
const messages = {"product_inquiry":{"ar":"أرغب في معرفة عروضكم التي تخص هذا المنتج. المعرف: {id}","en":"I would like to know your offers regarding this product. ID: {id}","tr":"Bu ürünle ilgili tekliflerinizi öğrenmek istiyorum. ID: {id}"},"cart_checkout":{"ar":"مرحباً، أود طلب المنتجات التالية:","en":"Hello, I would like to order the following products:","tr":"Merhaba, aşağıdaki ürünler için sipariş vermek istiyorum:"}};
const settingsData = {
  contact,
  messages};

const $$Astro$2 = createAstro("https://www.ob-simatic.com");
const $$CartDrawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CartDrawer;
  const { lang, ui } = Astro2.props;
  const msgIntro = settingsData.messages.cart_checkout[lang] || settingsData.messages.cart_checkout["tr"];
  const translations = {
    title: ui?.cart?.title || "Shopping Cart",
    empty: ui?.cart?.empty || "Your cart is empty",
    checkout: ui?.cart?.checkout || "Checkout via WhatsApp",
    totalItems: ui?.cart?.totalItems || "Total Items",
    remove: ui?.cart?.remove || "Remove",
    continue: ui?.cart?.continue || "Continue Shopping"
  };
  return renderTemplate`${maybeRenderHead()}<div id="cart-drawer" class="cart-drawer"${addAttribute(JSON.stringify(translations), "data-translations")}${addAttribute(lang, "data-lang")}${addAttribute(msgIntro, "data-intro")} data-astro-cid-fwi5d3ie> <div class="cart-overlay" id="cart-overlay" data-astro-cid-fwi5d3ie></div> <div class="cart-content" data-astro-cid-fwi5d3ie> <div class="cart-header" data-astro-cid-fwi5d3ie> <h2 data-astro-cid-fwi5d3ie>${translations.title}</h2> <button id="close-cart" class="close-btn" data-astro-cid-fwi5d3ie>&times;</button> </div> <div class="cart-items-container" id="cart-items" data-astro-cid-fwi5d3ie> <!-- Items will be injected here via JS --> <div class="empty-cart-message" data-astro-cid-fwi5d3ie> <p data-astro-cid-fwi5d3ie>${translations.empty}</p> <button class="continue-btn" data-astro-cid-fwi5d3ie>${translations.continue}</button> </div> </div> <div class="cart-footer" id="cart-footer" data-astro-cid-fwi5d3ie> <div class="cart-summary" data-astro-cid-fwi5d3ie> <div class="summary-row" data-astro-cid-fwi5d3ie> <span data-astro-cid-fwi5d3ie>${translations.totalItems}:</span> <span id="cart-total-count" data-astro-cid-fwi5d3ie>0</span> </div> <div class="summary-row total-row" data-astro-cid-fwi5d3ie> <span data-astro-cid-fwi5d3ie>Toplam:</span> <span id="cart-total-price" class="total-price" data-astro-cid-fwi5d3ie>€0.00</span> </div> <div class="summary-row try-row" id="cart-try-row" data-astro-cid-fwi5d3ie> <span data-astro-cid-fwi5d3ie>≈</span> <span id="cart-total-try" class="try-total" data-astro-cid-fwi5d3ie>₺0</span> </div> </div> <a href="#" id="whatsapp-checkout" target="_blank" class="checkout-btn" data-astro-cid-fwi5d3ie> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-fwi5d3ie> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-fwi5d3ie></path> </svg> ${translations.checkout} </a> </div> </div> </div> ${renderScript($$result, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/CartDrawer.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/CartDrawer.astro", void 0);

const $$Astro$1 = createAstro("https://www.ob-simatic.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "tr", ui } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const searchPlaceholder = ui?.search?.placeholder || "Ürün adı, kodu veya kategori arayın...";
  const searchPlaceholderMobile = ui?.search?.placeholderMobile || "Ürün numarasını yazın";
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <!-- Top Row: Logo, Search, Actions --> <div class="header-top" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <!-- Mobile Menu Button (Visible on Mobile) --> <button class="mobile-menu-btn" aria-label="Menu" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <line x1="3" y1="12" x2="21" y2="12" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="6" x2="21" y2="6" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="18" x2="21" y2="18" data-astro-cid-3ef6ksr2></line> </svg> </button> <!-- Logo --> <a${addAttribute(getLocalizedPath("/", lang), "href")} class="logo" data-astro-cid-3ef6ksr2> <img${addAttribute(`${"/"}/logo.png`.replace(/\/\//g, "/"), "src")}${addAttribute(siteData.name, "alt")} width="280" height="80" style="height: 80px; width: auto;" data-astro-cid-3ef6ksr2> </a> <!-- Search Bar (Desktop) --> <!-- Search Bar (Desktop) --> <div class="header-search desktop-search" data-astro-cid-3ef6ksr2> <form${addAttribute(getLocalizedPath("/arama", lang), "action")} method="get" data-astro-cid-3ef6ksr2> <input type="text" name="q"${addAttribute(searchPlaceholder, "placeholder")} data-astro-cid-3ef6ksr2> <button type="submit"${addAttribute(ui?.buttons?.search || "Ara", "title")} data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="11" cy="11" r="8" data-astro-cid-3ef6ksr2></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-3ef6ksr2></line> </svg> </button> </form> </div> <!-- Actions / Actions (Desktop) --> <div class="header-actions" data-astro-cid-3ef6ksr2> <!-- Cart Button (Independent) --> <button class="cart-btn" aria-label="Cart" id="header-cart-btn" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="9" cy="21" r="1" data-astro-cid-3ef6ksr2></circle> <circle cx="20" cy="21" r="1" data-astro-cid-3ef6ksr2></circle> <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" data-astro-cid-3ef6ksr2></path> </svg> <span class="cart-count" data-astro-cid-3ef6ksr2>0</span> </button> <!-- Desktop Lang Buttons --> <div class="header-lang-wrapper desktop-lang-wrapper" data-astro-cid-3ef6ksr2> <div class="header-lang-buttons" data-astro-cid-3ef6ksr2> ${SUPPORTED_LANGUAGES.map((l) => renderTemplate`<a${addAttribute(getLocalizedPath(currentPath, l), "href")}${addAttribute(`lang-btn ${l === lang ? "active" : ""}`, "class")} data-astro-cid-3ef6ksr2> ${l.toUpperCase()} </a>`)} </div> </div> </div> </div> </div> <!-- Bottom Row: Navigation --> <div class="header-bottom" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <!-- Mobile Menu Overlay --> <div class="nav-overlay" data-astro-cid-3ef6ksr2></div> <!-- Navigation --> <nav class="nav" data-astro-cid-3ef6ksr2> <!-- Mobile Nav Header (Inside Drawer) --> <div class="mobile-nav-header" data-astro-cid-3ef6ksr2> <img${addAttribute(`${"/"}/logo.png`.replace(/\/\//g, "/"), "src")}${addAttribute(siteData.shortName, "alt")} height="50" style="height: 50px; width: auto;" data-astro-cid-3ef6ksr2> <button class="mobile-close-btn" aria-label="Close" data-astro-cid-3ef6ksr2> &times; </button> </div> <!-- Mobile Language Buttons --> <div class="header-lang-wrapper mobile-lang-wrapper" data-astro-cid-3ef6ksr2> <div class="header-lang-buttons" data-astro-cid-3ef6ksr2> ${SUPPORTED_LANGUAGES.map((l) => renderTemplate`<a${addAttribute(getLocalizedPath(currentPath, l), "href")}${addAttribute(`lang-btn ${l === lang ? "active" : ""}`, "class")} data-astro-cid-3ef6ksr2> ${l.toUpperCase()} </a>`)} </div> </div> <!-- Mobile Search (Visible only inside mobile menu) --> <div class="mobile-search" data-astro-cid-3ef6ksr2> <form${addAttribute(`${"/"}/${lang}/arama`.replace(
    /\/\//g,
    "/"
  ), "action")} method="get" data-astro-cid-3ef6ksr2> <input type="text" name="q"${addAttribute(searchPlaceholderMobile, "placeholder")} data-astro-cid-3ef6ksr2> <button type="submit"${addAttribute(ui?.buttons?.search || "Ara", "title")} data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="11" cy="11" r="8" data-astro-cid-3ef6ksr2></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-3ef6ksr2></line> </svg> </button> </form> </div> <ul class="nav-list" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "MegaMenu", $$MegaMenu, { "lang": lang, "data-astro-cid-3ef6ksr2": true })} </ul> </nav> </div> </div> ${renderComponent($$result, "CartDrawer", $$CartDrawer, { "lang": lang, "ui": ui, "data-astro-cid-3ef6ksr2": true })} </header> ${renderScript($$result, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Header.astro?astro&type=script&index=0&lang.ts")}  ${renderScript($$result, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Header.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "tr", ui, site } = Astro2.props;
  const base = "/".replace(/\/$/, "");
  const getContactInfo = (key) => {
    if (site && site.contact) {
      return site.contact[key];
    }
    const contact = siteData.contact || {};
    const localized = contact.i18n?.[lang] || {};
    const val = localized[key] || contact[key];
    return val;
  };
  const contactPhone = getContactInfo("phone");
  const contactAddress = getContactInfo("address");
  const contactEmail = getContactInfo("email");
  const quickLinksTitle = ui?.footer?.quickLinks || "Hızlı Erişim";
  const contactTitle = ui?.footer?.contactInfo || "İletişim";
  const homeText = ui?.nav?.home || "Anasayfa";
  const aboutText = ui?.footer?.about || "Kurumsal";
  const contactText = ui?.footer?.contact || "İletişim";
  ui?.footer?.privacy || "KVKK Aydınlatma Metni";
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-col" data-astro-cid-sz7xmlte> <img${addAttribute(`${base}/logo.png`, "src")}${addAttribute(siteData.shortName, "alt")} width="200" height="57" style="max-width: 100%; height: auto; margin-bottom: 1rem;" data-astro-cid-sz7xmlte> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>${quickLinksTitle}</h3> <ul class="quick-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a${addAttribute(getLocalizedPath("/", lang), "href")} data-astro-cid-sz7xmlte>${homeText}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(getLocalizedPath("/kurumsal", lang), "href")} data-astro-cid-sz7xmlte>${aboutText}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(getLocalizedPath("/iletisim", lang), "href")} data-astro-cid-sz7xmlte>${contactText}</a></li> </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>${contactTitle}</h3> ${contactAddress && renderTemplate`<a class="contact-item"${addAttribute(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-sz7xmlte></path> <circle cx="12" cy="10" r="3" data-astro-cid-sz7xmlte></circle> ` })} </svg> <span data-astro-cid-sz7xmlte>${contactAddress}</span> </a>`} ${contactPhone && renderTemplate`<a class="contact-item"${addAttribute(`tel:${contactPhone.replace(/\s+/g, "")}`, "href")} data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-sz7xmlte></path> </svg> <span data-astro-cid-sz7xmlte>${contactPhone}</span> </a>`} ${contactEmail && renderTemplate`<a class="contact-item"${addAttribute(`mailto:${contactEmail}`, "href")} data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-sz7xmlte></path> <polyline points="22,6 12,13 2,6" data-astro-cid-sz7xmlte></polyline> ` })} </svg> <span data-astro-cid-sz7xmlte>${contactEmail}</span> </a>`}  <div class="social-links" data-astro-cid-sz7xmlte> ${siteData.social?.facebook && siteData.social.facebook !== "#" && renderTemplate`<a${addAttribute(siteData.social.facebook, "href")} target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-sz7xmlte></path> </svg> </a>`} ${siteData.social?.instagram && siteData.social.instagram !== "#" && renderTemplate`<a${addAttribute(siteData.social.instagram, "href")} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-sz7xmlte></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-sz7xmlte></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-sz7xmlte></line> ` })} </svg> </a>`} ${siteData.social?.twitter && siteData.social.twitter !== "#" && renderTemplate`<a${addAttribute(siteData.social.twitter, "href")} target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-astro-cid-sz7xmlte></path> </svg> </a>`} ${siteData.social?.linkedin && siteData.social.linkedin !== "#" && renderTemplate`<a${addAttribute(siteData.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-astro-cid-sz7xmlte></path> <rect x="2" y="9" width="4" height="12" data-astro-cid-sz7xmlte></rect> <circle cx="4" cy="4" r="2" data-astro-cid-sz7xmlte></circle> ` })} </svg> </a>`} ${siteData.social?.youtube && siteData.social.youtube !== "#" && renderTemplate`<a${addAttribute(siteData.social.youtube, "href")} target="_blank" rel="noopener noreferrer" aria-label="YouTube" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-astro-cid-sz7xmlte></path> </svg> </a>`} </div> </div> </div> <div class="bottom-bar" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${siteData.copyright}</p> </div> </footer> `;
}, "C:/Users/muhammed/Desktop/code/ob-simatic full prject/project/src/components/Footer.astro", void 0);

export { $$Layout as $, DEFAULT_LANGUAGE as D, SUPPORTED_LANGUAGES as S, $$Header as a, $$Footer as b, categories as c, getLocalizedPath as d, settingsData as e, getPageData as g, products as p, siteData as s };
