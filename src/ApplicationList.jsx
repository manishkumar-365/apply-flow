import { use, useEffect, useState } from 'react';
import './ApplicationList.css'

function ApplicationList({ data, setData, filteredData }) {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleStatus = (status) => {
        if(status==='Applied') return 'green-Applied';
        else if(status==='Interviewed') return 'orange-Interviewed';
        else return 'red-Rejected';
    }
   
    
    function handleNameChange(e){
        const updatedData = data.map( (application, index) => (
            index === selectedRow ? {...application, name: e.target.value} : application
        ))
        setData(updatedData);
    }
    function handleRoleChange(e){
        const updatedData = data.map( (application, index) => (
            index === selectedRow ? {...application, role: e.target.value} : application
        ))
        setData(updatedData);
    }

    function handleDateChange(e){
        const updatedData = data.map( (application, index) => (
            index === selectedRow ? {...application, date: e.target.value} : application
        ))
        setData(updatedData);
    }

    function handleStatusChange(e){
        const updatedData = data.map( (application, index) => (
            index === selectedRow ? {...application, status: e.target.value} : application
        ))
        setData(updatedData);
    }

    function deleteApplication(deletingRow){
        console.log(`delete is clicked and deleting row is ${deletingRow}`)
        const updatedData = data.filter( (_,index) => index !== deletingRow);     
        setData(updatedData);
    }

    

    return (
        <>
            <div className="application-list">
            <div className='title-row'>
                <p>No.</p>
                <p>Company</p>
                <p>Job Role</p>
                <p>Date</p>
                <p>Status</p>
                <p>Edit</p>
                <p>Delete</p>
            </div>

                {isEditing ?
                (
                    <ul className='application-info'>
                        {data.map( (application, index) => (

                            index === selectedRow ? (
                                <li key={index}><div className='application-data'>
                                <span>{index + 1}</span>
                                <input
                                className='new-input'
                                type='text'
                                defaultValue={application.name}
                                onChange={handleNameChange}
                                />
                                <input
                                className='new-input'
                                type='text'
                                defaultValue={application.role}
                                onChange={handleRoleChange}
                                />
                                <input
                                className='new-input'
                                type='date'
                                defaultValue={application.date}
                                onChange={handleDateChange}
                                />
                                <select
                                className='select-Option'
                                defaultValue={application.status}
                                onChange={handleStatusChange}
                                > 
                                <option value='Applied'>Applied</option>
                                <option value='Interviewed'>Interviewed</option>
                                <option value='Rejected'>Rejected</option>
                                </select>

                                <button className='Edit-Btn' onClick={(e) => setIsEditing(false)}>Save</button>
                                <button className='Delete-Btn' onClick={() => deleteApplication(index)}>Delete</button>

                                </div></li>
                            ) : (

                                <li key={index}><div className='application-data'>
                            <span>{index + 1}</span>
                            <span>{application.name}</span>
                            <span>{application.role}</span>
                            <span>{application.date}</span>
                            <span className={handleStatus(application.status)}>{application.status}</span>
                            <button className='Edit-Btn' onClick={() => { setSelectedRow(index); setIsEditing(true) }}>Edit</button>
                            <button className='Delete-Btn' onClick={() => deleteApplication(index)}>Delete</button>
                                </div></li>
                            )
                            
                            
                        ))}

                    </ul>

                ) : (
                    <ul className='application-info'>
                    {filteredData.map((application, index) => (
                    <li key={index}>
                        <div className='application-data'>
                            <span>{index + 1}</span>
                            <span>{application.name}</span>
                            <span>{application.role}</span>
                            <span>{application.date}</span>
                            <span className={handleStatus(application.status)}>{application.status}</span>
                            <button className='Edit-Btn' onClick={() => { setSelectedRow(index); setIsEditing(true) }}>Edit</button>
                            <button className='Delete-Btn' onClick={() => deleteApplication(index) }>Delete</button>
                        </div>
                    </li>

                    ))}
                </ul >
                )}



            </div >

        </>
    );
}

export default ApplicationList