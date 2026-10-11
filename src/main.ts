import './style.css'
import { WEDDING_CONFIG } from './config.js'

// State
let countdownInterval: number | null = null
let musicPlaying = false
let audio: HTMLAudioElement | null = null

// Initialize
document.addEventListener('DOMContentLoaded', init)

async function init() {
  showLoading()
  
  // Wait for fonts
  await document.fonts.ready
  
  // Render sections
  renderCover()
  renderCouple()
  renderEvents()
  renderCountdown()
  renderGifts()
  renderRSVP()
  renderFooter()
  renderMusicToggle()
  
  // Start countdown
  startCountdown()
  
  // Setup scroll reveal
  setupReveal()
  
  // Hide loading
  setTimeout(() => {
    hideLoading()
  }, 800)
}

function showLoading() {
  const loading = document.createElement('div')
  loading.className = 'loading'
  loading.id = 'loading'
  loading.innerHTML = `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="90 150" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
      </circle>
    </svg>
    <p class="loading-text">Memuat undangan...</p>
  `
  document.body.appendChild(loading)
}

function hideLoading() {
  const loading = document.getElementById('loading')
  if (loading) {
    loading.classList.add('hidden')
    setTimeout(() => loading.remove(), 600)
  }
}

function renderCover() {
  const { cover } = WEDDING_CONFIG
  const app = document.getElementById('app')
  if (!app) return
  
  const section = document.createElement('section')
  section.className = 'cover'
  section.innerHTML = `
    <div class="cover-content">
      <div class="floral-border">
        <img src="/themes/casanova/border.webp" alt="flower" />
        <img src="/themes/casanova/tr.webp" alt="flower" class="center" />
        <img src="/themes/casanova/bl.webp" alt="flower" />
      </div>
      <p class="cover-title">${cover.title}</p>
      <p class="cover-subtitle">${cover.subtitle}</p>
      <h1 class="cover-couple">${cover.coupleNames}</h1>
      <p class="cover-date">${cover.title === 'Undangan Pernikahan' ? 'Akan datang pada' : ''} ${formatDateForCover(WEDDING_CONFIG.event.weddingDate)}</p>
    </div>
    <div class="cover-scroll" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  `
  app.appendChild(section)
}

function formatDateForCover(isoDate: string): string {
  const date = new Date(isoDate)
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' }
  return date.toLocaleDateString('id-ID', options).toUpperCase()
}

function renderCouple() {
  const { groom, bride } = WEDDING_CONFIG
  const app = document.getElementById('app')
  if (!app) return
  
  const section = document.createElement('section')
  section.className = 'section reveal'
  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">Mempelai</h2>
    </div>
    <div class="couple-grid">
      ${createCoupleCard(groom, 'groom')}
      ${createCoupleCard(bride, 'bride')}
    </div>
  `
  app.appendChild(section)
}

type CouplePerson = {
  name: string
  shortName: string
  fatherName: string
  motherName: string
  instagram?: string
  photo?: string
}

type EventInfo = {
  date: string
  day: string
  time: string
  location: string
  address: string
  googleMapsLink?: string
}

type GiftInfo = {
  bankName: string
  accountNumber: string
  accountHolder: string
  image?: string
}

function createCoupleCard(person: CouplePerson, type: 'groom' | 'bride'): string {
  const photoSrc = person.photo || `/${type}-placeholder.svg`
  
  return `
    <div class="couple-card">
      <img 
        src="${photoSrc}" 
        alt="${person.name}" 
        class="couple-photo"
        onerror="this.src='/${type}-placeholder.svg'"
      />
      <h3 class="couple-name">${person.name}</h3>
      <p class="couple-short">${person.shortName}</p>
      <div class="couple-parents">
        <p><strong>Putra/teri</strong></p>
        <p>${person.fatherName}</p>
        <p>&</p>
        <p>${person.motherName}</p>
      </div>
      ${person.instagram ? `<a href="${person.instagram}" target="_blank" class="couple-instagram"><i class="fab fa-instagram"></i> @${person.instagram.split('/').pop()}</a>` : ''}
    </div>
  `
}

function renderEvents() {
  const { akad, resepsi } = WEDDING_CONFIG.event
  const app = document.getElementById('app')
  if (!app) return
  
  const section = document.createElement('section')
  section.className = 'section reveal'
  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">Acara</h2>
    </div>
    <div class="event-grid">
      ${createEventCard(akad, 'akad')}
      ${createEventCard(resepsi, 'resepsi')}
    </div>
  `
  app.appendChild(section)
}

