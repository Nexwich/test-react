export default function logs (state = [], action = {}) {
  switch (action.type) {
    case 'LOG_ADD':
      return [...state, {
        id: Math.random(),
        ...action.data,
      }];

    case 'LOG_REMOVE':
      return [...state.filter((alert) => alert.id !== action.id)];

    case 'LOG_CLEAR':
      return [];

    default:
      return state;
  }
}
