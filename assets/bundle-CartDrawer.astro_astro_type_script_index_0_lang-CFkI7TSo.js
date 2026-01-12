import{s as S,g as A,b as D,u as $,r as B}from"./bundle-cart-B03LsJXN.js";import{g as H,f as N}from"./bundle-currency-Bv7IxZQo.js";let g=null,l=null;document.addEventListener("astro:page-load",()=>{const v=document.getElementById("cart-drawer"),u=JSON.parse(v?.dataset?.translations||"{}"),C=v?.dataset?.lang||"tr",q=document.getElementById("cart-overlay"),L=document.getElementById("close-cart");document.getElementById("cart-items"),document.getElementById("cart-total-count"),document.getElementById("cart-total-price"),document.getElementById("cart-total-try"),document.getElementById("whatsapp-checkout");let f=35;H().then(e=>{f=e});function I(){document.getElementById("cart-drawer")?.classList.add("open"),document.body.style.overflow="hidden"}function m(){document.getElementById("cart-drawer")?.classList.remove("open"),document.body.style.overflow=""}function y(e){return`$${e.toFixed(2)}`}function w(e){const a=document.getElementById("cart-items"),c=document.getElementById("whatsapp-checkout"),E=document.getElementById("cart-total-count"),s=document.getElementById("cart-total-price"),d=document.getElementById("cart-total-try");if(!a||!c||!E)return;if(e.length===0)a.innerHTML=`
                <div class="empty-cart-message">
                  <div class="empty-icon">🛒</div>
                  <p>${u.empty}</p>
                  <button class="continue-btn">${u.continue}</button>
                </div>
              `,a.querySelector(".continue-btn")?.addEventListener("click",m),c.removeAttribute("href"),c.classList.add("disabled"),s&&(s.textContent="$0.00"),d&&(d.textContent="₺0");else{a.innerHTML=e.map(t=>`
                <div class="cart-item">
                  <div class="item-image">
                    <img src="/ob-simatic${t.image}" alt="${t.title}" />
                  </div>
                  <div class="item-details">
                    <h4>${t.title}</h4>
                    <div class="item-meta">
                       <span class="item-code">${t.id}</span>
                       ${t.brand?`<span class="item-brand">${t.brand}</span>`:""}
                    </div>
                    <div class="item-price-row">
                      <span class="item-price">${y(t.price||0)}</span>
                      <span class="item-subtotal">× ${t.quantity} = ${y((t.price||0)*t.quantity)}</span>
                    </div>
                    <div class="item-actions">
                      <div class="quantity-controls">
                        <button class="qty-btn minus" data-id="${t.id}">-</button>
                        <span class="qty">${t.quantity}</span>
                        <button class="qty-btn plus" data-id="${t.id}">+</button>
                      </div>
                      <button class="remove-btn" data-id="${t.id}">${u.remove}</button>
                    </div>
                  </div>
                </div>
              `).join(""),c.href=A(e,C),c.classList.remove("disabled");const i=D(e);s&&(s.textContent=y(i)),d&&(d.textContent=N(i,f)),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.addEventListener("click",o=>{const n=o.currentTarget.dataset.id;if(!n)return;const r=e.find(p=>p.id===n);r&&r.quantity>1?$(n,r.quantity-1):B(n)})}),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.addEventListener("click",o=>{const n=o.currentTarget.dataset.id;if(!n)return;const r=e.find(p=>p.id===n);r&&$(n,r.quantity+1)})}),document.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",o=>{const n=o.currentTarget.dataset.id;n&&B(n)})})}const x=e.reduce((i,t)=>i+t.quantity,0);E.textContent=String(x)}g&&g(),g=S(w);function b(e){if(!e)return null;const a=e.cloneNode(!0);return e.parentNode?.replaceChild(a,e),a}const T=b(q),k=b(L);T?.addEventListener("click",m),k?.addEventListener("click",m),l&&document.removeEventListener("open-cart",l),l=I,document.addEventListener("open-cart",l)});
