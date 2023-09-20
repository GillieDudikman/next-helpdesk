import {notFound} from "next/navigation";

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:4000/tasks/");
    const tickets = await res.json();

    return tickets.map(ticket => ({
        id: ticket.id.toString()
    }))
}

const getDetails = async (id) => {
    const res = await fetch("http://localhost:4000/tasks/"+id, {
        next: {
            revalidate: 60
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}

const TicketDetails = async ({ params }) => {
    const ticket = await getDetails(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div>
                <h3>{ticket.title}</h3>
                <p>Created by: {ticket.user_email}</p>
                <p>{ticket.body}</p>
                <div className={`priority-${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}

export default TicketDetails