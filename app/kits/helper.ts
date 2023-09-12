export const formatDate = (d: string) => {
  var date = new Date(d);
  var month = date.toLocaleString("default", { month: "short" });
  return `${date.getDay() + 1} ${month}`;
};
