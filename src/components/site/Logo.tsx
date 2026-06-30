import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** "lockup" shows the full GM monogram + wordmark; "mark" shows just the monogram. */
  variant?: "lockup" | "mark";
  className?: string;
  priority?: boolean;
};

export default function Logo({
  variant = "lockup",
  className,
  priority = false,
}: LogoProps) {
  const isMark = variant === "mark";

  return (
    <Link
      href="/"
      aria-label="Gadget Marketz — home"
      className="inline-flex items-center transition-opacity hover:opacity-80"
    >
      <Image
        src={isMark ? "/logo-mark.png" : "/logo-lockup.png"}
        alt="Gadget Marketz"
        width={isMark ? 140 : 738}
        height={isMark ? 161 : 258}
        priority={priority}
        className={className ?? (isMark ? "h-8 w-auto" : "h-9 w-auto")}
      />
    </Link>
  );
}
