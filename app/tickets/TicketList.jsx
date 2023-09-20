import Link from "next/link";

const getTickets = async () => {
    const res = await fetch("http://localhost:4000/tasks/", {
        next: {
            revalidate: 0
        }
    });

    return res.json()
}

const TicketList = async () => {
    const tickets = await getTickets();
    return(
        <>
            {
                tickets.map(ticket => (
                    <div key={ticket.id}>
                        <Link href={`/tickets/${ticket.id}`}>
                            <h2>{ticket.title}</h2>
                            <p>{ticket.body.slice(0,200)}...</p>
                            <div className={`priority-${ticket.priority}`}>
                                {ticket.priority} priority
                            </div>
                        </Link>
                    </div>
                ))
            }
            {tickets.length === 0 && (
                <p>There are no open tasks</p>
            )}
        </>
    )
}

export default TicketList