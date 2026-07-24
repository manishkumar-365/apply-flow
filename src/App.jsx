import { useEffect, useState } from 'react'
import JobForm from './JobForm.jsx'
import Navbar from './Navbar.jsx'
import DashboardCards from './DashboardCards.jsx'
import SearchBar from './SearchBar.jsx'
import ApplicationList from './ApplicationList.jsx'

function App() {
  
  const [ applications, setApplications ] = useState( () => {
    try{
      const savedData = localStorage.getItem('applicationList');
      return savedData ? JSON.parse(savedData) : []; 
    } catch(error){
      console.error('Error reading local storage', error);
      return [];
    }
  });

  const [searchJob, setSearchJob] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(()=>{
    localStorage.setItem('applicationList', JSON.stringify(applications));
  },[applications])

  const filteredApplications = applications.filter(application => {

    const matchNames = application.name
                       .toLowerCase()
                       .includes(searchJob.toLowerCase());
    
    const matchStatus = filterStatus === '' || application.status === filterStatus;

    return matchNames && matchStatus;
  });

  return (
    <>
      <Navbar />
      <div className='center-form-Dashboard'>

      <DashboardCards applications={applications}/>

      <JobForm setApplication={setApplications} />

      <SearchBar searchJob={searchJob} 
      setSearchJob={setSearchJob} 
      setFilterStatus={setFilterStatus} />

      <ApplicationList 
      applications={applications} 
      setApplications={setApplications} 
      filteredApplications={filteredApplications}/>

      </div>
    </>
  );
}

export default App
