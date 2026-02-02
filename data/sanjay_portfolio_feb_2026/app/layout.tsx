import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanjay Naik - Senior Software Engineer',
  description:
    'Strategic Senior Software Engineer with 3.5+ years of experience in architecting high-concurrency microservices and integrating Generative AI to optimize the SDLC.',
  keywords: [
    'Sanjay Naik',
    'Software Engineer',
    'Backend Developer',
    'GenAI',
    'Microservices',
    'Java',
    'Spring Boot',
    'AI Engineer',
  ],
  authors: [{ name: 'Sanjay' }],
  openGraph: {
    title: 'Sanjay Naik - Senior Software Engineer',
    description:
      'Strategic Senior Software Engineer specializing in backend development, microservices, and AI/ML integration.',
    url: 'https://www.sanjaydev.online/',
    siteName: 'Sanjay\'s Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sj Bio',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="apple-mobile-web-app-title" content="Sj Bio" />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Always apply dark theme
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  
                  console.log('Initial theme: dark');
                } catch (e) {
                  console.error('Theme script error:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
