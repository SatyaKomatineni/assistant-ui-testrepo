// TestButton.tsx
// A simple button component for testing UI in isolation.
// You can extend this component to try out new props, styles, or behaviors.
// Convert this file to a client component by adding 'use client' at the top.
'use client';
import React from 'react';


export default function TestButton() {
    // Handler for button click (add your logic here if needed)
    const handleClick = () => {
        alert('Test Button clicked!');
    };

    // If your project uses a CSS framework (like Tailwind, Bootstrap, or a global CSS file),
    // you can use those classes instead of inline styles.
    // Example with Tailwind CSS:
    // return (
    //     <button
    //         className="px-4 py-2 text-base border border-gray-300 rounded bg-white hover:bg-gray-100 cursor-pointer"
    //         onClick={handleClick}
    //     >
    //         Test Button
    //     </button>
    // );

    // Example with a custom CSS class (if defined in your project):
    // return (
    //     <button className="my-custom-button" onClick={handleClick}>
    //         Test Button
    //     </button>
    // );

    // Fallback to inline styles if no CSS framework or class is available:
    return (
        <button
            style={{
                padding: '8px 16px',
                fontSize: 16,
                border: '1px solid #ccc',
                borderRadius: 4,
                background: '#fff',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            Test Button
        </button>
    );
}
