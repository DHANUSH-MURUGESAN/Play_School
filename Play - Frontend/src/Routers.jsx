import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Timetable from './Timetable'
import Admissions from './Admissions'
import Features from './Features'
import Blog from './Blog'
import Shop from './Shop'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/time-table" element={<Timetable />}/>
                <Route path="/features" element={<Features />}/>
                <Route path="/admissions" element={<Admissions />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/blog" element={<Blog />}/>
            </Route>
        </Routes>
    )
}

export default Routers
