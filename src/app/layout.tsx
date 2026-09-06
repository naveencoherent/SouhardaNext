import './globals.css';
import Topbar from '../components/layout/Topbar';
import Footer from '../components/layout/Footer';
import ChatAssistant from '../components/layout/ChatAssistant';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'KSSFCL - Souharda Federal Cooperative',
  description: 'Apex body of New Generation Souharda Cooperatives',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Topbar />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
          <ChatAssistant />
        </LanguageProvider>
      </body>
    </html>
  );
}