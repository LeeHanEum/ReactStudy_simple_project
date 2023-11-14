import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import dummyData from './dummyData';

const UserInfo = () => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        if (dataLoaded) {
            setTimeout(() => {
                setLoadedData(dummyData);
            }, 1000);
        }
    }, [dataLoaded]);

    const handleClick = () => {
        setDataLoaded(true);
    };

    return (
        <div className="container" style={{ width: '600px', marginTop: '30px' }}>
            <Button
                variant="outline-secondary"
                style={{ margin: '20px', width: '400px' }}
                onClick={handleClick}
            >
                클릭하여 데이터 로드
            </Button>
            {dataLoaded && (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>학번</th>
                        <th>이름</th>
                        <th>주소</th>
                        <th>전화번호</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loadedData.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default UserInfo;
