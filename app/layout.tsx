import type { Metadata } from 'next';
import '@fontsource/anton/400.css';
import '@fontsource/montserrat/400.css'; import '@fontsource/montserrat/500.css'; import '@fontsource/montserrat/600.css'; import '@fontsource/montserrat/700.css';
import './globals.css';
export const metadata: Metadata = { title:'Tranquiltone Sports Club, Kanpur', description:'Cricket nets, football, pickleball and badminton at Tranquiltone Sports Club, Kanpur.', metadataBase:new URL('https://tranquiltone-sports-club.vercel.app'), openGraph:{title:'Tranquiltone Sports Club',description:'Train hard. Play smart.',type:'website'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
