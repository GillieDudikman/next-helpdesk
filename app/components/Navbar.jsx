import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="tickets">Tickets</Link>
        </nav>
    )
}

export default Navbar