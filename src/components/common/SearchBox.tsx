import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBox({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-2 ">
      <button
        onClick={() => setOpen(true)}
        className="text-primary text-2xl hover:scale-110 transition-all"
      >
        {!open && <i className="fa-solid fa-magnifying-glass text-2xl" />}
      </button>

      {open && (
        <div className=" w-[50vw] h-10 bg-base-100 rounded-full py-2 px-6 shadow-md flex">
          <label className="flex items-center gap-2">
            <i className="fa-solid fa-magnifying-glass opacity-70" />
            <input
              type="text"
              className="text-sm bg-transparent outline-none focus:ring-0 focus:outline-none"
              placeholder="Search..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
              autoFocus
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
