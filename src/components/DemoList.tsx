import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DemoList: React.FC = () => {
    const [demos, setDemos] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDemos = async () => {
            try {
                const response = await fetch('/api/demos'); // Adjust the API endpoint as needed
                const data = await response.json();
                setDemos(data);
            } catch (error) {
                console.error('Error fetching demos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDemos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Math Demonstrations</h1>
            <ul>
                {demos.map((demo) => (
                    <li key={demo.id}>
                        <Link to={`/demo/${demo.id}`}>{demo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DemoList;