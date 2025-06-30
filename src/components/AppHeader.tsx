import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function AppHeader() {
  return (
    <div className="mt-3 flex justify-center">
      <div className="p-5 border-2 border-orange-400 rounded-2xl flex items-center gap-3">
        <header className="font-mono text-5xl font-bold tracking-wider">OpenApps</header>
        <Image src="./logo.svg" alt="logo" width={60} height={60} />
      </div>
      <div className="">
        <ThemeToggle />
      </div>
    </div>
  );
}

