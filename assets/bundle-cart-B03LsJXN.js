const c="ob_simatic_cart",s="cart-updated";function i(){if(typeof localStorage>"u")return[];const t=localStorage.getItem(c);return t?JSON.parse(t):[]}function d(t){typeof localStorage>"u"||(localStorage.setItem(c,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(s,{detail:t})))}function p(t){const a=i(),e=a.find(n=>n.id===t.id);e?e.quantity+=1:a.push({...t,quantity:1}),d(a)}function $(t){const e=i().filter(n=>n.id!==t);d(e)}function y(t,a){const e=i(),n=e.find(o=>o.id===t);n&&(n.quantity=Math.max(1,a),d(e))}function f(t){return t.reduce((a,e)=>a+e.price*e.quantity,0)}function m(t){if(typeof window>"u")return()=>{};const a=e=>t(e.detail);return window.addEventListener(s,a),t(i()),()=>window.removeEventListener(s,a)}const u={tr:{greeting:"Merhaba, aşağıdaki ürünler için sipariş vermek istiyorum:",code:"Kod",price:"Fiyat",quantity:"Adet",subtotal:"Ara Toplam",totalItems:"Toplam Kalem",grandTotal:"GENEL TOPLAM"},en:{greeting:"Hello, I would like to order the following products:",code:"Code",price:"Price",quantity:"Quantity",subtotal:"Subtotal",totalItems:"Total Items",grandTotal:"GRAND TOTAL"},ar:{greeting:"مرحباً، أود طلب المنتجات التالية:",code:"الكود",price:"السعر",quantity:"الكمية",subtotal:"المجموع الفرعي",totalItems:"إجمالي العناصر",grandTotal:"المجموع الكلي"}};function T(t,a="tr"){const e="905396127564";if(t.length===0)return"";const n=u[a]||u.tr;let o=`${n.greeting}

`;t.forEach((r,g)=>{o+=`${g+1}. *${r.title}* (${r.brand})
`,o+=`   ${n.code}: ${r.id}
`,o+=`   ${n.price}: $${r.price.toFixed(2)}
`,o+=`   ${n.quantity}: ${r.quantity}
`,o+=`   ${n.subtotal}: $${(r.price*r.quantity).toFixed(2)}

`});const l=f(t);return o+=`━━━━━━━━━━━━━━━━━━━━
`,o+=`${n.totalItems}: ${t.length}
`,o+=`*${n.grandTotal}: $${l.toFixed(2)}*`,`https://wa.me/${e}?text=${encodeURIComponent(o)}`}export{p as a,f as b,T as g,$ as r,m as s,y as u};
