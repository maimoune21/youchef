import React, { useEffect, useState } from 'react';
import Categorie from '@/components/ui/Categories';
import Countries from '@/components/ui/Countries';
import { SearchIcon } from '/public/icons/Icons';
import MealCard from '@/components/ui/MealCard';

const Favorites = ({ favoriteMeals, categories, Kitchen, thisUser }) => {
  console.log(favoriteMeals)
  const [meals, setMeals] = useState([]);
  const [categorie, setCategorie] = useState("");
  const [countries, setCountries] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
      setMeals(
        favoriteMeals.filter(meal => {
          const isCategoryMatch = categorie ? meal.idCategory == categorie : true;
          const isCountryMatch = countries ? meal.idKitchen == countries : true;
          const isSearchMatch = search ? meal.title.toLowerCase().includes(search.toLowerCase()) : true;
          return isCategoryMatch && isCountryMatch && isSearchMatch;
        })
      );
    }, [categorie, countries, search, favoriteMeals]);

  return (
    <section className='w-full flex flex-col gap-2 border-b-2'>
      <div className='flexy bg-banner w-full'>
        <h1 className='text-3xl p-5 text-green font-bold'>Favorites</h1>
      </div>
      <div className='px-5'>
        <nav className='bg-10 rounded-t-3xl flex flex-col py-5 px-8 gap-3'>
          <div className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-[0.5fr_1fr_0.5fr] gap-5 sm:gap-10 md:gap-20 w-full'>
            <select
              name="category"
              id="cat"
              className='py-2 pl-2 rounded-sm border-[0.3px] text-sm font-semibold bg-white'
              onChange={e => setCategorie(e.target.value)}
            >
              <option value="">All Categories</option>
              <Categorie categories={categories} />
            </select>
            <div className='relative flexy max-sm:order-3'>
              <input
                type="text"
                className='px-8 py-2 w-[100%] rounded-sm bg-white font-semibold'
                placeholder='Search in favorite meals...'
                onChange={e => setSearch(e.target.value)}
              />
              <div className='absolute right-2 bg-10 rounded-full p-1.5'>
                <SearchIcon size='size-5 text-white' />
              </div>
            </div>
            <select
              name="country"
              id="cnt"
              className='py-2 pl-2 rounded-sm border-[0.3px] text-sm font-semibold bg-white'
              onChange={e => setCountries(e.target.value)}
            >
              <option value="">All Kitchens</option>
              <Countries countries={Kitchen} />
            </select>
          </div>
        </nav>
      </div>
      {
        meals.length == 0
          ? <h1 className='text-3xl text-center my-5'>No Favorites Found</h1>
          : <div className='w-[90%] py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9'>
            {meals.map((card, i) => (
              <MealCard key={i} meal={card} thisUser={thisUser} favoriteMeals={favoriteMeals} />
            ))}
          </div>
      }
    </section>
  );
};

export default Favorites;