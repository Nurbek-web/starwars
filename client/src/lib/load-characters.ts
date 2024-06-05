export async function loadCharacters() {
  const response = await fetch(`http://localhost:5000/record/`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    console.error(message);
    return;
  }
  const records = await response.json();
  return records;
}
