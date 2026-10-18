import Link from 'next/link';
import Counter from '@/components/Counter';
import Card from '@/components/Card'; 

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
      
      <Counter />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
        <Card title="Projekt Next.js">Strona zrealizowana z Tailwind CSS</Card>
        <Card title="Interaktywność">Używamy stanu useState</Card>
      </div>
    </main>
  );
}