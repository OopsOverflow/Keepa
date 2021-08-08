import React from "react";
import "./App.css"

const Footer: React.FC = () => {
    return (
        <footer>
            <p>Copyright {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
