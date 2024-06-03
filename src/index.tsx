// import('./bootstarp')
// When the host app loads it will firt load the main.js file.
// At first the remoteEntry needs to be loaded after that the code that runs the host app needs to be loaded.
// This can be achieved in two ways. To asynchornously import the boostrap fil. So that main.js is loaded. After that remoteEntry will be loaded.
// After that the bootstrap is loaded that contains the actual code to run the host app.
// The second option is to add the remoteEntry of the module federated app in the head of host app html file.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
