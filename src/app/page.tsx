import clsx from "clsx";
import { SpinLoader } from "@/src/components/SpinLoader/index";

export default async function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses={clsx("min-h-125")} />
    </div>
  );
}
