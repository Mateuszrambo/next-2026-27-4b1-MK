'use client';

export default function CounterButtons({ count, setCount }) {
    return (
        <div className="flex gap-2 mt-2">
            <button
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white font-medium"
                onClick={() => setCount(count + 1)}
            >
                Zwiększ
            </button>
            <button
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white font-medium"
                onClick={() => setCount(count - 1)}
            >
                Zmniejsz
            </button>
        </div>
    );
}