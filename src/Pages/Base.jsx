import { Link } from "react-router-dom";

function Base() {
    return (
        <div className="base">
            <Link to="/notes" className="btn-primary">to Notes App</Link>
            <Link to="/weather" className="btn-primary">to Weather App</Link>
        </div>
    )
}

export default Base;