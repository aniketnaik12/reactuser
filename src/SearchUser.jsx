
import { useState } from "react";
import User from "./User";
const SearchUser = () => {

    let [username, setUsername] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target[0].value)
    }
    return (
        <>
            <div className="container">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" />
                    </div>
                    <button type="submit" className="mt-3 btn btn-primary">Search</button>
                </form>
            </div>
            <div>
                <User username={username} />
            </div>
        </>
    )
}

export default SearchUser;