import { useState } from "react";

function NameList() {
  const [inputValue, setInputValue] = useState("");
  const [listNama, setListNama] = useState([]);

  const handleAddName = () => {
    if (inputValue.trim() === "") return;

    setListNama([...listNama, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h3>Daftar Nama</h3>

      <input
        type="text"
        value={inputValue}
        placeholder="Masukkan nama"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAddName}>Tambah Nama</button>

      <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((nama, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NameList;
