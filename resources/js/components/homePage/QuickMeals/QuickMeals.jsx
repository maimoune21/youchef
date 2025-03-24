import React from 'react';
import QuickMeal from './QuickMeal';


const QuickMeals = ({ meals, categories, thisUser, favoriteMeals }) => {

  return (
    <div className='w-full flex flex-col max-tn:p-0 max-sm:p-0 pb-5 max-md:p-3 bg-soft gap-12'>
      <QuickMeal meals={meals} thisUser={thisUser} favoriteMeals={favoriteMeals} />
      {categories.slice(0,3).map((categorie, i)=><QuickMeal key={i} categorie={categorie} meals={meals} thisUser={thisUser} favoriteMeals={favoriteMeals} />)}
    </div>
  );
}

export default QuickMeals;