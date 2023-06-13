'use client';

import { spotifyClient } from '@/spotify/client';
import { Categories } from '@spotify/web-api-ts-sdk/dist/mjs/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [response, setCategories] = useState<Categories>();

  useEffect(() => {
    const fetchCategories = async () => {
      const cat = await spotifyClient.browse.getCategories();
      setCategories(cat);
    };
    fetchCategories();
  }, []);
  console.log(response?.categories);

  return (
    <main className="">
      <div className="flex flex-col justify-center items-center">
        {response &&
          response.categories.items.map((category) => (
            <Link
              key={category.id}
              href={`categories/${category.id}`}
              className="flex"
            >
              <div className="relative h-72 w-72">
                <Image
                  src={category.icons[0].url}
                  alt={`${category.name} category image`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div>{category.name}</div>
            </Link>
          ))}
      </div>

      <pre>{JSON.stringify(response, null, 4)}</pre>
    </main>
  );
}
