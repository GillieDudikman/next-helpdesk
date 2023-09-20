"use client"

import {useState} from "react";
import {notFound, useRouter} from "next/navigation";

const CreateForm = () => {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [priority, setPriority] = useState("low");
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const task = {
            title,
            body,
            priority,
            user_email: email
        }

        const res = await fetch("http://localhost:4000/tasks/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        })
        if (res.status === 201){
            router.refresh();
            router.push("/tickets")
        }else{
            notFound();
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input type="text" required onChange={e=> setTitle(e.target.value)} value={title}/>
            </label>
            <label>
                <span>Body:</span>
                <textarea required onChange={e=>setBody(e.target.value)} value={body}></textarea>
            </label>
            <label>
                <span>Priority:</span>
                <select onChange={e=>setPriority(e.target.value)} value={priority}>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" placeholder="email@example.com" required onChange={e=> setEmail(e.target.value)} value={email}/>
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Add Task</span>}
            </button>
        </form>
    )

}
export default CreateForm