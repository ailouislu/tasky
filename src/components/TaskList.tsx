import React, { useEffect, useState } from 'react'
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/react'
import { DraggableData, DraggableEvent } from 'react-draggable'
import AddTask, { Task } from './AddTask'
import TaskListColumn from './TaskListColumn'

interface TaskListProps {
    todos: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
    function filterTasks(tasks: Task[], status: string): Task[] {
        return tasks.filter((todo) => todo.status === status)
    }

    const [tasks, setTasks] = useState(todos)
    const [todoList, setTodoList] = useState(filterTasks(tasks, 'To Do'))
    const [inProgressList, setInProgressList] = useState(
        filterTasks(tasks, 'In Progress')
    )
    const [doneList, setDoneList] = useState(filterTasks(tasks, 'Done'))
    const [isStarted, setIsStarted] = useState(false)

    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
    }

    const handleDrag = (e: DraggableEvent, data: Object) => {
        console.log('Event: ', e)
        console.log('Data: ', data)
    }

    const handleStart = () => {
        setIsStarted(true)
    }

    const updateTask = (task: Task, updatedStatus: string) => {
        task.status = updatedStatus
    }

    const handleStop = (e: DraggableEvent, data: DraggableData, task: Task) => {
        const status = task.status
        const x = data.x
        const screenWidth = window.innerWidth
        const xRate = x / screenWidth

        if (xRate < 0.1 && xRate > -0.1) {
            setIsStarted(false)
            return
        }

        if (status === 'To Do') {
            if (xRate >= 0.5) {
                setTodoList(todoList.filter((todo) => todo.id !== task.id))
                updateTask(task, 'Done')
                setDoneList([task, ...doneList])
            } else {
                updateTask(task, 'In Progress')
                setTodoList(todoList.filter((todo) => todo.id !== task.id))
                setInProgressList([task, ...inProgressList])
            }
        } else if (status === 'In Progress') {
            if (x > 0) {
                setInProgressList(
                    inProgressList.filter((todo) => todo.id !== task.id)
                )
                updateTask(task, 'Done')
                setDoneList([task, ...doneList])
            } else {
                updateTask(task, 'To Do')
                setInProgressList(
                    inProgressList.filter((todo) => todo.id !== task.id)
                )
                setTodoList([task, ...todoList])
            }
        } else if (status === 'Done') {
            if (xRate <= -0.4) {
                updateTask(task, 'To Do')
                setDoneList(doneList.filter((todo) => todo.id !== task.id))
                setTodoList([task, ...todoList])
            } else {
                updateTask(task, 'In Progress')
                setDoneList(doneList.filter((todo) => todo.id !== task.id))
                setInProgressList([task, ...inProgressList])
            }
        }

        setIsStarted(false)
    }

    useEffect(() => {
        setTasks(tasks)
        setTodoList(filterTasks(tasks, 'To Do'))
        setInProgressList(filterTasks(tasks, 'In Progress'))
        setDoneList(filterTasks(tasks, 'Done'))
    }, [tasks])

    const borderStyle = {
        borderLeft: '2px dashed blue',
        borderRight: '2px dashed blue',
    }

    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            mx={{ base: '10px', md: '50px' }}
        >
            <GridItem sx={isStarted ? borderStyle : {}}>
                <TaskListColumn
                    tasks={todoList}
                    title="To Do"
                    handleDrag={handleDrag}
                    handleStart={handleStart}
                    handleStop={handleStop}
                />
                <AddTask todos={tasks} setTodos={addTask} />
            </GridItem>
            <GridItem sx={isStarted ? borderStyle : {}}>
                <TaskListColumn
                    tasks={inProgressList}
                    title="In Progress"
                    handleDrag={handleDrag}
                    handleStart={handleStart}
                    handleStop={handleStop}
                />
            </GridItem>
            <GridItem sx={isStarted ? borderStyle : {}}>
                <TaskListColumn
                    tasks={doneList}
                    title="Done"
                    handleDrag={handleDrag}
                    handleStart={handleStart}
                    handleStop={handleStop}
                />
            </GridItem>
        </Grid>
    )
}

export default TaskList
