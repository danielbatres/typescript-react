"use client";
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9);

type ImageItem = { 
  id: string, 
  url: string 
};

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <>
      <h1>Hello</h1>
      {images.map((imageItem) => (
        <div key={imageItem.id} className="p-4">
          <RandomFox image={imageItem.url} />
        </div>
      ))}
    </>
  );
}
