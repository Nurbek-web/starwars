import { loadCharacters } from "@/lib/load-characters";

export default async function Page() {
  const characters = await loadCharacters();
  console.log(characters);
  return <>Characters</>;
}
