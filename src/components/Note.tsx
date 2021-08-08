import React from "react";

const Note: React.FC = () => {
    return (
        <div className="note">
            <h1 contentEditable={true}>
                Title
            </h1>
            <p contentEditable={true}>
                Content
            </p>
        </div>
    )
}

export default Note
