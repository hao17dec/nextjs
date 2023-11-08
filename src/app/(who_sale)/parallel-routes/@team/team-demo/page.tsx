import Link from "next/link";
import {Modal} from "antd";

export default function TeamDemo() {
    return (
        <div className="prose prose-sm prose-invert max-w-none">

            <h2 className="text-lg font-bold">Home TeamDemo</h2>
            <Link href="/intercepting-route1/demo">Intercepted Routes</Link>
        </div>
    );
}