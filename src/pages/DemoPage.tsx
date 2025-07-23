import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DemoView from '../components/DemoView';

const DemoPage = () => {
    const { id } = useParams<{ id: string }>();
    const [demo, setDemo] = useState<any>(null);
    const history = useHistory();

    useEffect(() => {
        const fetchDemo = async () => {
            try {
                const response = await fetch(`/api/demos/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch demonstration');
                }
                const data = await response.json();
                setDemo(data);
            } catch (error) {
                console.error(error);
                history.push('/storage'); // Redirect to storage page on error
            }
        };

        fetchDemo();
    }, [id, history]);

    const handleUpdate = async (updatedDemo: any) => {
        try {
            const response = await fetch(`/api/demos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDemo),
            });
            if (!response.ok) {
                throw new Error('Failed to update demonstration');
            }
            setDemo(updatedDemo);
        } catch (error) {
            console.error(error);
        }
    };

    if (!demo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{demo.title}</h1>
            <DemoView demo={demo} onUpdate={handleUpdate} />
        </div>
    );
};

export default DemoPage;