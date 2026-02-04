const l="ob_simatic_cart",d="cart-updated";function s(){if(typeof localStorage>"u")return[];const t=localStorage.getItem(l);return t?JSON.parse(t):[]}function u(t){typeof localStorage>"u"||(localStorage.setItem(l,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(d,{detail:t})))}function y(t){const n=s(),e=n.find(r=>r.id===t.id);e?e.quantity+=1:n.push({...t,quantity:1}),u(n)}function $(t){const e=s().filter(r=>r.id!==t);u(e)}function m(t,n){const e=s(),r=e.find(a=>a.id===t);r&&(r.quantity=Math.max(1,n),u(e))}function p(t){return t.reduce((n,e)=>n+e.price*e.quantity,0)}function T(t){if(typeof window>"u")return()=>{};const n=e=>t(e.detail);return window.addEventListener(d,n),t(s()),()=>window.removeEventListener(d,n)}const c={tr:{greeting:"Merhaba, aşağıdaki ürünler için sipariş vermek istiyorum:",code:"Kod",price:"Fiyat",quantity:"Adet",subtotal:"Ara Toplam",totalItems:"Toplam Kalem",grandTotal:"GENEL TOPLAM"},en:{greeting:"Hello, I would like to order the following products:",code:"Code",price:"Price",quantity:"Quantity",subtotal:"Subtotal",totalItems:"Total Items",grandTotal:"GRAND TOTAL"},ar:{greeting:"مرحباً، أود طلب المنتجات التالية:",code:"الكود",price:"السعر",quantity:"الكمية",subtotal:"المجموع الفرعي",totalItems:"إجمالي العناصر",grandTotal:"المجموع الكلي"}};function w(t,n="tr",e){const r="905396127564";if(t.length===0)return"";const a=c[n]||c.tr;let o=`${e||a.greeting}

`;t.forEach((i,f)=>{o+=`${f+1}. *${i.title}* (${i.brand})
`,o+=`   ${a.code}: ${i.id}
`,o+=`   ${a.price}: €${i.price.toFixed(2)}
`,o+=`   ${a.quantity}: ${i.quantity}
`,o+=`   ${a.subtotal}: €${(i.price*i.quantity).toFixed(2)}

`});const g=p(t);return o+=`━━━━━━━━━━━━━━━━━━━━
`,o+=`${a.totalItems}: ${t.length}
`,o+=`*${a.grandTotal}: €${g.toFixed(2)}*`,`https://wa.me/${r}?text=${encodeURIComponent(o)}`}export{y as a,p as b,w as g,$ as r,T as s,m as u};
