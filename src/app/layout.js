import { CounterProvider } from '@/context/CounterContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <CounterProvider>
          <header style={{ background: '#f0f0f0', padding: '1rem', color: '#050505' }}>
            <nav>
              <strong>Moja Aplikacja Szkolna</strong>
            </nav>
          </header>
          {children}
        </CounterProvider>
      </body>
    </html>
  );
}