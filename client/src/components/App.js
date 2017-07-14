import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodoForm'
import VisibleTodoList from '../containers/visibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App