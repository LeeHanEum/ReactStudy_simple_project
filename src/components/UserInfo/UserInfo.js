import React, {useEffect, useState} from 'react';
import dummyData from "./dummyData";
import {Button, Table} from "react-bootstrap";

const UserInfo = () => {

    const [loadedData, setLoadedData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if(isDataLoaded){
            setTimeout(() =>{
                setLoadedData(dummyData)
            },1000)

        }
    }, [isDataLoaded]);

    const handleClick = () => {
        setIsDataLoaded(true);
    }

    return (
        <div className="container" style={{ width: '600px', marginTop: '30px' }}>
            <Button
                variant="outline-secondary"
                style={{ margin: '20px', width: '400px' }}
                onClick={handleClick}
            >
                클릭하여 데이터 로드
            </Button>
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
                        <td>{index}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserInfo;
