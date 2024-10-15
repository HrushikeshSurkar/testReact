import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HelloWorld from '../pages/project1/HelloWorld'
import VerticalScrollable from '../pages/project2/VerticalScrollable'
import CarouselScroll from '../pages/project3/CarouselScroll'
import HorizontalCard from '../pages/project4/HorizontalCard'

const ProjectsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/vertical-scroll" element={<VerticalScrollable />} />
        <Route path="/carousel-scroll" element={<CarouselScroll />} />
        <Route path="/horizontal-scroll" element={<HorizontalCard />} />
      </Routes>
    </div>
  )
}

export default ProjectsRoutes
