import React, { useState } from 'react';
import { render } from 'react-dom';
import { render as renderMath } from 'react-latex';

const LatexPreview: React.FC = () => {
    const [latexInput, setLatexInput] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLatexInput(event.target.value);
    };

    return (
        <div className="latex-preview">
            <textarea
                value={latexInput}
                onChange={handleInputChange}
                placeholder="Enter LaTeX code here..."
                rows={10}
                cols={50}
            />
            <div className="preview">
                {renderMath(latexInput)}
            </div>
        </div>
    );
};

export default LatexPreview;