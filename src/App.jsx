import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log('Bookmark adding soon')
  }


  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </main>
          
    </>
  )
}

export default App
