import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentTable() {
  const { students, dispatch } = useContext(StudentContext);

  function handleDelete(id) {
    dispatch({
      type: "DELETE_STUDENT",
      payload: id,
    });
  }

  function handleEdit(student) {
    const nama = prompt("Nama baru", student.nama);
    const umur = prompt("Umur baru", student.umur);
    const kelas = prompt("Kelas baru", student.kelas);

    dispatch({
      type: "UPDATE_STUDENT",
      payload: { ...student, nama, umur, kelas },
    });
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.nama}</td>
            <td>{s.umur}</td>
            <td>{s.kelas}</td>
            <td>
              <button onClick={() => handleEdit(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
