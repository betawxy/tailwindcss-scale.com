import Search from "../icons/search";

export default function () {
  return (
    <header className="lg:flex h-10 pl-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 relative">
      <div className="mr-2">
        <div className="bg-white dark:bg-gray-900 flex items-center py-1 px-2 text-gray-700 dark:text-gray-300 border border-gray-300 rounded-1 dark:border-gray-600">
          <span className="mr-1">
            <Search />
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
