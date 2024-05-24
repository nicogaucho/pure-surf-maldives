import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import { avenirNext } from "@/fonts/fonts";
import "./globals.css";
import { Suspense } from 'react'
import PixelEvents from '@/components/PixelEvents';

export const metadata = {
  title: "Pure Blue Surf & Yoga retreat Maldives",
  description: "Pure Blue Surf & Yoga retreat provide you the perfect packages for all surfers. Our comfy rooms and delicious local cuisine add a touch of luxury to your escape",
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}>
          <PixelEvents />
        </Suspense>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
    </html>
  );
}
