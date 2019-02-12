export default function normalizeByKey(arr = [], by = 'id') {
  const obj = arr.reduce((sum, item) => {
    // eslint-disable-next-line
    sum[item[by]] = item
    return sum;
  }, {});
  return { ids: Object.keys(obj), byIds: obj };
}
