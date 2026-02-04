import Layout from "./components/Layout";
import AlertButton from "./components/AlertButton";
import NameList from "./components/NameList";
import StudentApp from "./components/Student/StudentApp";

function App() {
  return (
    <Layout>
      <h2>Selamat Datang</h2>
      <p>di halaman utama latihan kita</p>

      <AlertButton
        text="Klik disini"
        message="Ini adalah pesan dari button"
      />
      <NameList />
      <StudentApp />
    </Layout>
    
    
  );
}

export default App;
