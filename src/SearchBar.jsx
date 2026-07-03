import { use, useEffect, useState } from "react"
import './SearchJob.css'

function SearchBar({ data, setFiltered }){
    const [searchJob, setSearchJob] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    

    const handleSearch = data.filter( application => 
            application.name.toLowerCase().includes(searchJob.toLowerCase())
        );
    
    useEffect( () => {
        setFiltered(handleSearch);
    }, [data, searchJob]); // dependent on both data - when add new application and searchJob - when input search 
    

    const handleFilter = data.filter( application => 
            application.status.toLowerCase().includes(filterStatus.toLocaleLowerCase())
    );

    useEffect( () => {
        setFiltered(handleFilter);
    }, [filterStatus]);

    return( 
        <div className="search-Section">
        <div className="search-Job">
            <label>Search Job Application:</label>
            <input
            className="filter-search"
            type="text"
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            placeholder="Search Applications..."
            />
        </div>

        <div className="search-Job">
            <label>Filter Applications:</label> 
            <select className="filter-Status"
            onChange={ (e) => setFilterStatus(e.target.value) }>
                <option value=''>--Select--</option>
                <option value='Applied'>Applied</option>
                <option value='Interview'>Interview</option>
                <option value='Rejected'>Rejected</option>
            </select>
        </div>
        </div>
    )
}
 
export default SearchBar