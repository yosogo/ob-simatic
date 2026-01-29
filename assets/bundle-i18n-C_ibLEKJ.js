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

const plc = {"slug":"plc","parentSlug":null,"image":"/images/categories/plc/Picture1.png","i18n":{"tr":{"name":"PLC","title":"Programlanabilir Mantık Denetleyicileri","description":""},"en":{"name":"PLC","title":"Programmable Logic Controllers","description":""},"ar":{"name":"PLC","title":"المتحكمات المنطقية القابلة للبرمجة","description":""}},"order":0};
const surucu = {"slug":"surucu","parentSlug":null,"i18n":{"tr":{"name":"Sürücü","title":"Sürücü - Hareket Kontrol Sistemleri","description":"Sürücü ve frekans invertörleri"},"en":{"name":"Sürücü","title":"Sürücü - Hareket Kontrol Sistemleri","description":"Sürücü ve frekans invertörleri"},"ar":{"name":"driver","title":"Sürücü - Hareket Kontrol Sistemleri","description":"Sürücü ve frekans invertörleri"}},"order":0};
const panel = {"slug":"panel","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Panel","title":"Panel - Operatör Panelleri ve HMI","description":"Operatör panelleri ve HMI sistemleri"},"en":{"name":"Panel","title":"Panel - Operatör Panelleri ve HMI","description":"Operatör panelleri ve HMI sistemleri"},"ar":{"name":"Panel","title":"Panel - Operatör Panelleri ve HMI","description":"Operatör panelleri ve HMI sistemleri"}},"order":0};
const enerji = {"slug":"enerji","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Enerji Otomasyonu","title":"Enerji Otomasyonu - Güç ve Enerji Yönetimi","description":"Enerji otomasyon sistemleri"},"en":{"name":"Enerji Otomasyonu","title":"Enerji Otomasyonu - Güç ve Enerji Yönetimi","description":"Enerji otomasyon sistemleri"},"ar":{"name":"Enerji Otomasyonu","title":"Enerji Otomasyonu - Güç ve Enerji Yönetimi","description":"Enerji otomasyon sistemleri"}},"order":0};
const uuu = {"slug":"uuu","parentSlug":null,"image":"","i18n":{"tr":{"name":"er","title":"","description":""},"en":{"name":"mi","title":"","description":""},"ar":{"name":"no","title":"","description":""}},"order":0};
const sim = {"slug":"sim","parentSlug":"uuu","image":"","i18n":{"tr":{"name":"to ","title":"","description":""},"en":{"name":"vi","title":"","description":""},"ar":{"name":"we","title":"","description":""}},"order":0};
const categories = {
  plc,
  "siemens-plc": {"slug":"siemens-plc","parentSlug":"plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIEMENS","title":"SIEMENS PLC","description":"SIEMENS PLC ürünleri"},"en":{"name":"SIEMENS","title":"SIEMENS PLC","description":"SIEMENS PLC ürünleri"},"ar":{"name":"SIEMENS","title":"SIEMENS PLC","description":"SIEMENS PLC ürünleri"}},"order":0},
  "simatic-s7-1500": {"slug":"simatic-s7-1500","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-1500","title":"SIMATIC S7-1500 PLC","description":"SIEMENS SIMATIC S7-1500 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-1500","title":"SIMATIC S7-1500 PLC","description":"SIEMENS SIMATIC S7-1500 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-1500","title":"SIMATIC S7-1500 PLC","description":"SIEMENS SIMATIC S7-1500 serisi PLC ürünleri"}},"order":0},
  "simatic-s7-1200": {"slug":"simatic-s7-1200","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-1200","title":"SIMATIC S7-1200 PLC","description":"SIEMENS SIMATIC S7-1200 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-1200","title":"SIMATIC S7-1200 PLC","description":"SIEMENS SIMATIC S7-1200 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-1200","title":"SIMATIC S7-1200 PLC","description":"SIEMENS SIMATIC S7-1200 serisi PLC ürünleri"}},"order":0},
  "simatic-s7-300": {"slug":"simatic-s7-300","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-300","title":"SIMATIC S7-300 PLC","description":"SIEMENS SIMATIC S7-300 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-300","title":"SIMATIC S7-300 PLC","description":"SIEMENS SIMATIC S7-300 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-300","title":"SIMATIC S7-300 PLC","description":"SIEMENS SIMATIC S7-300 serisi PLC ürünleri"}},"order":0},
  "simatic-s7-400": {"slug":"simatic-s7-400","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC S7-400","title":"SIMATIC S7-400 PLC","description":"SIEMENS SIMATIC S7-400 serisi PLC ürünleri"},"en":{"name":"SIMATIC S7-400","title":"SIMATIC S7-400 PLC","description":"SIEMENS SIMATIC S7-400 serisi PLC ürünleri"},"ar":{"name":"SIMATIC S7-400","title":"SIMATIC S7-400 PLC","description":"SIEMENS SIMATIC S7-400 serisi PLC ürünleri"}},"order":0},
  "simatic-et200": {"slug":"simatic-et200","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC ET200","title":"SIMATIC ET200 Dağıtılmış I/O","description":"SIEMENS ET200 dağıtılmış giriş çıkış sistemleri"},"en":{"name":"SIMATIC ET200","title":"SIMATIC ET200 Dağıtılmış I/O","description":"SIEMENS ET200 dağıtılmış giriş çıkış sistemleri"},"ar":{"name":"SIMATIC ET200","title":"SIMATIC ET200 Dağıtılmış I/O","description":"SIEMENS ET200 dağıtılmış giriş çıkış sistemleri"}},"order":0},
  "siemens-logo": {"slug":"siemens-logo","parentSlug":"siemens-plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"LOGO!","title":"SIEMENS LOGO!","description":"SIEMENS LOGO! lojik modülleri"},"en":{"name":"LOGO!","title":"SIEMENS LOGO!","description":"SIEMENS LOGO! lojik modülleri"},"ar":{"name":"LOGO!","title":"SIEMENS LOGO!","description":"SIEMENS LOGO! lojik modülleri"}},"order":0},
  "schneider-plc": {"slug":"schneider-plc","parentSlug":"plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SCHNEIDER","title":"SCHNEIDER PLC","description":"SCHNEIDER PLC ürünleri"},"en":{"name":"SCHNEIDER","title":"SCHNEIDER PLC","description":"SCHNEIDER PLC ürünleri"},"ar":{"name":"SCHNEIDER","title":"SCHNEIDER PLC","description":"SCHNEIDER PLC ürünleri"}},"order":0},
  "abb-plc": {"slug":"abb-plc","parentSlug":"plc","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"ABB","title":"ABB PLC","description":"ABB PLC ürünleri"},"en":{"name":"ABB","title":"ABB PLC","description":"ABB PLC ürünleri"},"ar":{"name":"ABB","title":"ABB PLC","description":"ABB PLC ürünleri"}},"order":0},
  "s7-300-cpu": {"slug":"s7-300-cpu","parentSlug":"simatic-s7-300","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-300 CPU","title":"SIMATIC S7-300 CPU","description":"S7-300 CPU modülleri"},"en":{"name":"S7-300 CPU","title":"SIMATIC S7-300 CPU","description":"S7-300 CPU modülleri"},"ar":{"name":"S7-300 CPU","title":"SIMATIC S7-300 CPU","description":"S7-300 CPU modülleri"}},"order":0},
  "s7-300-dijital-moduller": {"slug":"s7-300-dijital-moduller","parentSlug":"simatic-s7-300","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-300 Dijital Modüller","title":"S7-300 Dijital Giriş/Çıkış Modülleri","description":"S7-300 dijital I/O modülleri"},"en":{"name":"S7-300 Dijital Modüller","title":"S7-300 Dijital Giriş/Çıkış Modülleri","description":"S7-300 dijital I/O modülleri"},"ar":{"name":"S7-300 Dijital Modüller","title":"S7-300 Dijital Giriş/Çıkış Modülleri","description":"S7-300 dijital I/O modülleri"}},"order":0},
  "s7-300-analog-moduller": {"slug":"s7-300-analog-moduller","parentSlug":"simatic-s7-300","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-300 Analog Modüller","title":"S7-300 Analog Giriş/Çıkış Modülleri","description":"S7-300 analog I/O modülleri"},"en":{"name":"S7-300 Analog Modüller","title":"S7-300 Analog Giriş/Çıkış Modülleri","description":"S7-300 analog I/O modülleri"},"ar":{"name":"S7-300 Analog Modüller","title":"S7-300 Analog Giriş/Çıkış Modülleri","description":"S7-300 analog I/O modülleri"}},"order":0},
  "s7-1500-cpu": {"slug":"s7-1500-cpu","parentSlug":"simatic-s7-1500","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-1500 CPU","title":"SIMATIC S7-1500 CPU","description":"S7-1500 CPU modülleri"},"en":{"name":"S7-1500 CPU","title":"SIMATIC S7-1500 CPU","description":"S7-1500 CPU modülleri"},"ar":{"name":"S7-1500 CPU","title":"SIMATIC S7-1500 CPU","description":"S7-1500 CPU modülleri"}},"order":0},
  "s7-400-cpu": {"slug":"s7-400-cpu","parentSlug":"simatic-s7-400","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"CPU Modülleri","title":"S7-400 CPU Modülleri","description":"S7-400 Merkezi İşlem Birimleri"},"en":{"name":"CPU Modülleri","title":"S7-400 CPU Modülleri","description":"S7-400 Merkezi İşlem Birimleri"},"ar":{"name":"CPU Modülleri","title":"S7-400 CPU Modülleri","description":"S7-400 Merkezi İşlem Birimleri"}},"order":0},
  "s7-400-dijital": {"slug":"s7-400-dijital","parentSlug":"simatic-s7-400","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Dijital Modüller","title":"S7-400 Dijital Modüller","description":"S7-400 Dijital I/O"},"en":{"name":"Dijital Modüller","title":"S7-400 Dijital Modüller","description":"S7-400 Dijital I/O"},"ar":{"name":"Dijital Modüller","title":"S7-400 Dijital Modüller","description":"S7-400 Dijital I/O"}},"order":0},
  "s7-400-analog": {"slug":"s7-400-analog","parentSlug":"simatic-s7-400","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Analog Modüller","title":"S7-400 Analog Modüller","description":"S7-400 Analog I/O"},"en":{"name":"Analog Modüller","title":"S7-400 Analog Modüller","description":"S7-400 Analog I/O"},"ar":{"name":"Analog Modüller","title":"S7-400 Analog Modüller","description":"S7-400 Analog I/O"}},"order":0},
  "s7-1500-dijital-moduller": {"slug":"s7-1500-dijital-moduller","parentSlug":"simatic-s7-1500","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"S7-1500 Dijital Modüller","title":"S7-1500 Dijital Giriş/Çıkış Modülleri","description":"S7-1500 dijital I/O modülleri"},"en":{"name":"S7-1500 Dijital Modüller","title":"S7-1500 Dijital Giriş/Çıkış Modülleri","description":"S7-1500 dijital I/O modülleri"},"ar":{"name":"S7-1500 Dijital Modüller","title":"S7-1500 Dijital Giriş/Çıkış Modülleri","description":"S7-1500 dijital I/O modülleri"}},"order":0},
  surucu,
  "siemens-surucu": {"slug":"siemens-surucu","parentSlug":"surucu","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIEMENS","title":"SIEMENS Sürücüler","description":"SIEMENS SINAMICS sürücü ürünleri"},"en":{"name":"SIEMENS","title":"SIEMENS Sürücüler","description":"SIEMENS SINAMICS sürücü ürünleri"},"ar":{"name":"SIEMENS","title":"SIEMENS Sürücüler","description":"SIEMENS SINAMICS sürücü ürünleri"}},"order":0},
  "sinamics-v20": {"slug":"sinamics-v20","parentSlug":"siemens-surucu","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SINAMICS V20","title":"SINAMICS V20 Serisi","description":"SINAMICS V20 serisi sürücüler"},"en":{"name":"SINAMICS V20","title":"SINAMICS V20 Serisi","description":"SINAMICS V20 serisi sürücüler"},"ar":{"name":"SINAMICS V20","title":"SINAMICS V20 Serisi","description":"SINAMICS V20 serisi sürücüler"}},"order":0},
  "sinamics-g120": {"slug":"sinamics-g120","parentSlug":"siemens-surucu","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SINAMICS G120","title":"SINAMICS G120 Serisi","description":"SINAMICS G120 serisi sürücüler"},"en":{"name":"SINAMICS G120","title":"SINAMICS G120 Serisi","description":"SINAMICS G120 serisi sürücüler"},"ar":{"name":"SINAMICS G120","title":"SINAMICS G120 Serisi","description":"SINAMICS G120 serisi sürücüler"}},"order":0},
  panel,
  "siemens-panel": {"slug":"siemens-panel","parentSlug":"panel","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIEMENS","title":"SIEMENS Operatör Panelleri","description":"SIEMENS SIMATIC HMI panelleri"},"en":{"name":"SIEMENS","title":"SIEMENS Operatör Panelleri","description":"SIEMENS SIMATIC HMI panelleri"},"ar":{"name":"SIEMENS","title":"SIEMENS Operatör Panelleri","description":"SIEMENS SIMATIC HMI panelleri"}},"order":0},
  "simatic-hmi-comfort": {"slug":"simatic-hmi-comfort","parentSlug":"siemens-panel","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC HMI Comfort","title":"SIMATIC HMI Comfort Paneller","description":"SIMATIC HMI Comfort serisi paneller"},"en":{"name":"SIMATIC HMI Comfort","title":"SIMATIC HMI Comfort Paneller","description":"SIMATIC HMI Comfort serisi paneller"},"ar":{"name":"SIMATIC HMI Comfort","title":"SIMATIC HMI Comfort Paneller","description":"SIMATIC HMI Comfort serisi paneller"}},"order":0},
  "simatic-hmi-basic": {"slug":"simatic-hmi-basic","parentSlug":"siemens-panel","image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"SIMATIC HMI Basic","title":"SIMATIC HMI Basic Paneller","description":"SIMATIC HMI Basic serisi paneller"},"en":{"name":"SIMATIC HMI Basic","title":"SIMATIC HMI Basic Paneller","description":"SIMATIC HMI Basic serisi paneller"},"ar":{"name":"SIMATIC HMI Basic","title":"SIMATIC HMI Basic Paneller","description":"SIMATIC HMI Basic serisi paneller"}},"order":0},
  "proses-enstrumanlari": {"slug":"proses-enstrumanlari","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Proses Enstrümanları","title":"Proses Enstrümanları - Ölçüm ve Kontrol","description":"Proses enstrümanları ve ölçüm sistemleri"},"en":{"name":"Proses Enstrümanları","title":"Proses Enstrümanları - Ölçüm ve Kontrol","description":"Proses enstrümanları ve ölçüm sistemleri"},"ar":{"name":"Proses Enstrümanları","title":"Proses Enstrümanları - Ölçüm ve Kontrol","description":"Proses enstrümanları ve ölçüm sistemleri"}},"order":0},
  enerji,
  "orta-gerilim": {"slug":"orta-gerilim","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Orta Gerilim","title":"Orta Gerilim - Orta Gerilim Sistemleri","description":"Orta gerilim ürün ve sistemleri"},"en":{"name":"Orta Gerilim","title":"Orta Gerilim - Orta Gerilim Sistemleri","description":"Orta gerilim ürün ve sistemleri"},"ar":{"name":"Orta Gerilim","title":"Orta Gerilim - Orta Gerilim Sistemleri","description":"Orta gerilim ürün ve sistemleri"}},"order":0},
  "solar-pv": {"slug":"solar-pv","parentSlug":null,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"name":"Solar (PV)","title":"Solar (PV) - Güneş Enerjisi Sistemleri","description":"Güneş enerjisi ve solar sistemleri"},"en":{"name":"Solar (PV)","title":"Solar (PV) - Güneş Enerjisi Sistemleri","description":"Güneş enerjisi ve solar sistemleri"},"ar":{"name":"Solar (PV)","title":"Solar (PV) - Güneş Enerjisi Sistemleri","description":"Güneş enerjisi ve solar sistemleri"}},"order":0},
  uuu,
  sim,
};

