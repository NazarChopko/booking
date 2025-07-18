const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center gap-1">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">BooKing</span>
              <img src="/sea.png" className="w-6 h-6" />
            </a>
            <div className="flex items-center lg:order-2 ">
              <a
                href="#"
                className="text-gray-800 hover:opacity-70 hidden lg:block  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-primary  bg-white border-2 hidden lg:block border-primary hover:opacity-80 hover:scale-110 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block hover:opacity-70 py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-primary lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Hotels
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block  hover:opacity-70 py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-primary lg:p-0 dark:text-white"
                  >
                    Price
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:opacity-70 py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-primary lg:p-0 dark:text-white"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
};

export default Header;
