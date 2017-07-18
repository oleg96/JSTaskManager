import React from 'react'
import TodoAppBar from '../components/appBar'

const App = ({children}) => (
    <div>
        <TodoAppBar />
        {children}
    </div>
)

export default App