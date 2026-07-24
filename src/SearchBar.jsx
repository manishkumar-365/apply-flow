import './SearchJob.css'

function SearchBar({ searchJob, setSearchJob, setFilterStatus }){

    return( 
        <div className="search-Section">
        <div className="search-Job">
            <label htmlFor='inputSearch'>Search Job Application:</label>
            <input
            id='inputSearch'
            className="filter-search"
            type="text"
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            placeholder="Search Applications..."
            />
        </div>

        <div className="search-Job">
            <label htmlFor='inputFilter'>Filter Applications:</label> 
            <select 
            id='inputFilter'
            className="filter-Status"
            onChange={ (e) => setFilterStatus(e.target.value) }>
                <option value=''>--Select--</option>
                <option value='Applied'>Applied</option>
                <option value='Interviewed'>Interviewed</option>
                <option value='Rejected'>Rejected</option>
            </select>
        </div>
        </div>
    )
}
 
export default SearchBar