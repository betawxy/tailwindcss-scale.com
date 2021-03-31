import Left from "../components/left";
import Main from "../components/main";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container min-h-screen mx-auto flex">
        <Left />
        <Main />
      </div>
    </div>
  );
}
