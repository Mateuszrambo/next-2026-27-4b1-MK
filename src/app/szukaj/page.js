export default async function SzukajPage({ searchParams }) {
  // w Next.js 15+ `searchParams` to Promise
  const { q: query = '' } = await searchParams;

  return (
    <main className="p-8 max-w-xl mx-auto text-white space-y-4">
      <h1 className="text-2xl font-bold">Wyszukiwarka</h1>
      <form action="/szukaj" method="get" className="space-y-4">
        <div>
          <input 
            name="q" 
            type="text" 
            defaultValue={query} 
            placeholder="Czego szukasz?" 
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded font-medium text-white"
        >
          Szukaj
        </button>
      </form>
      {query && (
        <p className="text-gray-300">
          Wyniki dla frazy: <strong className="text-blue-400">{query}</strong>
        </p>
      )}
    </main>
  );
}