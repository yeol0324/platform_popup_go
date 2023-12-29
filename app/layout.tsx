import type { Metadata } from 'next';
import ThemesProvider from './theme-provider';
import Header from '@/components/Layout/Header';

export const metadata: Metadata = {
  title: '팝업스토어 정보',
  description: '팝업스토어 정보 한 눈에 보기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemesProvider>
          <Header />
          {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
