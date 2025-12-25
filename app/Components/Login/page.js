"use client";
import { useState, useEffect, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthForm() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const [isLogin, setIsLogin] = useState(mode === "login" ? true : true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  useEffect(() => {
    if (mode === "login") {
      setIsLogin(true);
    }
  }, [mode]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "/api/auth/login"
      : "/api/auth/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await res.json();

      if (!isLogin && res.ok) {

        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
        // After successful registration, switch to login mode
        router.push("/Auth/login");
      }

      if (isLogin && res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({
          name: data.name, email: data.email,
          role: data.role
        }));
        setForm({ name: "", email: "", password: "" });

        if (data.role === 'admin') {
          router.push("/admin/dashboard")
        } else {
          router.push("/user/dashboard")
        }
      } else {
        console.log(data.error || "Something went wrong");
      }

      console.log(data);
    } catch (err) {
      console.error("Network error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Welcome back" : "Create an account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 font-semibold text-black hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
