import { useState } from 'react'
import JobForm from './JobForm.jsx'
import Navbar from './Navbar.jsx'
import DashboardCards from './DashboardCards.jsx'
import SearchBar from './SearchBar.jsx'
import ApplicationList from './ApplicationList.jsx'

function App() {
  
  const [ applications, setApplications ] = useState( () => {
    const savedData = localStorage.getItem('applicationList');
    return savedData ? JSON.parse(savedData) : []; // setting initial value after page reload
  });
  localStorage.setItem('applicationList', JSON.stringify(applications));
  const [ filteredApplication, setFilteredApp ] = useState([]);



  return (
    <>
      <Navbar />
      <div className='center-form-Dashboard'>
      <DashboardCards data={applications}/>
      <JobForm setData={setApplications} data={applications} />
      <SearchBar data={applications} setFiltered={setFilteredApp} />
      <ApplicationList data={applications} setData={setApplications} filteredData={filteredApplication}/>
      </div>
    </>
  );
}

export default App
