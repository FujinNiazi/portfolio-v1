import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CV from './components/CV';
import ProjectDisplay from "./components/ProjectDisplay";
import Experience from "./components/Experience";
import {Helmet} from "react-helmet";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/cv" element={<CV />} />
      </Route>
    </Routes>
    <div>
    <Helmet className= 'application'>
          <meta charSet="utf-8" />
          <title>Portfolio / Frontend</title>
          <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    </div>
   </>
  )
}

export default App;
