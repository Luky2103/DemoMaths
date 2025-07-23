import React, { useState } from 'react';
import LatexPreview from './LatexPreview';

const DemoCreate: React.FC = () => {
    const [title, setTitle] = useState('');
    const [latexInput, setLatexInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to save the demonstration (e.g., API call)
        console.log('Demonstration saved:', { title, latexInput });
        // Reset form fields
        setTitle('');
        setLatexInput('');
    };

    return (
        <div className="demo-create">
            <h2>Create a New Math Demonstration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="latexInput">LaTeX Input:</label>
                    <textarea
                        id="latexInput"
                        value={latexInput}
                        onChange={(e) => setLatexInput(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save Demonstration</button>
            </form>
            <LatexPreview latex={latexInput} />
        </div>
    );
};

export default DemoCreate;