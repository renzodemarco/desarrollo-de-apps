export default function truncate(arrayOfObjects, maxLength) {
  let truncatedTitles = arrayOfObjects.map(obj => obj.title.substring(0, maxLength));
  let result = truncatedTitles.join(', ');
  if (result.length > maxLength) {
      result = result.substring(0, maxLength) + "...";
  }
  return result;
}