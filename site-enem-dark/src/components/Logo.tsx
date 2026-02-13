export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 70C30 70 35 55 50 55C65 55 70 70 70 70"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 50C30 50 35 35 50 35C65 35 70 50 70 50"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 30C30 30 35 15 50 15C65 15 70 30 70 30"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
