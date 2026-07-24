import { useState } from "react"
import './JobFormStyle.css'

function JobForm( { setApplication } ) {
    const [companyName, setCompanyName] = useState('');
    const [jobrole, setJobrole] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrormessage] = useState('');

    const applicationData = {
        id: crypto.randomUUID(),
        name: companyName,
        role: jobrole,
        date: date,
        status: status
    }

    function handleClick(e) {
        e.preventDefault();

        if (
            !companyName.trim() ||
            !jobrole.trim() ||
            !date ||
            !status
        ) {
            setErrormessage('Please fill all the fields.');
            return;
        }

        if (companyName.trim().length < 2) {
            setErrormessage('Company name must be at least 2 characters.');
            return;
        }

        if (jobrole.trim().length < 5) {
            setErrormessage('Job role must be at least 5 characters.');
            return;
        }

        setErrormessage('');
        setApplication(prev=> [...prev, applicationData]);

        setCompanyName('');
        setJobrole('');
        setDate('');
        setStatus('');
    }


    return (
        <div className="parent-div">
            <div className="Add-application">
                <div>
                    <label htmlFor="inputName">Company Name:</label><br />
                    <input
                        id="inputName"
                        className="data-input"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g., Microsoft"
                    />
                </div>
                <div>
                    <label htmlFor="inputRole">Job Role:</label><br />
                    <input
                        id="inputRole"
                        className="data-input"
                        type="text"
                        value={jobrole}
                        onChange={(e) => setJobrole(e.target.value)}
                        placeholder="e.g., Senior Developer"
                    />
                </div>
                <div>
                    <label htmlFor="inputDate">Date:</label><br />
                    <input
                        id="inputDate"
                        className="data-input"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputStatus">Status:</label><br />
                    <select 
                    id="inputStatus" 
                    className="select-Option" 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}>
                        <option value=''>Choose Status</option>
                        <option value='Applied'>Applied</option>
                        <option value='Interviewed'>Interviewed</option>
                        <option value='Rejected'>Rejected</option>
                    </select>
                </div>
                <div>
                    <button
                    className="Add-btn"
                    type="submit"
                    onClick={handleClick}>Add Application</button>
                </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )
}

export default JobForm