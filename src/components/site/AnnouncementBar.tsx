import { Truck, ShieldCheck, RefreshCw } from "lucide-react";

const items = [
  { icon: Truck, text: "Free next-day UK delivery over £30" },
  { icon: ShieldCheck, text: "12-month warranty on every gadget" },
  { icon: RefreshCw, text: "30-day no-quibble returns" },
];

export default function AnnouncementBar() {
  return (
    <div className="bg-ink-950 text-ink-100 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl container-px">
        <ul className="flex items-center justify-center gap-6 py-2.5 overflow-hidden">
          {items.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              className={`flex items-center gap-2 whitespace-nowrap ${
                i === 0 ? "" : "hidden sm:flex"
              } ${i === 2 ? "hidden lg:flex" : ""}`}
            >
              <Icon className="h-4 w-4 text-accent-400" strokeWidth={2} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
