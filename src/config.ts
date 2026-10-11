// Wedding Invitation Configuration
// Edit this file to customize the invitation for different couples

export const WEDDING_CONFIG = {
  groom: {
    name: 'Ardianto',
    shortName: 'Ardi',
    fatherName: 'Bapak Saeni',
    motherName: 'Ibu Arnimah',
    instagram: 'https://instagram.com/ardianto',
    photo: '/groom.jpg' // Place photo in /public folder
  },
  bride: {
    name: 'Farihah',
    shortName: 'Iha',
    fatherName: 'Bapak Ahmad Fuadi',
    motherName: 'Ibu Lamhah',
    instagram: 'https://instagram.com/farihah_22',
    photo: '/bride.jpg' // Place photo in /public folder
  },
  event: {
    akad: {
      date: '18 Oktober 2026',
      day: 'MINGGU',
      time: '09.00 WIB - Selesai',
      location: 'Kediaman Mempelai Wanita',
      address: 'Kp. Pamindangan RT 01/RW 03, Kel. Unyur, Kec. Serang, Kota Serang, Banten',
      googleMapsLink: 'https://goo.gl/maps/your-link-here'
    },
    resepsi: {
      date: '18 Oktober 2026',
      day: 'MINGGU',
      time: '11.00 WIB - Selesai',
      location: 'Kediaman Mempelai Wanita',
      address: 'Kp. Pamindangan RT 01/RW 03, Kel. Unyur, Kec. Serang, Kota Serang, Banten',
      googleMapsLink: 'https://goo.gl/maps/your-link-here'
    },
    weddingDate: '2026-10-18T09:00:00+07:00' // ISO format for countdown
  },
  gift: [
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      accountNumber: '385501032593538',
      accountHolder: 'Ardianto',
      image: '/bsi.png' // Place bank logo in /public folder
    },
    {
      bankName: 'Transfer Bank',
      accountNumber: '0895397317294',
      accountHolder: 'Farihah',
      image: '/mobile.png' // Place phone icon in /public folder
    }
  ],
  cover: {
    title: 'Undangan Pernikahan',
    subtitle: 'The Wedding of',
    coupleNames: 'Iha & Ardi',
    backgroundImage: '/cover-bg.jpg' // Optional: Place in /public folder
  },
  theme: {
    primaryColor: '#d4a574', // Gold/Casanova theme
    secondaryColor: '#8b7355', // Brown
    fontFamily: "'Great Vibes', 'Playfair Display', serif",
    borderRadius: '12px'
  }
} as const
