import React from 'react'
import TodoAppBar from '../components/appBar'
import Footer from './footer'
import AddTodo from './addTodoForm'
import VisibleTodoList from '../containers/visibleTodoList'

const App = () => (
    <div>
        <TodoAppBar />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App