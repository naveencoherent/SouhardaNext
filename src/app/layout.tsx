import './globals.css';
import Topbar from '../components/layout/Topbar';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'KSSFCL - Souharda Federal Cooperative',
  description: 'Apex body of New Generation Souharda Cooperatives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Topbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}