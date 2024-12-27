// Action Types
export const ADD_NODE = "ADD_NODE";
export const EDIT_NODE = "EDIT_NODE";
export const DELETE_NODE = "DELETE_NODE";

export const ADD_EDGE = "ADD_EDGE";
export const EDIT_EDGE = "EDIT_EDGE";
export const DELETE_EDGE = "DELETE_EDGE";

// Action Creators

// Node Actions
export const addNode = (node) => ({
  type: ADD_NODE,
  payload: node,
});

export const editNode = (nodeId, updatedData) => ({
  type: EDIT_NODE,
  payload: { nodeId, updatedData },
});

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  payload: nodeId,
});

// Edge Actions
export const addEdge = (edge) => ({
  type: ADD_EDGE,
  payload: edge,
});

export const editEdge = (edgeId, updatedData) => ({
  type: EDIT_EDGE,
  payload: { edgeId, updatedData },
});

export const deleteEdge = (edgeId) => ({
  type: DELETE_EDGE,
  payload: edgeId,
});
