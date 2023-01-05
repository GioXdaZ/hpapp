export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gray-400 font-black fixed top-0">
        <div className=" navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52 text-2xl"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Books</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="text-2xl">Harry Potter App</a>
        </div>
      </div>
    </>
  );
};
