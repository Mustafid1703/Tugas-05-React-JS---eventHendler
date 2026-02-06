import { createContext, useImmerReducer } from "use-immer";

export const StudentContext = createContext();

function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push({
        id: Date.now(),
        nama: action.payload.nama,
        umur: action.payload.umur,
        kelas: action.payload.kelas,
      });
      return;

    case "DELETE_STUDENT":
      return draft.filter((s) => s.id !== action.payload);

    case "UPDATE_STUDENT":
      const index = draft.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        draft[index] = action.payload;
      }
      return;

    default:
      return draft;
  }
}

export function StudentProvider({ children }) {
  const [students, dispatch] = useImmerReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}
