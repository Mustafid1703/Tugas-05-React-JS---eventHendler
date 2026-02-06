import { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentForm() {
  const { dispatch } = useContext(StudentContext);

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_STUDENT",
      payload: { nama, umur, kelas },
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Tambah</button>
    </form>
  );
}
