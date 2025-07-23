import React from 'react';
import DemoCreate from '../components/DemoCreate';

const CreatePage: React.FC = () => {
    return (
        <div className="create-page">
            <h1>Create a New Math Demonstration</h1>
            <DemoCreate />
        </div>
    );
};

export default CreatePage;