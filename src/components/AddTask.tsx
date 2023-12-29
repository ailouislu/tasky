import { useState } from "react";
import { Grid, GridItem, Button, Input, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
export interface TaskListProps {
    todos: Task[];
    setTodos: (todos: Task) => void;
}

export interface Task {
    [x: string]: any;
    id: number;
    name: string;
    description: string;
    status: string;
}

const AddTask: React.FC<TaskListProps> = ({ todos, setTodos }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");

    const addTask = () => {
        let hasError = false;

        if (!name) {
            setErrorName("Name is required");
            hasError = true;
        } else {
            setErrorName("");
        }

        if (!description) {
            setErrorDescription("Description is required");
            hasError = true;
        } else {
            setErrorDescription("");
        }

        if (name && description) {
            const maxId = Math.max(...todos.map((task) => task.id));
            const id = maxId + 1;
            const newTask: Task = {
                id: id,
                name: "Story-" + id + ": " + name,
                description,
                status: "To Do",
            };
            setTodos(newTask);
            setName("");
            setDescription("");
        }
    };

    return (
        <div>
            <Grid 
                spacing={6}
                alignItems="center"
                justify="center"
                style={{
                    margin: 0,
                    width: "100%",
                }}
            >
                <GridItem>
                    <Card>
                        <CardHeader>
                            <Heading textAlign="center" fontSize="2xl" fontWeight="bold">
                                Add a task
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Input
                                style={{
                                    width: "100%",
                                    marginBottom: 10,
                                    padding: 10,
                                    border: errorName ? "1px solid red" : "1px solid #ccc",
                                }}
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errorName && (
                                <p className="error-message" style={{ color: "red" }}>
                                    {errorName}
                                </p>
                            )}
                            <Input
                                style={{
                                    width: "100%",
                                    marginBottom: 10,
                                    padding: 10,
                                    border: errorDescription ? "1px solid red" : "1px solid #ccc",
                                }}
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {errorDescription && (
                                <p className="error-message" style={{ color: "red" }}>
                                    {errorDescription}
                                </p>
                            )}
                            <Input
                                variant="filled"
                                style={{
                                    width: "100%",
                                    marginBottom: 10,
                                    padding: 10,
                                    backgroundColor: "#eee",
                                    border: "none",
                                }}
                                placeholder="Status: To Do"
                                value={status}
                                readOnly
                            />
                            <Button onClick={addTask} colorScheme='linkedin'>Add</Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </div>
    );
};

export default AddTask;