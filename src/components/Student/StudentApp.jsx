  import { useImmerReducer } from "use-immer";
  import { useState } from "react";
  import "./student.css";

  let id = 1;

  const initialStudents = [];

  function studentsReducer(draft, action) {
    switch (action.type) {
      case "ADD_DATA":
        draft.push({
          id: id++,
          nama: action.payload.nama,
          umur: action.payload.umur,
          kelas: action.payload.kelas,
        });
        break;

      case "DELETE_DATA": {
        const index = draft.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) draft.splice(index, 1);
        break;
      }

      case "EDIT_DATA": {
        const index = draft.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) draft[index] = action.payload;
        break;
      }

      default:
        break;
    }
  }

  export default function StudentApp() {
    const [students, dispatch] = useImmerReducer(
      studentsReducer,
      initialStudents
    );

    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState("");
    const [kelas, setKelas] = useState("");
    const [editId, setEditId] = useState(null);

    function handleSubmit() {
      if (!nama || !umur || !kelas) return;

      if (editId) {
        dispatch({
          type: "EDIT_DATA",
          payload: { id: editId, nama, umur, kelas },
        });
        setEditId(null);
      } else {
        dispatch({
          type: "ADD_DATA",
          payload: { nama, umur, kelas },
        });
      }

      setNama("");
      setUmur("");
      setKelas("");
    }

    function handleDelete(id) {
      dispatch({ type: "DELETE_DATA", payload: { id } });
    }

    function handleEdit(student) {
      setEditId(student.id);
      setNama(student.nama);
      setUmur(student.umur);
      setKelas(student.kelas);
    }

    return (
      <div className="container">
        <h1>Note APP</h1>

        
        <div className="form">
          <input
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            placeholder="Umur"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
          />
          <input
            placeholder="Kelas"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          />

          <button onClick={handleSubmit}>
            {editId ? "Update Data" : "Tambah Data"}
          </button>
        </div>

        
        <table className="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Umur</th>
              <th>Kelas</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.nama}</td>
                <td>{s.umur}</td>
                <td>{s.kelas}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(s)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(s.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
