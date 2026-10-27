import { notFound } from 'next/navigation';

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Błąd serwera');
  return res.json();
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound(); // przerywa renderowanie i pokazuje not-found.js[cite: 7]
  }

  return (
    <main className="p-8 max-w-2xl mx-auto text-white space-y-4">
      <h1 className="text-2xl font-bold text-blue-400 capitalize">{post.title}</h1>
      <p className="text-gray-300 leading-relaxed bg-gray-900 p-4 border border-gray-700 rounded-lg">
        {post.body}
      </p>
    </main>
  );
}