import Left from "../components/left/left";
import Main from "../components/main/main";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="min-h-screen">
        <Left />
        <Main />
      </div>
    </div>
  );
}
