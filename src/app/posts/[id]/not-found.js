import Link from 'next/link';

export default function PostNotFound() {
    return (
        <main className="p-8 text-white space-y-4">
            <h1 className="text-2xl font-bold text-yellow-500">Nie znaleziono posta</h1>
            <p className="text-gray-300">Post o podanym numerze nie istnieje.</p>
            <Link href="/posts" className="text-blue-400 underline hover:text-blue-300 inline-block">
                Wróć do listy postów
            </Link>
        </main>
    );
}