const TM221CE16R = {"id":"TM221CE16R","brand":"Schneider Electric","categorySlug":"schneider-plc","price":245,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"Schneider Electric, Modicon M221, 16 IO Relay Ethernet"},"en":{"title":"Schneider Electric, Modicon M221, 16 IO Relay Ethernet"},"ar":{"title":"Schneider Electric, Modicon M221, 16 IO Relay Ethernet"}}};
const TM241CE24T = {"id":"TM241CE24T","brand":"Schneider Electric","categorySlug":"abb-plc","price":450,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"Schneider Electric, Modicon M241, 24 IO Transistor PNP Ethernet"},"en":{"title":"Schneider Electric, Modicon M241, 24 IO Transistor PNP Ethernet"},"ar":{"title":"Schneider Electric, Modicon M241, 24 IO Transistor PNP Ethernet"}}};
const products = {
  "6ES7331-7KF02-0AB0": {"id":"6ES7331-7KF02-0AB0","brand":"Siemens","categorySlug":"s7-300-analog-moduller","price":125,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC S7-300, ANALOG INPUT SM 331"},"en":{"title":"SIMATIC S7-300, ANALOG INPUT SM 331"},"ar":{"title":"SIMATIC S7-300, ANALOG INPUT SM 331"}},"translations":{"ar":{"keys":[{"key":"التواجد","value":"متوفر"}]},"en":{"keys":[{"key":"founded","value":"yes"}]},"tr":{"keys":[{"key":"","value":""}]}}},
  "6ES7315-2AH14-0AB0": {"id":"6ES7315-2AH14-0AB0","brand":"Siemens","categorySlug":"s7-300-cpu","price":2850,"inStock":true,"image":"/images/products/cpu-1516.png","i18n":{"tr":{"title":"SIMATIC S7-300, CPU 315-2DP"},"en":{"title":"SIMATIC S7-300, CPU 315-2DP"},"ar":{"title":"SIMATIC S7-300, CPU 315-2DP"}}},
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
    const ui = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/ar/ui.json": () => import('./bundle-ui-CKq_a5IA.js'),"../data/en/ui.json": () => import('./bundle-ui-e3gZMX9d.js'),"../data/tr/ui.json": () => import('./bundle-ui-CVDNvLTV.js')})), `../data/${lang}/ui.json`, 4);
    return ui.default;
  } catch {
    const ui = await import('./bundle-ui-CVDNvLTV.js');
    return ui.default;
  }
}
async function getSite(lang) {
  try {
    const site = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/ar/site.json": () => import('./bundle-site-Cd8N--CZ.js'),"../data/en/site.json": () => import('./bundle-site-CX3VdTdS.js'),"../data/tr/site.json": () => import('./bundle-site-zCJ1Sjfe.js')})), `../data/${lang}/site.json`, 4);
    return site.default;
  } catch {
    const site = await import('./bundle-site-zCJ1Sjfe.js');
    return site.default;
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

export { DEFAULT_LANGUAGE as D, SUPPORTED_LANGUAGES as S, getLocalizedPath as a, categories as c, getPageData as g, isRTL as i, products as p };
