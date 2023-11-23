'use client';

import Image from "next/image";

interface CategoryItemProps {
  label: string;
  href: string;
  price: number;
  imageSrc:  string;
  imageAlt: string;
  color: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  label,
  price,
  imageAlt,
  imageSrc,
  color,
  href
}) => {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div  className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 sm:h-52 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-52 ">
                <Image
                  width={200}
                  height={200}
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {label}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default CategoryItem;