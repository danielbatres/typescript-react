"use client";
import { MouseEventHandler, useState } from "react";
import { LazyImage } from "@/components/RandomFox";
import { random } from "lodash";

const myRandom = (): number => random(1, 123);
const generateId = (): string => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    };

    setImages([...images, newItem]);
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map((imageItem) => (
        <div key={imageItem.id} className="p-4">
          <LazyImage
            className="rounded bg-gray-300"
            width={320}
            height="auto"
            src={imageItem.url}
            title="Random Fox"
            onClick={() => console.log("Hey you!")}
          />
        </div>
      ))}
    </>
  );
}
