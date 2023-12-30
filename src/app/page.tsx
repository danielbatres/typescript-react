import { RandomFox } from "@/components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />
    </>
  );
}
