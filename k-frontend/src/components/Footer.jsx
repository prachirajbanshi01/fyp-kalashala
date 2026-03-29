import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.png" alt="Kalashala" className="h-8 w-auto mb-4" />
            <p className="text-stone-500 text-sm">
              Preserving and promoting the digital heritage of regional art.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-bold mb-2">Links</h4>
            <Link to="/" className="text-stone-400 hover:text-white text-sm">Home</Link>
            <Link to="/explore" className="text-stone-400 hover:text-white text-sm">Explore</Link>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Account</h4>
            <Link to="/login" className="text-stone-400 hover:text-white text-sm">Login</Link>
            <br />
            <Link to="/signup" className="text-stone-400 hover:text-white text-sm">Sign Up</Link>
          </div>
        </div>
        <div className="border-t border-stone-900 mt-12 pt-8 text-center text-stone-600 text-xs">
          © {new Date().getFullYear()} Kalashala. All rights reserved.
        </div>
      </div>
    </footer>
  );
}