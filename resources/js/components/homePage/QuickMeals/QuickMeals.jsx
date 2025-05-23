import React from 'react';
import QuickMeal from './QuickMeal';
import { usePage } from '@inertiajs/react';


const QuickMeals = ({ meals }) => {
  const { categories } = usePage().props

  return (
    <div className='w-full flex flex-col max-tn:p-0 max-sm:p-0 pb-5 max-md:p-3 bg-soft gap-12'>
      <QuickMeal meals={meals} />
      {categories.slice(0,3).map((categorie, i)=><QuickMeal key={i} categorie={categorie} meals={meals} />)}
    </div>
  );
}

export default QuickMeals;