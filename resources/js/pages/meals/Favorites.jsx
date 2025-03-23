import Categorie from '@/components/ui/Categories';
import Countries from '@/components/ui/Countries';
import { SearchIcon } from '/public/icons/Icons';
import MealCard from '@/components/ui/MealCard';
import Tajine from "@/../../public/images/Tajine.jpg";

const Favorites = () => {
  const data = [
    { user: 'obama aziz',   date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6 ,views : 200 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4 ,views : 450 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2 ,views : 450 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2 ,views : 450 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4 ,views : 450 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 7 ,views : 450 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 3 ,views : 450 },
    { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2 ,views : 450 },
  ];

  return (
    <section className='w-full flex flex-col gap-2'>
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
            >
              <option value="" disabled>select a category</option>
              <Categorie />
            </select>
            <div className='relative flexy max-sm:order-3'>
              <input
                type="search"
                className='px-8 py-2 w-[100%] rounded-sm bg-white font-semibold'
                placeholder='Search in favorite meals...'
              />
              <div className='absolute right-2 bg-10 rounded-full p-1.5'>
                <SearchIcon size='size-5 text-white' />
              </div>
            </div>
            <select
              name="country"
              id="cnt"
              className='py-2 pl-2 rounded-sm border-[0.3px] text-sm font-semibold bg-white'
            >
              <option value="" disabled>select a country</option>
              <Countries />
            </select>
          </div>
        </nav>
      </div>
      <div className='w-[90%] py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9'>
        {data.map((card, i) => (
          <MealCard key={i} meal={card} />
        ))}
      </div>
    </section>
  );
};

export default Favorites;