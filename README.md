Dynamic Diagram Flow
An interactive React application that enables users to dynamically create, edit, and delete nodes and edges to build a diagram flow. This project utilizes the React Flow library for diagram rendering and supports user interactions through modals and a sidebar.

Table of Contents

Features
Create, edit, and delete nodes and edges in a dynamic diagram.
Real-time updates to the diagram with responsive rendering.
Sidebar for managing nodes and edges.
Modal-based user inputs for adding or editing items.
Fully responsive design for various screen sizes.

Technologies Used
React: Frontend library for building the UI.
React Flow: Library for creating and managing diagrams.
Redux: State management for dynamic diagram data.
CSS: Styling for modals, sidebar, and layout.
Netlify/Vercel/GitHub Pages: Deployment options

Installation
Clone the repository:

git clone https://github.com/your-username/dynamic-diagram-flow.git
cd dynamic-diagram-flow
Install dependencies:

npm install
Run the development server:

npm start
Open your browser and navigate to http://localhost:3000.

Usage
Use the sidebar to add new nodes or edges.
Edit existing nodes or edges by selecting them and using the modal form.
Delete nodes or edges directly from the sidebar.
JSON Schema Example
Here’s a sample JSON schema to describe nodes and edges:
{
  "nodes": [
    {
      "id": "1",
      "type": "default",
      "position": { "x": 100, "y": 100 },
      "data": { "label": "Node 1" }
    },
    {
      "id": "2",
      "type": "default",
      "position": { "x": 200, "y": 200 },
      "data": { "label": "Node 2" }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2",
      "type": "default"
    }
  ]
}