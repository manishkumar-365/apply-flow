import { use, useEffect, useState } from "react"
import './JobFormStyle.css'

function JobForm( {setData, data} ) {
    const [companyName, setCompanyName] = useState('');
    const [jobrole, setJobrole] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrormessage] = useState('');

    const applicationData = {
        name: companyName,
        role: jobrole,
        date: date,
        status: status,
    }

    function handleClick(e) {
        e.preventDefault();

        if (companyName === '' || jobrole === '' || date === '' || status === '') {
            setErrormessage('Please fill all the fields!!');
            return;
        }

        if (companyName.length < 3) {
            setErrormessage('Company Name must be greater than or equal to 3 characters!!');
            return;
        }

        if (jobrole.length < 5) {
            setErrormessage('Job Role must be greter than 4 characters!!');
            return;
        }

        setErrormessage('');
        // setting applications to store more application objects
        setData([...data, applicationData]);

        setCompanyName('');
        setJobrole('');
        setDate('');
        setStatus('');
    }


    return (
        <div className="parent-div">
            <div className="Add-application">
                <div>
                    <label>Company Name:</label><br />
                    <input
                        className="data-input"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g., Microsoft"
                    />
                </div>
                <div>
                    <label>Job Role:</label><br />
                    <input
                        className="data-input"
                        type="text"
                        value={jobrole}
                        onChange={(e) => setJobrole(e.target.value)}
                        placeholder="e.g., Senior Developer"
                    />
                </div>
                <div>
                    <label>Date:</label><br />
                    <input
                        className="data-input"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Status:</label><br />
                    <select className="select-Option" value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value=''>--Select--</option>
                        <option value='Applied'>Applied</option>
                        <option value='Interviewed'>Interviewed</option>
                        <option value='Rejected'>Rejected</option>
                    </select>
                </div>
                <div>
                    <button className="Add-btn" type="submit" onClick={handleClick} >Add Application</button>
                </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )
}

export default JobForm