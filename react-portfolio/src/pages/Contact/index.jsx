import React, { useState } from 'react';
import Contact from '../Contact';
export default function DisplayContact() {
    const [showContact, setShowContact] = useState(false);

    const contactClick = () => {
        setShowContact(true);
    };

    return (
        <div>
            <button onClick={contactClick}>Show Contact</button>
            {showContact && <Contact />}
        </div>
    );
}
