import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/50 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-20 backdrop-blur-md">
      <Link to="/" className="text-2xl font-bold">Monastery360</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/" className="hover:text-yellow-400">About Us</Link>
        <Link to="/travel-tourism" className="hover:text-yellow-400">Transport & tourism</Link>
        <Link to="/hotels" className="hover:text-yellow-400">Nearby Hotels</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
      </div>
    </nav>
  );
}
