import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Pagination from './components/Pagination/Pagination'
import Cards from './components/SpaceCard/Cards'
import APOD from './components/APOD/APOD'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'

function App() {
  const [searchDate, setSearchDate] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  
  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      const res = await axios
      .get(searchDate ? `${BASE_URL}?earth_date=${searchDate}&page=1&api_key=${API_KEY}`
      : `${BASE_URL}?sol=1001&page=1&api_key=${API_KEY}`)
      setPhotos(res.data.photos)
      // Calculate total number of photos from NASA rover API to calculate page count
      const totalRes = await axios
      .get(searchDate ? `${BASE_URL}?earth_date=${searchDate}&api_key=${API_KEY}`
      : `${BASE_URL}?sol=1001&api_key=${API_KEY}`)
      const total = totalRes.data.photos.length
      setPageCount(Math.ceil(total/25))
      setLoading(false)
    }

    getPhotos()
  }, [searchDate])

  const getNextPage = async (currentPage) => {
    const res = await axios
    .get(searchDate ? `${BASE_URL}?earth_date=${searchDate}&page=${currentPage}&api_key=${API_KEY}`
    : `${BASE_URL}?sol=1001&page=${currentPage}&api_key=${API_KEY}`)
    const data = await res.data.photos;
    return data;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1
    const photosFromAPI = await getNextPage(currentPage);
    setPhotos(photosFromAPI)
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [handlePageClick])
  
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/">
        <Header setSearchDate={setSearchDate}/>
        <Cards photos={photos} loading={loading}/>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount}/>
      </Route>
      <Route exact path="/apod" component={APOD}/>
    </div>
  );
}

export default App;
