import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookCheck, ChevronDown, LogOut, UserRound, UserRoundCogIcon } from "lucide-react";
import { Settings } from "lucide-react";

const Navbar = ({ user = {}, onLogout }) => {
  const menuref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuref.current && !menuref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleLogout = () => {
    setMenuOpen(false);
    onLogout();
  };
  return (
    <header
      className="sticky top-0 z-50 sm:my-3 sm:mt-0 sm:rounded-3xl rounded-b-3xl bg-white/95
      backdrop-blur-md shadow-sm border border-slate-200"
    >
      <div className="flex item-center justify-between py-3 px-4 md:px-6 max-w-full mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br
                from-indigo-600 to-violet-600 shadow-md group-hover:shadow-indigo-200
                group-hover:scale-105 transition-all duration-300"
          >
            <BookCheck className="w-6 h-6 text-white" />
          </div>

          <span
            className="text-2xl sm:text-3xl font-extrabold bg-linear-to-r from-indigo-700 to-violet-600
             bg-clip-text text-transparent tracking-wide font-montserrat"
          >
            TaskMaster
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            className="hidden p-2 text-maintxt hover:bg-basedark rounded-full"
            onClick={() => navigate("/profile")}
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* USER DROPDOWN */}
          <div ref={menuref} className="relative">
            <button
              onClick={handleMenuToggle}
              className="flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-slate-50 transition-colors duration-300 border
                border-slate-200 hover:border-indigo-200 rounded-full"
            >
              <div className="relative">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-9 h-9 rounded-full shadow-sm"
                  />
                ) : (
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100
                        text-indigo-700 font-semibold shadow-sm"
                  >
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full
                  border-2 border-white"
                />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-maintxt">{user.name}</p>
                <p className="text-xs font-normal text-maintxt/50">
                  {user.email}
                </p>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-maintxt transition-transform duration-300 
                    ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>

            
              <ul
                className={`absolute top-14 sm:top-16 right-0 w-56 bg-white rounded-2xl shadow-xl
                border border-slate-200 z-50 overflow-hidden transition-all duration-300 ease-out
                 origin-top-right ${menuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
              >
                <li className="p-2 pb-0">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="w-full px-3 py-2.5 text-left hover:bg-slate-50 rounded-xl text-sm text-slate-700
                        transition-colors flex items-center gap-2 group"
                    role="menuitem"
                  >
                    <UserRoundCogIcon className="w-4 h-4 text-maintxt" />
                    Profile Setting
                  </button>
                </li>

                <li className="p-2">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm
                        hover:bg-red-50 text-red-700"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </li>
              </ul>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
