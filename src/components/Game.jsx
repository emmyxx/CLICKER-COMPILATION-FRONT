import React, { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        // Remplacer "yourapp" par le chemin correct de votre application
        const ws = new WebSocket("ws://localhost:8080/echo");

        ws.onopen = () => {
            console.log('WebSocket connected');
            ws.send("Hello, server!");
        };

        ws.onmessage = (event) => {
            console.log("Message reçu: " + event.data);
        };

        ws.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };

        ws.onclose = () => {
            console.log('WebSocket disconnected');
        };

        // Effectue un nettoyage lorsque le composant est démonté
        return () => {
            ws.close();
        };
    }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois (comme componentDidMount)

    return (
        <div>
            <h2>WebSocket Component</h2>
            <p>Check the console for WebSocket messages.</p>
        </div>
    );
};

export default WebSocketComponent;