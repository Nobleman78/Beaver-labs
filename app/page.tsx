import { gerbilFont } from "@/components/utils/font";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className={`text-2xl ${gerbilFont.className}`}>Welcome to Breaverlabs </h2>
    </div>
  );
}
