import type { Metadata } from 'next';
import BottomNav from '@/components/Layout/BottomNav';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: '팝업스토어 정보',
  description: '팝업스토어 정보 한 눈에 보기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
