import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/tickets/create">Create Task</Link>
        </nav>
    )
}

export default Navbar