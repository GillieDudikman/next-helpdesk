import Link from "next/link";

export default function NotFound(){
    return (
        <main>
            <h2>Page Not Found</h2>
            <p>There was a problem getting the requested task</p>
            <Link href="/">Back Home</Link>
        </main>
    )
}