import React, {useState} from 'react'
import './Sidebar.css'

const Sidebar = ({addNode, addEdge}) => {
  const [nodeLabel, setNodeLabel] = useState('')
  const [sourceId, setSourceId] = useState('')
  const [targetId, setTargetId] = useState('')

  const handleAddNode = () => {
    const id = Date.now().toString()
    const newNode = {
      id,
      type: 'default',
      position: {x: 150, y: 150},
      data: {label: nodeLabel || `Node ${id}`},
    }
    addNode(newNode)
    setNodeLabel('')
  }

  const handleAddEdge = () => {
    const id = `e${sourceId}-${targetId}`
    const newEdge = {id, source: sourceId, target: targetId, type: 'smoothstep'}
    addEdge(newEdge)
    setSourceId('')
    setTargetId('')
  }

  return (
    <div className='sidebar'>
      <h3>Add Node</h3>
      <input
        type='text'
        placeholder='Node Label'
        value={nodeLabel}
        onChange={e => setNodeLabel(e.target.value)}
      />
      <button onClick={handleAddNode}>Add Node</button>

      <h3>Add Edge</h3>
      <input
        type='text'
        placeholder='Source ID'
        value={sourceId}
        onChange={e => setSourceId(e.target.value)}
      />
      <input
        type='text'
        placeholder='Target ID'
        value={targetId}
        onChange={e => setTargetId(e.target.value)}
      />
      <button onClick={handleAddEdge}>Add Edge</button>
    </div>
  )
}

export default Sidebar
