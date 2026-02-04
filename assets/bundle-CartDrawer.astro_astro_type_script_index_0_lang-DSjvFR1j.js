import{s as S,g as A,b as D,u as B,r as $}from"./bundle-cart-BhR_2PJu.js";import{g as R,f as H}from"./bundle-currency-Dyj8FtcO.js";let f=null,l=null;document.addEventListener("astro:page-load",()=>{const u=document.getElementById("cart-drawer"),m=JSON.parse(u?.dataset?.translations||"{}"),C=u?.dataset?.lang||"tr",q=document.getElementById("cart-overlay"),w=document.getElementById("close-cart");document.getElementById("cart-items"),document.getElementById("cart-total-count"),document.getElementById("cart-total-price"),document.getElementById("cart-total-try"),document.getElementById("whatsapp-checkout");let y=null;R().then(e=>{y=e;const a=document.getElementById("cart-try-row");!e&&a&&(a.style.display="none")});function I(){document.getElementById("cart-drawer")?.classList.add("open"),document.body.style.overflow="hidden"}function p(){document.getElementById("cart-drawer")?.classList.remove("open"),document.body.style.overflow=""}function g(e){return`€${e.toFixed(2)}`}function L(e){const a=document.getElementById("cart-items"),c=document.getElementById("whatsapp-checkout"),b=document.getElementById("cart-total-count"),s=document.getElementById("cart-total-price"),d=document.getElementById("cart-total-try");if(!a||!c||!b)return;if(e.length===0)a.innerHTML=`
                <div class="empty-cart-message">
                  <div class="empty-icon">🛒</div>
                  <p>${m.empty}</p>
                  <button class="continue-btn">${m.continue}</button>
                </div>
              `,a.querySelector(".continue-btn")?.addEventListener("click",p),c.removeAttribute("href"),c.classList.add("disabled"),s&&(s.textContent="€0.00"),d&&(d.textContent="₺0");else{a.innerHTML=e.map(t=>`
                <div class="cart-item">
                  <div class="item-image">
                    <img src="${"/".replace(/\/$/,"")}${t.image}" alt="${t.title}" />
                  </div>
                  <div class="item-details">
                    <h4>${t.title}</h4>
                    <div class="item-meta">
                       <span class="item-code">${t.id}</span>
                       ${t.brand?`<span class="item-brand">${t.brand}</span>`:""}
                    </div>
                    <div class="item-price-row">
                      <span class="item-price">${g(t.price||0)}</span>
                      <span class="item-subtotal">× ${t.quantity} = ${g((t.price||0)*t.quantity)}</span>
                    </div>
                    <div class="item-actions">
                      <div class="quantity-controls">
                        <button class="qty-btn minus" data-id="${t.id}">-</button>
                        <span class="qty">${t.quantity}</span>
                        <button class="qty-btn plus" data-id="${t.id}">+</button>
                      </div>
                      <button class="remove-btn" data-id="${t.id}">${m.remove}</button>
                    </div>
                  </div>
                </div>
              `).join(""),c.href=A(e,C,u?.dataset?.intro),c.classList.remove("disabled");const i=D(e);s&&(s.textContent=g(i)),d&&y&&(d.textContent=H(i,y)),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.addEventListener("click",o=>{const n=o.currentTarget.dataset.id;if(!n)return;const r=e.find(v=>v.id===n);r&&r.quantity>1?B(n,r.quantity-1):$(n)})}),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.addEventListener("click",o=>{const n=o.currentTarget.dataset.id;if(!n)return;const r=e.find(v=>v.id===n);r&&B(n,r.quantity+1)})}),document.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",o=>{const n=o.currentTarget.dataset.id;n&&$(n)})})}const x=e.reduce((i,t)=>i+t.quantity,0);b.textContent=String(x)}f&&f(),f=S(L);function E(e){if(!e)return null;const a=e.cloneNode(!0);return e.parentNode?.replaceChild(a,e),a}const T=E(q),k=E(w);T?.addEventListener("click",p),k?.addEventListener("click",p),l&&document.removeEventListener("open-cart",l),l=I,document.addEventListener("open-cart",l)});
