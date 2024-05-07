export default function range(startNbr: number, endNbr: number) {
  let newArray: number[] = [];
  for (let count = startNbr; count <= endNbr; count++) {
    newArray.push(count);
  }
  return newArray;
}

export function paginate<T>(
  items: T[],
  pageSize: number,
  selectedPage: number
) {
  const startIndex = pageSize * (selectedPage - 1);
  const endIndex = pageSize * selectedPage;

  return items.slice(startIndex, endIndex);
}

export function normalizeString(input: string) {
  return input
    .normalize("NFD") // Decompose into base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/đ/g, "d")
    .replace(/ø/g, "o")
    .replace(/Đ/g, "D") // Specific replacements if needed
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace
    .replace(/\s+/g, " "); // Replace multiple spaces with a single space
}
