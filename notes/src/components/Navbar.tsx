import React, { useState, useContext } from 'react';
import { NoteContext } from "../reducer/useContext";
import { ServiceManager } from "../services/service-layer";

import { Link } from 'react-router-dom';
function Navbar() {
    const [search, setSearch] = useState("");

    const { dispatch } = useContext(NoteContext);
    const service = new ServiceManager();

    function handleTitleChange(event: any) {
        setSearch(event.target.value);
    }
    function handleSearch() {
        service.searchTitle(dispatch, search);

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">NOTES</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/'>       <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/addNotes'>     <a className="nav-link" href="#">Add Notes</a></Link>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleTitleChange} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => { handleSearch(); }}>Search</button>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default Navbar
