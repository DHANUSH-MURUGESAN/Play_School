import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Blog from './Blog'
import Shop from './Shop'
import ContactForm from './Contact'
import About from './Aboutus'
import AdmissionHeader from './Admissionback'
import AdmissionForm from './Admissions'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/contact-form" element={<ContactForm />}/>
                <Route path="/aboutus" element={<About />}/>
                <Route path="/admission" element={<AdmissionHeader />}/>
                <Route path="/admission-form" element={<AdmissionForm/>}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/blog/:id" element={<Blog />}/>
            </Route>
        </Routes>
    )
}

export default Routers
