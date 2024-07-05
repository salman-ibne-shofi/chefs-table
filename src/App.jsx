import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Items from './Components/Items/Items'
import Recipes from './Components/Recipes/Recipes'
import Wanttocook from './Components/Wanttocook/Wanttocook'

function App() {
    const [wanttocook, setWanttocook] = useState([]);

    const handleAddToWanttocook = item =>{
        console.log('Want to cook');
    }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className='flex container mx-auto'>
      <Items handleAddToWanttocook={handleAddToWanttocook}></Items>
      <Wanttocook></Wanttocook>
      </div>
    </>
  )
}

export default App
