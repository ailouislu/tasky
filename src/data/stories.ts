interface Story {
  id: number;
  name: string;
  description: string;
  status: string;
  }
  
  const stories: Story[] = [
  {
    id: 1,
    name: "Story-1: Create a TaskCard component",
    description: "A component that renders a task card with its title, description, and due date.",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Story-2: Add a search bar to the TaskList component",
    description: "A search bar that allows users to filter the tasks by title or description.",
    status: "To Do",
  },
  {
    id: 3,
    name: "Story-3: Implement a drag-and-drop feature for the TaskList component",
    description: "Allows users to rearrange the tasks by dragging and dropping them.",
    status: "Done",
  },
  {
    id: 4,
    name: "Story-4: Add a notification feature for the TaskList component",
    description: "Notifies users when a task is due.",
    status: "To Do",
  },
  {
    id: 5,
    name: "Story-5: Add a filter button to the TaskList component",
    description: "Allows users to filter the tasks by status.",
    status: "Done",
  },
  {
    id: 6,
    name: "Story-6: Add a chart to the TaskList component",
    description: "Displays a chart of the tasks by status.",
    status: "In Progress",
  },
  {
    id: 7,
    name: "Story-7: Add a report to the TaskList component",
    description: "Generates a report of the tasks.",
    status: "In Progress",
  },
  {
    id: 8,
    name: "Story-8: Add an export feature to the TaskList component",
    description: "Allows users to export the tasks to a CSV file.",
    status: "Done",
  },
  {
    id: 9,
    name: "Story-9: Add an import feature to the TaskList component",
    description: "Allows users to import tasks from a CSV file.",
    status: "In Progress",
  },
];
  
  export default stories;