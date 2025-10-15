export default function Nav() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-8 w-8"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
            />
            <span className="text-white font-semibold text-lg ml-2">
              MyApp
            </span>
          </div>

          {/* Menu Links */}
          <div className="hidden sm:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              Team
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Calendar
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-400 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}