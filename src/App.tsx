import TaskList from './components/TaskList'
import ColorModeSwitch from './components/ColorModeSwitch'
import stories from './data/stories'

function App() {
    return (
        <div>
            <ColorModeSwitch />
            <TaskList todos={stories} />
        </div>
    )
}

export default App
