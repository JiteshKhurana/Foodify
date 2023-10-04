export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toUpperCase()?.includes(searchText.toUpperCase())
  );
  return filteredData;
}
