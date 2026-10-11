/// <reference types="vite/client" />

interface WeddingConfig {
  groom: {
    name: string
    shortName: string
    fatherName: string
    motherName: string
    instagram?: string
    photo?: string
  }
  bride: {
    name: string
    shortName: string
    fatherName: string
    motherName: string
    instagram?: string
    photo?: string
  }
  event: {
    akad: {
      date: string
      day: string
      time: string
      location: string
      address: string
      googleMapsLink?: string
    }
    resepsi: {
      date: string
      day: string
      time: string
      location: string
      address: string
      googleMapsLink?: string
    }
    weddingDate: string // ISO format for countdown
  }
  gift: {
    bankName: string
    accountNumber: string
    accountHolder: string
    image?: string
  }[]
  cover: {
    title: string
    subtitle: string
    coupleNames: string // e.g., "Iha & Ardi"
    backgroundImage?: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    fontFamily: string
    borderRadius: string
  }
}

declare const WEDDING_CONFIG: WeddingConfig
