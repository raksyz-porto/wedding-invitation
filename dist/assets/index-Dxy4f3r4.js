(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const r={groom:{name:"Ardianto",shortName:"Ardi",fatherName:"Bapak Saeni",motherName:"Ibu Arnimah",instagram:"https://instagram.com/ardianto",photo:"/groom.jpg"},bride:{name:"Farihah",shortName:"Iha",fatherName:"Bapak Ahmad Fuadi",motherName:"Ibu Lamhah",instagram:"https://instagram.com/farihah_22",photo:"/bride.jpg"},event:{akad:{date:"18 Oktober 2026",day:"MINGGU",time:"09.00 WIB - Selesai",location:"Kediaman Mempelai Wanita",address:"Kp. Pamindangan RT 01/RW 03, Kel. Unyur, Kec. Serang, Kota Serang, Banten",googleMapsLink:"https://goo.gl/maps/your-link-here"},resepsi:{date:"18 Oktober 2026",day:"MINGGU",time:"11.00 WIB - Selesai",location:"Kediaman Mempelai Wanita",address:"Kp. Pamindangan RT 01/RW 03, Kel. Unyur, Kec. Serang, Kota Serang, Banten",googleMapsLink:"https://goo.gl/maps/your-link-here"},weddingDate:"2026-10-18T09:00:00+07:00"},gift:[{bankName:"Bank Syariah Indonesia (BSI)",accountNumber:"385501032593538",accountHolder:"Ardianto",image:"/bsi.png"},{bankName:"Transfer Bank",accountNumber:"0895397317294",accountHolder:"Farihah",image:"/mobile.png"}],cover:{title:"Undangan Pernikahan",subtitle:"The Wedding of",coupleNames:"Iha & Ardi"}};let l=null,u=!1,i=null;document.addEventListener("DOMContentLoaded",f);async function f(){b(),await document.fonts.ready,k(),$(),T(),L(),E(),M(),S(),B(),N(),A(),setTimeout(()=>{w()},800)}function b(){const e=document.createElement("div");e.className="loading",e.id="loading",e.innerHTML=`
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="90 150" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
      </circle>
    </svg>
    <p class="loading-text">Memuat undangan...</p>
  `,document.body.appendChild(e)}function w(){const e=document.getElementById("loading");e&&(e.classList.add("hidden"),setTimeout(()=>e.remove(),600))}function k(){const{cover:e}=r,a=document.getElementById("app");if(!a)return;const t=document.createElement("section");t.className="cover",t.innerHTML=`
    <div class="cover-content">
      <div class="floral-border">
        <img src="/themes/casanova/border.webp" alt="flower" />
        <img src="/themes/casanova/tr.webp" alt="flower" class="center" />
        <img src="/themes/casanova/bl.webp" alt="flower" />
      </div>
      <p class="cover-title">${e.title}</p>
      <p class="cover-subtitle">${e.subtitle}</p>
      <h1 class="cover-couple">${e.coupleNames}</h1>
      <p class="cover-date">Akan datang pada ${y(r.event.weddingDate)}</p>
    </div>
    <div class="cover-scroll" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  `,a.appendChild(t)}function y(e){const a=new Date(e),t={day:"numeric",month:"long",year:"numeric",timeZone:"Asia/Jakarta"};return a.toLocaleDateString("id-ID",t).toUpperCase()}function $(){const{groom:e,bride:a}=r,t=document.getElementById("app");if(!t)return;const n=document.createElement("section");n.className="section reveal",n.innerHTML=`
    <div class="section-header">
      <h2 class="section-title">Mempelai</h2>
    </div>
    <div class="couple-grid">
      ${p(e,"groom")}
      ${p(a,"bride")}
    </div>
  `,t.appendChild(n)}function p(e,a){return`
    <div class="couple-card">
      <img 
        src="${e.photo||`/${a}-placeholder.svg`}" 
        alt="${e.name}" 
        class="couple-photo"
        onerror="this.src='/${a}-placeholder.svg'"
      />
      <h3 class="couple-name">${e.name}</h3>
      <p class="couple-short">${e.shortName}</p>
      <div class="couple-parents">
        <p><strong>Putra/teri</strong></p>
        <p>${e.fatherName}</p>
        <p>&</p>
        <p>${e.motherName}</p>
      </div>
      ${e.instagram?`<a href="${e.instagram}" target="_blank" class="couple-instagram"><i class="fab fa-instagram"></i> @${e.instagram.split("/").pop()}</a>`:""}
    </div>
  `}function T(){const{akad:e,resepsi:a}=r.event,t=document.getElementById("app");if(!t)return;const n=document.createElement("section");n.className="section reveal",n.innerHTML=`
    <div class="section-header">
      <h2 class="section-title">Acara</h2>
    </div>
    <div class="event-grid">
      ${g(e,"akad")}
      ${g(a,"resepsi")}
    </div>
  `,t.appendChild(n)}function g(e,a){return`
    <div class="event-card">
      <p class="event-type"><i class="${a==="akad"?"fas fa-book-quran":"fas fa-utensils"}"></i> ${a==="akad"?"Akad Nikah":"Resepsi"}</p>
      <p class="event-day">${e.day}</p>
      <p class="event-date">${e.date}</p>
      <div class="event-time">
        <i class="far fa-clock"></i>
        <span>${e.time}</span>
      </div>
      <div class="event-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>
          ${e.location}<br/>
          ${e.address}
          ${e.googleMapsLink?`<a href="${e.googleMapsLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Buka di Maps</a>`:""}
        </span>
      </div>
    </div>
  `}function L(){const e=document.getElementById("app");if(!e)return;const a=document.createElement("section");a.className="section reveal",a.innerHTML=`
    <div class="countdown-section" id="countdown">
      <p class="countdown-title">Menghitung Hari</p>
      <div class="countdown-grid">
        <div class="countdown-item">
          <div class="countdown-value" id="days">00</div>
          <div class="countdown-label">Hari</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-value" id="hours">00</div>
          <div class="countdown-label">Jam</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-value" id="minutes">00</div>
          <div class="countdown-label">Menit</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-value" id="seconds">00</div>
          <div class="countdown-label">Detik</div>
        </div>
      </div>
    </div>
  `,e.appendChild(a)}function N(){const e=new Date(r.event.weddingDate).getTime();function a(){const t=new Date().getTime(),n=e-t;if(n<0){l&&clearInterval(l),document.getElementById("days").textContent="00",document.getElementById("hours").textContent="00",document.getElementById("minutes").textContent="00",document.getElementById("seconds").textContent="00";return}const o=Math.floor(n/(1e3*60*60*24)),s=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(n%(1e3*60*60)/(1e3*60)),m=Math.floor(n%(1e3*60)/1e3);document.getElementById("days").textContent=String(o).padStart(2,"0"),document.getElementById("hours").textContent=String(s).padStart(2,"0"),document.getElementById("minutes").textContent=String(c).padStart(2,"0"),document.getElementById("seconds").textContent=String(m).padStart(2,"0")}a(),l=window.setInterval(a,1e3)}function E(){const{gift:e}=r,a=document.getElementById("app");if(!a)return;const t=document.createElement("section");t.className="section reveal",t.innerHTML=`
    <div class="section-header">
      <h2 class="section-title">Tanda Kasih</h2>
    </div>
    <div class="floral-border">
      <img src="/themes/casanova/border.webp" alt="flower" />
      <img src="/themes/casanova/tr.webp" alt="flower" class="center" />
      <img src="/themes/casanova/bl.webp" alt="flower" />
    </div>
    <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.
    </p>
    <div class="gift-grid">
      ${e.map(n=>I(n)).join("")}
    </div>
  `,a.appendChild(t)}function I(e){return`
    <div class="gift-card">
      <div class="gift-icon">
        <img src="${e.image||"/bank-placeholder.svg"}" alt="${e.bankName}" onerror="this.src='/bank-placeholder.svg'" />
      </div>
      <p class="gift-bank">${e.bankName}</p>
      <p class="gift-number">${e.accountNumber}</p>
      <p class="gift-holder">a.n. ${e.accountHolder}</p>
      <a href="#" class="gift-btn" data-account="${e.accountNumber}">
        <i class="fas fa-copy"></i> Salin Nomor
      </a>
    </div>
  `}function M(){const e=document.getElementById("app");if(!e)return;const a=document.createElement("section");a.className="section reveal",a.innerHTML=`
    <div class="section-header">
      <h2 class="section-title">Kirim Ucapan & Konfirmasi</h2>
    </div>
    <div class="floral-border">
      <img src="/themes/casanova/border.webp" alt="flower" />
      <img src="/themes/casanova/tr.webp" alt="flower" class="center" />
      <img src="/themes/casanova/bl.webp" alt="flower" />
    </div>
    <div class="rsvp-section">
      <form id="rsvp-form">
        <div class="form-group">
          <label for="name">Nama Anda</label>
          <input type="text" id="name" name="name" required placeholder="Nama Lengkap" autocomplete="name">
        </div>
        <div class="form-group">
          <label for="attendance">Kehadiran</label>
          <select id="attendance" name="attendance" required>
            <option value="">Pilih kehadiran</option>
            <option value="hadir">Hadir</option>
            <option value="tidak-hadir">Tidak Hadir</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Ucapan untuk Mempelai</label>
          <textarea id="message" name="message" rows="4" placeholder="Tulis ucapan Anda..."></textarea>
        </div>
        <button type="submit" class="rsvp-btn">Kirim Ucapan</button>
      </form>
    </div>
  `,e.appendChild(a),setTimeout(()=>{const t=document.getElementById("rsvp-form");t==null||t.addEventListener("submit",C),document.querySelectorAll(".gift-btn").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault();const s=o.currentTarget.dataset.account;s&&x(s,o.currentTarget)})})},0)}function C(e){e.preventDefault();const a=e.target,t=new FormData(a),n=t.get("name"),o=t.get("attendance"),s=t.get("message"),m=`Halo Mempelai,

Nama: ${n}
Kehadiran: ${o==="hadir"?"Akan Hadir":"Tidak Bisa Hadir"}

Ucapan:
${s||"(Tidak ada ucapan)"}

Salam,
${n}`,v=`https://wa.me/6281234567890?text=${encodeURIComponent(m)}`;window.open(v,"_blank");const d=a.querySelector(".rsvp-btn"),h=d.textContent;d.textContent="Terbuka WhatsApp! ✓",d.style.background="var(--secondary)",setTimeout(()=>{d.textContent=h,d.style.background="",a.reset()},3e3)}function x(e,a){navigator.clipboard.writeText(e).then(()=>{const t=a.innerHTML;a.innerHTML='<i class="fas fa-check"></i> Tersalin!',a.style.background="var(--secondary)",setTimeout(()=>{a.innerHTML=t,a.style.background=""},2e3)})}function S(){const e=document.getElementById("app");if(!e)return;const a=document.createElement("footer");a.className="footer",a.innerHTML=`
    <p class="footer-text">
      Dengan penuh rasa syukur atas kasih dan karunia Allah SWT, 
      kami mengundang Bapak/Ibu/Saudara/i untuk memberikan doa restu 
      pada saat yang berbahagia bagi kami berdua.
    </p>
    <div class="footer-hearts">
      <i class="fas fa-heart"></i>
      <i class="fas fa-heart"></i>
      <i class="fas fa-heart"></i>
    </div>
    <p style="margin-top: 2rem; font-size: 0.85rem; color: var(--text-light);">
      Undangan Pernikahan ${r.cover.coupleNames} &copy; ${new Date().getFullYear()}
    </p>
  `,e.appendChild(a)}function B(){const e=document.createElement("button");e.className="music-toggle",e.id="music-toggle",e.innerHTML='<i class="fas fa-music"></i>',e.setAttribute("aria-label","Putar/Pause musik"),e.addEventListener("click",H),document.body.appendChild(e)}function H(){const e=document.getElementById("music-toggle");e&&(u?(i==null||i.pause(),e.classList.remove("playing"),u=!1):(i=new Audio("/music.mp3"),i.loop=!0,i.volume=.4,i.play().catch(()=>{alert("Klik lagi untuk memutar musik (browser memblokir autoplay)")}),e.classList.add("playing"),u=!0))}function A(){const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal").forEach(t=>e.observe(t));const a=document.querySelector(".cover-scroll");a&&window.addEventListener("scroll",()=>{window.scrollY>100?a.classList.add("hidden"):a.classList.remove("hidden")})}window.addEventListener("beforeunload",()=>{l&&clearInterval(l),i==null||i.pause()});
