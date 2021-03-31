import Logo from "./icons/logo";
import Home from "./icons/home";
import Flag from "./icons/flag";

export default function Left() {
  return (
    <div className="bg-white lg:bg-gray-100 dark:bg-transparent lg:dark:bg-black px-2 lg:px-0 -mx-2 lg:mx-0 w-1/4">
      <header className="h-20 flex items-center justify-between lg:justify-start border-b border-gray-200 dark:border-gray-800">
        <a href="/">
          <Logo />
        </a>
        <div className="block lg:hidden">
          <button className="Close_navTrigger__2R6Fr" type="button">
            <span></span>
          </button>
        </div>
      </header>
      <div style={{ position: "sticky", top: "20px" }}>
        <div className="pt-4 pb-4 lg:pt-6 lg:block hidden">
          <div className="mb-3">
            <a
              className="cursor-pointer font-normal text-base text-gray-900 dark:text-gray-300 flex items-center group"
              href="/docs"
            >
              <span className="w-4 mr-2">
                <Home />
              </span>
              <p className="transition-color duration-250 group-hover:opacity-80">
                Home
              </p>
            </a>
          </div>
          <div className="mb-3 last:mb-0">
            <div className="cursor-pointer text-base text-gray-900 dark:text-gray-300 flex items-center select-none group">
              <span className="w-4 mr-2">
                <Flag />
              </span>
              <p className="transition-color duration-250 group-hover:opacity-80">
                Getting Started with Scale
              </p>
            </div>
            <div
              className="h-auto overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              <ul className="pt-2 pl-6 pb-3">
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/key-concepts"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Scale 101: Key Concepts
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/workflow"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Scale 101: Workflow
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/instructions"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Scale 101: Writing Instructions
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/task-types"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Scale 101: Task Types
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/intro-to-apis"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Scale 101: First time using an API?
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-3 last:mb-0">
            <div className="cursor-pointer text-base text-gray-900 dark:text-gray-300 flex items-center select-none group">
              <span className="w-4 mr-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33333 28C4.6 28 4 27.4 4 26.6667V24C4 23.2667 4.6 22.6667 5.33333 22.6667C6.06667 22.6667 6.66667 23.2667 6.66667 24V26.6667C6.66667 27.4 6.06667 28 5.33333 28Z"
                    fill="#DD45D3"
                  ></path>
                  <path
                    d="M26.6666 28C25.9333 28 25.3333 27.4 25.3333 26.6667V5.33333C25.3333 4.6 25.9333 4 26.6666 4C27.3999 4 27.9999 4.6 27.9999 5.33333V26.6667C27.9999 27.4 27.3999 28 26.6666 28Z"
                    fill="#DD45D3"
                  ></path>
                  <path
                    d="M21.3333 28C20.6 28 20 27.4 20 26.6667V12C20 11.2667 20.6 10.6667 21.3333 10.6667C22.0667 10.6667 22.6667 11.2667 22.6667 12V26.6667C22.6667 27.4 22.0667 28 21.3333 28Z"
                    fill="#DD45D3"
                  ></path>
                  <path
                    d="M10.6666 28C9.93325 28 9.33325 27.4 9.33325 26.6667V21.3333C9.33325 20.6 9.93325 20 10.6666 20C11.3999 20 11.9999 20.6 11.9999 21.3333V26.6667C11.9999 27.4 11.3999 28 10.6666 28Z"
                    fill="#DD45D3"
                  ></path>
                  <path
                    d="M16.0001 28C15.2667 28 14.6667 27.4 14.6667 26.6667V17.3333C14.6667 16.6 15.2667 16 16.0001 16C16.7334 16 17.3334 16.6 17.3334 17.3333V26.6667C17.3334 27.4 16.7334 28 16.0001 28Z"
                    fill="#DD45D3"
                  ></path>
                </svg>
              </span>
              <p className="transition-color duration-250 group-hover:opacity-80">
                Customer Dashboard
              </p>
            </div>
            <div
              className="h-auto overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: "500px" }}
            >
              <ul className="pt-2 pl-6 pb-3">
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/account"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Manage your Account
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/manage-projects"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 text-gray-900 dark:text-gray-300 group-hover:opacity-100">
                      Manage your Projects
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/overview-tab"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Overview Tab
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/tasks-overview"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Tasks Tab
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/quality-overview"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Quality Tab
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/batch-tab"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Batch Tab
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-3 last:mb-0">
            <div className="cursor-pointer text-base text-gray-900 dark:text-gray-300 flex items-center select-none group">
              <span className="w-4 mr-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6933 15.6267C22.3067 14.28 23.3333 12.2533 23.3333 10C23.3333 5.96 20.04 2.66666 16 2.66666C11.96 2.66666 8.66667 5.96 8.66667 10C8.66667 12.2533 9.69333 14.28 11.3067 15.6267C7.01333 17.4533 4 21.72 4 26.6667C4 27.4 4.6 28 5.33333 28C6.06667 28 6.66667 27.4 6.66667 26.6667C6.66667 21.52 10.8533 17.3333 16 17.3333C21.1467 17.3333 25.3333 21.52 25.3333 26.6667C25.3333 27.4 25.9333 28 26.6667 28C27.4 28 28 27.4 28 26.6667C28 21.72 24.9867 17.4533 20.6933 15.6267ZM11.3333 10C11.3333 7.42666 13.4267 5.33333 16 5.33333C18.5733 5.33333 20.6667 7.42666 20.6667 10C20.6667 12.5733 18.5733 14.6667 16 14.6667C13.4267 14.6667 11.3333 12.5733 11.3333 10Z"
                    fill="#B941E9"
                  ></path>
                </svg>
              </span>
              <p className="transition-color duration-250 group-hover:opacity-80">
                Get Support
              </p>
            </div>
            <div
              className="h-auto overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              <ul className="pt-2 pl-6 pb-3">
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/customer-support"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Reaching a Human
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/api-compatibility-policy"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      API Compatibility Policy
                    </span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/platform-status"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Platform Status
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-3 last:mb-0">
            <div className="cursor-pointer text-base text-gray-900 dark:text-gray-300 flex items-center select-none group">
              <span className="w-4 mr-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0001 29.3333C15.7734 29.3333 15.5334 29.28 15.3334 29.16C7.52008 24.6267 2.66675 16.2267 2.66675 7.24001C2.66675 6.64001 3.06675 6.10668 3.65341 5.94668L15.6534 2.70668C15.8801 2.64001 16.1201 2.64001 16.3467 2.70668L28.3467 5.94668C28.9334 6.10668 29.3334 6.64001 29.3334 7.24001C29.3334 16.24 24.4801 24.6267 16.6667 29.16C16.4667 29.28 16.2267 29.3333 16.0001 29.3333ZM5.36008 8.25334C5.69341 15.6533 9.69341 22.4933 16.0001 26.44C22.3067 22.4933 26.3067 15.6533 26.6401 8.25334L16.0001 5.38668L5.36008 8.25334Z"
                    fill="#943CFF"
                  ></path>
                  <path
                    d="M14.6667 20C14.32 20 13.9867 19.8667 13.72 19.6133L11.0533 16.9467C10.5333 16.4267 10.5333 15.5867 11.0533 15.0667C11.5733 14.5467 12.4133 14.5467 12.9333 15.0667L14.6667 16.7867L20.3867 11.0667C20.9067 10.5467 21.7467 10.5467 22.2667 11.0667C22.7867 11.5867 22.7867 12.4267 22.2667 12.9467L15.6 19.6133C15.3467 19.8667 15.0133 20 14.6667 20Z"
                    fill="#943CFF"
                  ></path>
                </svg>
              </span>
              <p className="transition-color duration-250 group-hover:opacity-80">
                Data Hosting
              </p>
            </div>
            <div
              className="h-auto overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              <ul className="pt-2 pl-6 pb-3">
                <li className="mb-1 last:mb-0">
                  <a
                    className="group relative text-sm font-normal text-gray-800 dark:text-gray-400"
                    href="/docs/uploading-data-to-scale"
                  >
                    <span
                      className="w-2 absolute group-hover:opacity-100 transition-opacity duration-250 opacity-0"
                      style={{
                        left: "-32px",
                        top: "calc(50% - 16px / 2)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-900 dark:text-gray-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="transition-color duration-250 group-hover:opacity-80">
                      Secure Attachment Access
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <a
              className="cursor-pointer font-normal text-base text-gray-900 dark:text-gray-300 flex items-center group"
              href="https://docs.scale.com/reference"
            >
              <span className="w-4 mr-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78592 29.32C6.95926 29.32 5.42592 28.76 4.33259 27.6534C0.799256 24.12 3.14592 16.2134 9.69259 9.6667C16.2393 3.12003 24.1326 0.773364 27.6793 4.32003C31.2126 7.85336 28.8659 15.76 22.3193 22.3067C19.3059 25.32 15.8659 27.5734 12.6393 28.64C11.2393 29.0934 9.95926 29.32 8.78592 29.32ZM23.1993 5.32003C22.3193 5.32003 21.3193 5.5067 20.2126 5.8667C17.3593 6.81336 14.2926 8.84003 11.5726 11.56C5.81259 17.3334 4.11926 23.68 6.21259 25.7734C7.25259 26.8134 9.29259 26.9334 11.7859 26.1067C14.6393 25.16 17.7059 23.1334 20.4259 20.4134C23.1459 17.6934 25.1726 14.6267 26.1193 11.7734C26.9459 9.28003 26.8259 7.24003 25.7859 6.20003C25.1993 5.61336 24.3059 5.32003 23.1993 5.32003Z"
                    fill="#943CFF"
                  ></path>
                  <path
                    d="M23.2133 29.3195C22.0399 29.3195 20.7466 29.0928 19.3733 28.6261C16.1466 27.5461 12.7066 25.2928 9.69328 22.2928C3.14661 15.7461 0.786611 7.85281 4.31994 4.31948C7.85328 0.786145 15.7599 3.13281 22.3066 9.67948C28.8533 16.2261 31.2133 24.1195 27.6666 27.6661C26.5733 28.7595 25.0399 29.3195 23.2133 29.3195ZM8.79994 5.31948C7.69328 5.31948 6.79994 5.61281 6.21328 6.19948C5.17328 7.23948 5.05328 9.26615 5.87994 11.7728C6.82661 14.6261 8.85328 17.6928 11.5733 20.4128C14.2933 23.1328 17.3599 25.1595 20.2133 26.1061C22.7066 26.9328 24.7466 26.8261 25.7866 25.7728C27.8799 23.6795 26.1866 17.3328 20.4266 11.5595C17.7066 8.83948 14.6399 6.81281 11.7866 5.86615C10.6799 5.50615 9.67994 5.31948 8.79994 5.31948Z"
                    fill="#943CFF"
                  ></path>
                </svg>
              </span>
              <p className="transition-color duration-250 group-hover:opacity-80">
                API Reference
              </p>
              <svg
                className="ml-1 fill-current text-gray-900 dark:text-gray-300"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "1px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 10.25C11.2239 10.25 11 10.0261 11 9.75V5.71122L4.85002 11.8612C4.65618 12.0559 4.34126 12.0565 4.14663 11.8626C3.952 11.6688 3.95137 11.3539 4.14522 11.1592C4.14666 11.1578 4.14811 11.1564 4.14957 11.1549L10.3045 5H6.25002H6.25002C5.97388 5 5.75002 4.77614 5.75002 4.5C5.75002 4.22386 5.97388 4 6.25002 4H11.5C11.7762 4 12 4.22386 12 4.5V9.75C12 10.0261 11.7762 10.25 11.5 10.25L11.5 10.25Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
