import Link from 'next/link';

export default function Default() {
    return (
        <div className="prose prose-sm prose-invert max-w-none">
            <h2 className="text-lg font-bold">Default UI @Team</h2>
            <div className="not-prose flex">
                <Link
                    href="/parallel-routes"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}