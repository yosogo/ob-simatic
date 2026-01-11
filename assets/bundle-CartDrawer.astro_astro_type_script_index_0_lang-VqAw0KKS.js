import{s as q,g as h,b as L,u as g,r as b}from"./bundle-cart-B03LsJXN.js";import{g as C,f as B}from"./bundle-currency-Bv7IxZQo.js";const l=document.getElementById("cart-drawer"),y=JSON.parse(l?.dataset?.translations||"{}"),k=l?.dataset?.lang||"tr",T=document.getElementById("cart-overlay"),x=document.getElementById("close-cart"),i=document.getElementById("cart-items"),f=document.getElementById("cart-total-count"),r=document.getElementById("cart-total-price"),d=document.getElementById("cart-total-try"),c=document.getElementById("whatsapp-checkout"),I=document.querySelectorAll(".continue-btn");let E=35;C().then(e=>{E=e});function S(){l?.classList.add("open"),document.body.style.overflow="hidden"}function u(){l?.classList.remove("open"),document.body.style.overflow=""}function v(e){return`$${e.toFixed(2)}`}function w(e){if(!i||!c||!f)return;if(e.length===0)i.innerHTML=`
        <div class="empty-cart-message">
          <div class="empty-icon">🛒</div>
          <p>${y.empty}</p>
          <button class="continue-btn">${y.continue}</button>
        </div>
      `,i.querySelector(".continue-btn")?.addEventListener("click",u),c.removeAttribute("href"),c.classList.add("disabled"),r&&(r.textContent="$0.00"),d&&(d.textContent="₺0");else{i.innerHTML=e.map(t=>`
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
              <span class="item-price">${v(t.price||0)}</span>
              <span class="item-subtotal">× ${t.quantity} = ${v((t.price||0)*t.quantity)}</span>
            </div>
            <div class="item-actions">
              <div class="quantity-controls">
                <button class="qty-btn minus" data-id="${t.id}">-</button>
                <span class="qty">${t.quantity}</span>
                <button class="qty-btn plus" data-id="${t.id}">+</button>
              </div>
              <button class="remove-btn" data-id="${t.id}">${y.remove}</button>
            </div>
          </div>
        </div>
      `).join(""),c.href=h(e,k),c.classList.remove("disabled");const o=L(e);r&&(r.textContent=v(o)),d&&(d.textContent=B(o,E)),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.dataset.id;if(!n)return;const a=e.find(m=>m.id===n);a&&a.quantity>1?g(n,a.quantity-1):b(n)})}),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.dataset.id;if(!n)return;const a=e.find(m=>m.id===n);a&&g(n,a.quantity+1)})}),document.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.dataset.id;n&&b(n)})})}const $=e.reduce((o,t)=>o+t.quantity,0);f.textContent=String($)}q(w);T?.addEventListener("click",u);x?.addEventListener("click",u);I.forEach(e=>e.addEventListener("click",u));document.addEventListener("open-cart",S);
