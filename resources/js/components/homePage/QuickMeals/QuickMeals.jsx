import React from 'react';
import QuickMeal from './QuickMeal';
import Tajine from "/public/images/Tajine.jpg";


const QuickMeals = () => {
  const categories = [
          { label: "All",  data:[{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 }]},
          { label: "Salad", data:[{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 }]},
          { label: "Soup", data:[{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },{ user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 }]},
      ];

  return (
    <div className='w-full flex flex-col max-tn:p-0 max-sm:p-0 pb-5 max-md:p-3 bg-soft gap-12'>
      {categories.map(categorie=><QuickMeal categorie={categorie}/>)}
    </div>
  );
}

export default QuickMeals;
