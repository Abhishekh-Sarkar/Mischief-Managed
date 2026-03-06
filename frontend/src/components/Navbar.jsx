import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:scale-105 active:scale-95 transition-transform duration-200 inline-block">
            <h1 className="text-2xl font-bold text-primary font-mono tracking-tight">
              Mischief-Managed
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span className="">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;