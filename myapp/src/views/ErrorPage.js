import React from 'react'
import { FaRegSadCry } from "react-icons/fa";

function ErrorPage() {
    return (
        <>
            <div className="app">
                <FaRegSadCry style={{ fontSize: '5rem', paddingTop: 25 }} /><br />
                <span style={{ fontSize: '8rem' }}>404</span><br />
                <span style={{ fontSize: '2rem' }}>This Page is not available yet</span>
            </div>
            <div style={{ float: 'none' }}>Thanks For Using Our Services</div>
        </>
    )
}

export default ErrorPage