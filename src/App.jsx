
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import MyProjects from './components/MyProjects'
import NavBar from './components/NavBar'
import Skills from './components/Skills'

function App() {

  return (
    <div >
    {/* <div style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }} className='overflow-x-hidden overflow-y-hidden '> */}

      <div className='relative'>
        <NavBar></NavBar>


        <div className='space-y-40 '>

          <div id='welcome' className='' >

            <Banner ></Banner>
          </div>
          <div id='about'>

          <About></About>

          </div>
          <div id='skills'>
            <Skills></Skills>

          </div>
          <div id='projects'>
            <MyProjects></MyProjects>

          </div>
          <div id='contact'>
            <ContactMe></ContactMe>

          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
