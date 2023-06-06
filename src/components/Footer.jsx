import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
    let year = new Date().getFullYear();
    return (
        <>
            <footer className="font-small blue mt-3 bg-light">
                <div className="text-center py-4">© {year} Copyright |
                    <Link to="/about" style={{ textDecoration: "none" }}> Sailendra Chettri</Link>
                </div>
            </footer>

        </>
    );
}