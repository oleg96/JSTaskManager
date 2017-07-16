import React from 'react'
import TodoAppBar from '../components/appBar'
import VisibleTodoList from '../containers/visibleTodoList'

const App = () => (
    <div>
        <TodoAppBar />
        <VisibleTodoList />
    </div>
)

export default App