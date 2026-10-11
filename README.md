# Wedding Invitation - Customizable Template

Template undangan pernikahan digital yang bisa digunakan berkali-kali dengan konfigurasi yang mudah.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Kustomisasi

Edit file `src/config.ts` untuk mengubah data pernikahan:

```typescript
export const WEDDING_CONFIG = {
  groom: { /* data mempelai pria */ },
  bride: { /* data mempelai wanita */ },
  event: { /* info acara */ },
  gift: [ /* daftar rekening */ ],
  cover: { /* judul & nama couple */ },
  theme: { /* warna & font */ }
}
```

### 📸 Assets yang Perlu Ditambahkan

Tempatkan file berikut di folder `/public`:

- `groom.jpg` - Foto mempelai pria
- `bride.jpg` - Foto mempelai wanita
- `cover-bg.jpg` - Background cover (opsional)
- `bsi.png` - Logo bank BSI
- `mobile.png` - Icon mobile/transfer
- `music.mp3` - Musik latar (opsional)
- `heart.svg` - Icon untuk favicon

### 🎨 Tema

Default menggunakan tema **Casanova** (gold/brown):

```typescript
theme: {
  primaryColor: '#d4a574',    // Gold
  secondaryColor: '#8b7355',  // Brown
  fontFamily: "'Great Vibes', 'Playfair Display', serif",
  borderRadius: '12px'
}
```

## 📱 Fitur

- ✅ Responsive (mobile-first)
- ✅ Countdown timer
- ✅ RSVP via WhatsApp
- ✅ Copy nomor rekening
- ✅ Music toggle
- ✅ Scroll animations
- ✅ Floral decorations
- ✅ Google Maps integration

## 🚀 Deploy

### Vercel
```bash
git push
# Vercel auto-deploy
```

### Manual
```bash
npm run build
# Upload dist/ ke hosting
```

## 📝 Struktur File

```
wedding-invitation/
├── src/
│   ├── config.ts      # Konfigurasi data
│   ├── main.ts        # Logic aplikasi
│   ├── style.css      # Styling
│   └── vite-env.d.ts  # TypeScript types
├── public/            # Assets (foto, musik, dll)
├── dist/              # Build output
└── package.json
```

## 🎯 Reuse untuk Undangan Lain

1. Clone repo ini
2. Edit `src/config.ts` dengan data baru
3. Ganti assets di `/public`
4. Build & deploy

## 📄 License

Free to use for personal & commercial projects.

---

Dibuat dengan ❤️ untuk pernikahan yang berbahagia.
