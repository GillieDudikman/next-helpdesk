import TicketList from "@/app/tickets/TicketList";
import {Suspense} from "react";
import Loading from "@/app/loading";

const Tickets = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Open Tasks</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}

export default Tickets