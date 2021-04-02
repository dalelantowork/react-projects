import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//remove unique values + add all in array
const allCategories = ['all',... new Set(items.map((item)=>item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories,setCategories] = useState((allCategories))

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((items)=> items.category === category)
    setMenuItems(newItems)
  }
  return ( 
    <main>
      {console.log(items)}
      <section className='menu section'> 
        <div className='title'>
          <h2>
            our menu
          </h2>
          <div className='undeline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
        
      </section>
    </main>
  );
}

export default App;
