import React, { useEffect, useState } from 'react';
import DemoList from '../components/DemoList';

const StoragePage: React.FC = () => {
    const [demos, setDemos] = useState([]);

    useEffect(() => {
        const fetchDemos = async () => {
            // Fetch the list of demonstrations from an API or local storage
            const response = await fetch('/api/demos'); // Adjust the API endpoint as necessary
            const data = await response.json();
            setDemos(data);
        };

        fetchDemos();
    }, []);

    return (
        <div className="storage-page">
            <h1>Math Demonstrations Storage</h1>
            <DemoList demos={demos} />
        </div>
    );
};

export default StoragePage;