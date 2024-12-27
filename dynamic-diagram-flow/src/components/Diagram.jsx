import React, {useState} from 'react'
import Diagram from '../components/Diagram'
import Sidebar from '../components/Sidebar'
import initialData from '../data/initialData.json'
import './DiagramContainer.css'

const DiagramContainer = () => {
  const [elements, setElements] = useState([
    ...initialData.nodes,
    ...initialData.edges,
  ])

  const addNode = node => {
    setElements(els => [...els, node])
  }

  const addEdge = edge => {
    setElements(els => [...els, edge])
  }

  const deleteElement = id => {
    setElements(els => els.filter(el => el.id !== id))
  }

  return (
    <div className='diagram-container'>
      <Sidebar addNode={addNode} addEdge={addEdge} />
      <Diagram
        elements={elements}
        setElements={setElements}
        deleteElement={deleteElement}
      />
    </div>
  )
}

export default DiagramContainer
