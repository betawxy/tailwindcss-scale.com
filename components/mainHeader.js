export default function () {
  return (
    <header className="lg:flex h-10 pl-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 relative">
      <div className="BodyContent_inputWrapper__WPJDv mr-2">
        <div
          className="bg-white dark:bg-gray-900 flex items-center py-1 px-2 text-gray-700 dark:text-gray-300 border border-gray-300 rounded-1 dark:border-gray-600"
          style={{ width: "100%" }}
        >
          <span className="mr-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              style={{ color: "inherit" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8787 3.75785C14.8084 3.75243 17.9984 6.93365 18.0039 10.8633C18.006 12.3971 17.5124 13.8905 16.5968 15.1209L20.4432 18.3743C21.0608 18.9014 21.1342 19.8294 20.6071 20.4471C20.08 21.0647 19.152 21.1381 18.5344 20.611C18.4755 20.5608 18.4207 20.506 18.3704 20.4471L15.1163 16.6013C11.9563 18.9433 7.49604 18.2802 5.15405 15.1202C2.81204 11.9602 3.47514 7.49998 6.63511 5.158C7.86281 4.24808 9.35064 3.7572 10.8788 3.75786L10.8787 3.75785ZM10.8787 16.5079C13.9854 16.5079 16.5037 13.9895 16.5037 10.8829C16.5037 7.77625 13.9854 5.25785 10.8787 5.25785C7.77215 5.25785 5.25375 7.77625 5.25375 10.8829V10.8828C5.25375 13.9894 7.77213 16.5078 10.8787 16.5078L10.8787 16.5079Z"
              ></path>
            </svg>
          </span>
          <input
            type="search"
            tabIndex="-1"
            className="bg-transparent w-full text-sm text-gray-700 dark:text-gray-300 placeholder-current p-0 m-0"
            placeholder="Start typing to search..."
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
      <div className="flex">
        <a
          href="https://dashboard.scale.com/signup"
          className="bg-black dark:bg-pink font-medium tracking-03 text-white px-2 leading-4 inline-block rounded-3 whitespace-nowrap uppercase mr-3 last:mr-0"
          style={{ fontSize: "13px" }}
        >
          Create an Account
        </a>
        <a
          className="bg-gray-300 dark:bg-white font-medium tracking-03 text-black px-2 leading-4 inline-block rounded-3 whitespace-nowrap uppercase mr-3 last:mr-0"
          style={{ fontSize: "13px" }}
          href="/sales"
        >
          Talk to Us
        </a>
      </div>
    </header>
  );
}
