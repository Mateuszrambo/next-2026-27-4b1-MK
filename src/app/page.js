import Link from 'next/link';
import Counter from '@/components/Counter';
import CounterDashboard from '@/components/CounterDashboard';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export default function HomePage() {
  return (
    <main className="p-8 text-white max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Witaj na naszej stronie głównej!</h1>
        <p className="text-gray-300">To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
        <Link href="/about" className="text-blue-400 underline hover:text-blue-300 inline-block mt-2">
          Przejdź do strony O nas
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Zwykły licznik:</h2>
        <Counter />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Licznik ze współdzielonym stanem:</h2>
        <CounterDashboard />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sekcja stylów i komponentów:</h2>
        {/* Responsywny grid z instrukcji (1 kolumna na telefonie, 2 na większych ekranach) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card title={<span className="highlight">Projekt Next.js</span>}>
            Strona zrealizowana z wykorzystaniem stylów globalnych i Tailwinda.
          </Card>
          <Card title="Interaktywność">
            Używamy stanu useState oraz komponentów modularnych.
            <div className="mt-3">
              <Badge>Badge w Tailwindzie</Badge>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}