function createEventCard(event: EventInfo, type: 'akad' | 'resepsi'): string {
  const icon = type === 'akad' ? 'fas fa-book-quran' : 'fas fa-utensils'
  const typeLabel = type === 'akad' ? 'Akad Nikah' : 'Resepsi'
  
  return `
    <div class="event-card">
      <p class="event-type"><i class="${icon}"></i> ${typeLabel}</p>
      <p class="event-day">${event.day}</p>
      <p class="event-date">${event.date}</p>
      <div class="event-time">
        <i class="far fa-clock"></i>
        <span>${event.time}</span>
      </div>
      <div class="event-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>
          ${event.location}<br/>
          ${event.address}
          ${event.googleMapsLink ? `<a href="${event.googleMapsLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Buka di Maps</a>` : ''}
        </span>
      </div>
    </div>
  `
}

function renderCountdown() {
  const app = document.getElementById('app')
  if (!app) return
  
  const section = document.createElement('section')
  section.className = 'section reveal'
  section.innerHTML = `
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
  `
  app.appendChild(section)
}

function startCountdown() {
  const weddingDate = new Date(WEDDING_CONFIG.event.weddingDate).getTime()
  
  function updateCountdown() {
    const now = new Date().getTime()
    const distance = weddingDate - now
    
    if (distance < 0) {
      if (countdownInterval) clearInterval(countdownInterval)
      document.getElementById('days')!.textContent = '00'
      document.getElementById('hours')!.textContent = '00'
      document.getElementById('minutes')!.textContent = '00'
      document.getElementById('seconds')!.textContent = '00'
      return
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
    document.getElementById('days')!.textContent = String(days).padStart(2, '0')
    document.getElementById('hours')!.textContent = String(hours).padStart(2, '0')
    document.getElementById('minutes')!.textContent = String(minutes).padStart(2, '0')
    document.getElementById('seconds')!.textContent = String(seconds).padStart(2, '0')
  }
  
  updateCountdown()
  countdownInterval = window.setInterval(updateCountdown, 1000)
}

function renderGifts() {
  const { gift } = WEDDING_CONFIG
  const app = document.getElementById('app')
  if (!app) return
  
  const section = document.createElement('section')
  section.className = 'section reveal'
  section.innerHTML = `
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
      ${gift.map(g => createGiftCard(g)).join('')}
    </div>
  `
  app.appendChild(section)
}

function createGiftCard(gift: GiftInfo): string {
  const iconSrc = gift.image || '/bank-placeholder.svg'
  
  return `
    <div class="gift-card">
      <div class="gift-icon">
        <img src="${iconSrc}" alt="${gift.bankName}" onerror="this.src='/bank-placeholder.svg'" />
      </div>
      <p class="gift-bank">${gift.bankName}</p>
      <p class="gift-number">${gift.accountNumber}</p>
      <p class="gift-holder">a.n. ${gift.accountHolder}</p>
      <a href="#" class="gift-btn" data-account="${gift.accountNumber}">
        <i class="fas fa-copy"></i> Salin Nomor
      </a>
    </div>
  `
}

function renderRSVP() {
  const app = document.getElementById('app')
  if (!app) return
  
  const section = document.createElement('section')
  section.className = 'section reveal'
  section.innerHTML = `
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
  `
  app.appendChild(section)
  
  // Setup form handler
  setTimeout(() => {
    const form = document.getElementById('rsvp-form') as HTMLFormElement
    form?.addEventListener('submit', handleRSVP)
    
    // Setup copy buttons
    document.querySelectorAll('.gift-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const account = (e.currentTarget as HTMLElement).dataset.account
        if (account) copyToClipboard(account, e.currentTarget as HTMLElement)
      })
    })
  }, 0)
}

function handleRSVP(e: Event) {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  
  const name = formData.get('name') as string
  const attendance = formData.get('attendance') as string
  const message = formData.get('message') as string
  
  // Create WhatsApp message
  const attendanceText = attendance === 'hadir' ? 'Akan Hadir' : 'Tidak Bisa Hadir'
  const whatsappMessage = `Halo Mempelai,\n\nNama: ${name}\nKehadiran: ${attendanceText}\n\nUcapan:\n${message || '(Tidak ada ucapan)'}\n\nSalam,\n${name}`
  
  const phone = '6281234567890' // Default phone, could be in config
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`
  
  window.open(whatsappUrl, '_blank')
  
  // Show success
  const btn = form.querySelector('.rsvp-btn') as HTMLButtonElement
  const originalText = btn.textContent
  btn.textContent = 'Terbuka WhatsApp! ✓'
  btn.style.background = 'var(--secondary)'
  setTimeout(() => {
    btn.textContent = originalText
    btn.style.background = ''
    form.reset()
  }, 3000)
}

function copyToClipboard(text: string, btn: HTMLElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btn.innerHTML
    btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!'
    btn.style.background = 'var(--secondary)'
    setTimeout(() => {
      btn.innerHTML = originalHTML
      btn.style.background = ''
    }, 2000)
  })
}

function renderFooter() {
  const app = document.getElementById('app')
  if (!app) return
  
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.innerHTML = `
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
      Undangan Pernikahan ${WEDDING_CONFIG.cover.coupleNames} &copy; ${new Date().getFullYear()}
    </p>
  `
  app.appendChild(footer)
}

function renderMusicToggle() {
  const toggle = document.createElement('button')
  toggle.className = 'music-toggle'
  toggle.id = 'music-toggle'
  toggle.innerHTML = '<i class="fas fa-music"></i>'
  toggle.setAttribute('aria-label', 'Putar/Pause musik')
  toggle.addEventListener('click', toggleMusic)
  document.body.appendChild(toggle)
}

function toggleMusic() {
  const toggle = document.getElementById('music-toggle')
  if (!toggle) return
  
  if (!musicPlaying) {
    // Create audio element
    audio = new Audio('/music.mp3') // Place music.mp3 in public folder
    audio.loop = true
    audio.volume = 0.4
    audio.play().catch(() => {
      // Autoplay blocked, show message
      alert('Klik lagi untuk memutar musik (browser memblokir autoplay)')
    })
    toggle.classList.add('playing')
    musicPlaying = true
  } else {
    audio?.pause()
    toggle.classList.remove('playing')
    musicPlaying = false
  }
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  
  // Also observe cover scroll indicator
  const coverScroll = document.querySelector('.cover-scroll')
  if (coverScroll) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        coverScroll.classList.add('hidden')
      } else {
        coverScroll.classList.remove('hidden')
      }
    })
  }
}

// Cleanup on unload
window.addEventListener('beforeunload', () => {
  if (countdownInterval) clearInterval(countdownInterval)
  audio?.pause()
})

// Export for config reference
export { WEDDING_CONFIG }