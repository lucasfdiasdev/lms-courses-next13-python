import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CategoryItem from './category-item';
import { routeCategory } from '@/data/data';

interface CategoryRouteProps {
}

const CategoryRoute: React.FC<CategoryRouteProps> = ({
}) => {
  

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      className='space-y-4 flex flex-col w-full'
    >
      {
        routeCategory.popular.map((item) => (
          <div
            key={item.title}
            className='my-10'
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {item.title}
            </h2>

            <Slider
              {...settings}
            >
              {
                item.categories.map((category: any) => (
                  <CategoryItem
                    key={category.href}
                    price={category.price}
                    label={category.label}
                    href={category.href}
                    imageSrc={category.imageSrc}
                    imageAlt={category.imageAlt}
                    color={category.color}
                  />
                ))
              }
            </Slider>


          </div>
        ))
      }

{
        routeCategory.popular.map((item) => (
          <div
            key={item.title}
            className='my-10'
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {item.title}
            </h2>

            <Slider
              {...settings}
            >
              {
                item.categories.map((category: any) => (
                  <CategoryItem
                    key={category.href}
                    price={category.price}
                    label={category.label}
                    href={category.href}
                    imageSrc={category.imageSrc}
                    imageAlt={category.imageAlt}
                    color={category.color}
                  />
                ))
              }
            </Slider>


          </div>
        ))
      }
      {
        routeCategory.popular.map((item) => (
          <div
            key={item.title}
            className='my-10'
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {item.title}
            </h2>

            <Slider
              {...settings}
            >
              {
                item.categories.map((category: any) => (
                  <CategoryItem
                    key={category.href}
                    price={category.price}
                    label={category.label}
                    href={category.href}
                    imageSrc={category.imageSrc}
                    imageAlt={category.imageAlt}
                    color={category.color}
                  />
                ))
              }
            </Slider>


          </div>
        ))
      }
    </div>
  )
}

export default CategoryRoute;