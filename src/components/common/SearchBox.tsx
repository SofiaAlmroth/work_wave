interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBox({ value, onChange }: Props) {
  return (
    <label className="input input-bordered input-primary h-12 flex items-center px-4 gap-2 w-full max-w-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-5 h-5 opacity-70 mr-3"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        className="grow"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default SearchBox;
