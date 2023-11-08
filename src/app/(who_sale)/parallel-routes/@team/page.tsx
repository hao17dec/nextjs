import Link from "next/link";

export default function Team() {
    return (
        <div className="prose prose-sm prose-invert max-w-none">
            <h2 className="text-lg font-bold">Home Team</h2>
            <Link href="/parallel-routes/team-demo">Team Demo with Intercepted Routes</Link> |
            <Link href="/parallel-routes/team-demo-2">Team Demo 2</Link>
        </div>
    );
}