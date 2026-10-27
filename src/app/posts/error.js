'use client'; // error.js MUSI być Client Componentem

export default function PostsError({ error, retry }) {
  return (
    <main className="p-8 text-white space-y-4">
      <h1 className="text-2xl font-bold text-red-500">Ups, coś poszło nie tak</h1>
      <p className="text-gray-300">Nie udało się wczytać listy postów.</p>
      <button 
        onClick={() => retry()} 
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white font-medium"
      >
        Spróbuj ponownie
      </button>
    </main>
  );
}