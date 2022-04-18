import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
    children: React.ReactNode
}

const Portal: React.FC<IPortal> = ({ children }) => {
    const [container] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}

export default Portal