
function DashboardCards({data}){

    const countApplied = data.filter( (index) => {
        if(index.status==="Applied"){
            return true;
        }
        else false;
    })

    const countInterview = data.filter( (index) => {
        if(index.status==="Interviewed"){
            return true;
        }
        else false;
    })

    const countRejected = data.filter( (index) => {
        if(index.status==="Rejected"){
            return true;
        }
        else false;
    })



    return(
        <div className="dashboard-cards">
            <div>Total Applications: &nbsp; <span className="length-Style">{data.length}</span></div>
            <div>Applied: &nbsp; <span className="length-Style">{countApplied.length}</span></div>
            <div>Interview: &nbsp; <span className="length-Style">{countInterview.length}</span></div>
            <div>Rejected: &nbsp; <span className="length-Style">{countRejected.length}</span></div>
        </div>
    )
}

export default DashboardCards