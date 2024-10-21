import { Link, useLoaderData } from "react-router-dom"
import Note from "../components/Note"

function NoteDetails() {
    const note = useLoaderData();
    return (
        <section>
            <Link to={"/notes"} className="btn-primary">{"\u2190 Go Home"}</Link>
            <Note title={note.title} content={note.content} isWrap={false}/>
        </section>
    )
}

export default NoteDetails