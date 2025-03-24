import React from 'react';
import QuickMeal from './QuickMeal';


const QuickMeals = ({ meals, categories }) => {

  return (
    <div className='w-full flex flex-col max-tn:p-0 max-sm:p-0 pb-5 max-md:p-3 bg-soft gap-12'>
      <QuickMeal meals={meals} />
      {categories.slice(0,2).map((categorie, i)=><QuickMeal key={i} categorie={categorie} meals={meals}/>)}
    </div>
  );
}

export default QuickMeals;