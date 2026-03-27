import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Card from "../components/Card";
import AuthLayout from "../layouts/AuthLayout";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("Registrasi berhasil!");
    navigate("/");
  };

  return (
    <AuthLayout>
      <Card>
        <h1 className="text-center text-2xl font-bold mb-2">🎬 CHILL</h1>
        <h2 className="text-center text-xl">Daftar</h2>

        <InputField label="Nama" type="text" placeholder="Masukkan nama" />
        <InputField label="Email" type="email" placeholder="Masukkan email" />
        <InputField label="No HP" type="text" placeholder="Masukkan no HP" />
        <InputField label="Kata Sandi" type="password" placeholder="Masukkan kata sandi" />

        <Button text="Daftar" onClick={handleRegister} />

        <p className="text-center mt-4 text-gray-400">
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer text-white"
          >
            Masuk
          </span>
        </p>
      </Card>
    </AuthLayout>
  );
}