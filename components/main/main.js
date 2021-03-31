import MainHeader from "./header";
import MainContent from "./content";

export default function () {
  return (
    <div className="bg-white dark:bg-gray-900">
      <MainHeader />
      <div className="lg:pl-8 pb-8">
        <MainContent />
      </div>
    </div>
  );
}
