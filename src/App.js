import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './components/Records';
import Pagination from './components/Pagination';
import './App.css';

function App() {

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);


    useEffect(() => {
        axios.get('https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/records')
            .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    alert('There was an error while retrieving the data')
                })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div className='container mt-5'>
            <h2 style={{textAlign:'center'}}>React Paginations</h2>
            <br></br>
            <Records data={currentRecords}/>
            <br></br>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;