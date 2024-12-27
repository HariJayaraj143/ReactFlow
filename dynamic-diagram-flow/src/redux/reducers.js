import {
  ADD_NODE,
  EDIT_NODE,
  DELETE_NODE,
  ADD_EDGE,
  EDIT_EDGE,
  DELETE_EDGE,
} from "./actions";

// Initial State
const initialState = {
  nodes: [],
  edges: [],
};

// Reducer Function
const diagramReducer = (state = initialState, action) => {
  switch (action.type) {
    // Node Actions
    case ADD_NODE:
      return {
        ...state,
        nodes: [...state.nodes, action.payload],
      };

    case EDIT_NODE:
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === action.payload.nodeId
            ? { ...node, ...action.payload.updatedData }
            : node
        ),
      };

    case DELETE_NODE:
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== action.payload),
        edges: state.edges.filter(
          (edge) =>
            edge.source !== action.payload && edge.target !== action.payload
        ),
      };

    // Edge Actions
    case ADD_EDGE:
      return {
        ...state,
        edges: [...state.edges, action.payload],
      };

    case EDIT_EDGE:
      return {
        ...state,
        edges: state.edges.map((edge) =>
          edge.id === action.payload.edgeId
            ? { ...edge, ...action.payload.updatedData }
            : edge
        ),
      };

    case DELETE_EDGE:
      return {
        ...state,
        edges: state.edges.filter((edge) => edge.id !== action.payload),
      };

    default:
      return state;
  }
};

export default diagramReducer;
