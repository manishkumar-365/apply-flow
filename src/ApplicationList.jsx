import { useState } from 'react';
import './ApplicationList.css'

function ApplicationList({ applications, setApplications, filteredApplications }) {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    function handleFieldChange(e,fieldName){
        const updatedData = applications.map( (application) => (
            application.id === selectedRow ? {...application, [fieldName]: e.target.value} : application
        ))
        setApplications(updatedData);
    }

    function deleteApplication(deletingRow){
        const updatedData = applications.filter( (application) => application.id !== deletingRow);     
        setApplications(updatedData);
    }

    return (<div className="application-list">

        <div className='title-row'>
            <p>No.</p>
            <p>Company</p>
            <p>Job Role</p>
            <p>Date</p>
            <p>Status</p>
            <p>Action</p>
        </div>

        {filteredApplications.length === 0 && <p>No Application Available.</p>}
        
        <ul className='application-info'>
            {filteredApplications.map((application, index) => (
                <li key={application.id}>
                    <div className='application-data'>

                        <span>{index + 1}</span>

                        { (isEditing && application.id===selectedRow) ? 
                            <input
                                className='new-input'
                                type='text'
                                defaultValue={application.name}
                                onChange={(e) => handleFieldChange(e, "name")}
                            /> : <span>{application.name}</span>}

                        { (isEditing && application.id===selectedRow) ?
                            <input
                                className='new-input'
                                type='text'
                                defaultValue={application.role}
                                onChange={(e) => handleFieldChange(e, "role")}
                            /> : <span>{application.role}</span>}

                        { (isEditing && application.id===selectedRow) ?
                            <input
                                className='new-input'
                                type='date'
                                defaultValue={application.date}
                                onChange={(e) => handleFieldChange(e, "date")}
                            /> : <span>{application.date}</span>}

                        { (isEditing && application.id===selectedRow) ?
                            <select
                                className='select-Option'
                                defaultValue={application.status}
                                onChange={(e) => handleFieldChange(e, "status")}
                            >
                                <option value='Applied'>Applied</option>
                                <option value='Interviewed'>Interviewed</option>
                                <option value='Rejected'>Rejected</option>
                            </select> : <span className={application.status}>{application.status}</span>}

                        <div className='Action-Btn'>
                            { (isEditing && application.id===selectedRow) ?
                                <button className='Edit-Btn' onClick={() => setIsEditing(false)}>Save</button> :
                                <button className='Edit-Btn' onClick={() => { setSelectedRow(application.id); setIsEditing(true) }}>Edit</button>
                            }

                            <button className='Delete-Btn' onClick={() => deleteApplication(application.id)}>Delete</button>
                        </div>
                    </div>
                </li>

            ))}
        </ul >

        </div >
    )
}

export default ApplicationList