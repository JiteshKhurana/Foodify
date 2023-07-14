export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toUpperCase()?.includes(searchText.toUpperCase())
  );
  return filteredData;
}
