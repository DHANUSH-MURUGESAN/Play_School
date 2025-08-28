import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Admissions from './Admissions'
import Blog from './Blog'
import Shop from './Shop'
import ContactForm from './Contact'
import About from './Aboutus'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/contact-form" element={<ContactForm />}/>
                <Route path="/aboutus" element={<About />}/>
                <Route path="/admissions" element={<Admissions />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/blog" element={<Blog />}/>
            </Route>
        </Routes>
    )
}

export default Routers
