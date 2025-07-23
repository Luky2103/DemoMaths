import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DemoView = () => {
    const { id } = useParams();
    const history = useHistory();
    const [demo, setDemo] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch the demonstration data based on the ID
        const fetchDemo = async () => {
            const response = await fetch(`/api/demos/${id}`);
            const data = await response.json();
            setDemo(data);
            setContent(data.content);
        };
        fetchDemo();
    }, [id]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSave = async () => {
        const response = await fetch(`/api/demos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });
        if (response.ok) {
            setDemo({ ...demo, content });
            setIsEditing(false);
        }
    };

    const handleDelete = async () => {
        const response = await fetch(`/api/demos/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            history.push('/storage');
        }
    };

    if (!demo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{demo.title}</h1>
            {isEditing ? (
                <div>
                    <textarea value={content} onChange={handleContentChange} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleEditToggle}>Cancel</button>
                </div>
            ) : (
                <div>
                    <div>{demo.content}</div>
                    <button onClick={handleEditToggle}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default DemoView;