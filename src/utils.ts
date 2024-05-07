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
