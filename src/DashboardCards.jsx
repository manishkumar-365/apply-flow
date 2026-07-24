
function DashboardCards({applications}){

    const counts = applications.reduce( (acc,curr)=>{

        (acc[curr.status]) ? acc[curr.status]++ : acc[curr.status] = 1;
        
        return acc;
    }, {})

    return(
        <div className="dashboard-cards">
            <div>Total Applications: &nbsp; <span className="length-Style">{applications.length}</span></div>
            <div>Applied: &nbsp; <span className="length-Style">{counts.Applied || 0}</span></div>
            <div>Interview: &nbsp; <span className="length-Style">{counts.Interviewed || 0}</span></div>
            <div>Rejected: &nbsp; <span className="length-Style">{counts.Rejected || 0}</span></div>
        </div>
    )
}

export default DashboardCards