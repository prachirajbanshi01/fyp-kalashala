import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Palette } from "lucide-react";

export default function AuthPage({ mode: initialMode }) {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success! Redirecting to home...`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(180,130,60,0.1)_0%,transparent_70%)]">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#7c5c3a] flex items-center justify-center">
              <Palette size={20} color="#fff" />
            </div>
            <span className="text-2xl font-bold text-[#e8d5b7]">Kalashala</span>
          </Link>
        </div>

        <div className="bg-[#140f0a]/90 border border-[#785a3c]/20 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex bg-[#281c10]/80 rounded-xl p-1 mb-8">
            {['login', 'register'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${mode === m ? 'bg-gradient-to-br from-[#c9a96e] to-[#8b6a3e] text-[#1a1208]' : 'text-[#6b5c4a]'}`}
              >
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#f0e0c4] mb-1">{mode === 'login' ? 'Welcome back' : 'Join Kalashala'}</h2>
          <p className="text-sm text-[#6b5c4a] mb-8">{mode === 'login' ? 'Sign in to your account' : 'Create your free account'}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="text-[10px] text-[#7a6a56] tracking-widest block mb-2 uppercase font-bold">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#1e160e]/80 border border-[#785a3c]/25 rounded-xl px-4 py-3 text-[#e8d5b7] focus:border-[#c9a96e]/50 outline-none" 
                  placeholder="Your Name"
                />
              </div>
            )}
            <div>
              <label className="text-[10px] text-[#7a6a56] tracking-widest block mb-2 uppercase font-bold">Email</label>
              <input 
                type="email" 
                className="w-full bg-[#1e160e]/80 border border-[#785a3c]/25 rounded-xl px-4 py-3 text-[#e8d5b7] focus:border-[#c9a96e]/50 outline-none" 
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-[10px] text-[#7a6a56] tracking-widest block mb-2 uppercase font-bold">Password</label>
              <input 
                type="password" 
                className="w-full bg-[#1e160e]/80 border border-[#785a3c]/25 rounded-xl px-4 py-3 text-[#e8d5b7] focus:border-[#c9a96e]/50 outline-none" 
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-gradient-to-br from-[#c9a96e] to-[#8b6a3e] py-4 rounded-xl text-[#1a1208] font-bold mt-4">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}