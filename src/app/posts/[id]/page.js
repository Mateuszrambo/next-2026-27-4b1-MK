async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function PostPage({ params }) {
    // w Next.js 15+ `params` to Promise — trzeba go "odczekać"
    const { id } = await params;
    const post = await getPost(id);

    return (
        <main style={{ padding: '2rem' }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}