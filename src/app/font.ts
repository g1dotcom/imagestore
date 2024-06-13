import { Inter, Roboto_Mono, Aldrich } from 'next/font/google'

export const aldrich = Aldrich({
  weight: "400",
    subsets: ['latin'],
})
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})