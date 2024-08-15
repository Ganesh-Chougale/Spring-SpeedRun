import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import AllCourse from './Components/AllCourse/AllCourse';
import AddCourse from './Components/AddCourse/AddCourse';
import Header from './Components/Header/Header';
import Menus from './Components/Menus/Menus';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>

    <Container>
    <Header></Header>
      <Row>
        <Col md={4} name="Sidebar">
          <h5><Menus></Menus></h5>
        </Col>
        <Col md={8} name="main_Container">
    <Routes>
          <Route path='/' element=<Home/> exact />
          <Route path='/addCourse' element=<AddCourse /> exact />
          <Route path='/viewCourse' element=<AllCourse /> exact />
</Routes>
        </Col>
      </Row>
    </Container>
    </Router>
    </div>
  );
}

export default App;


    {/* <AllCourse></AllCourse>
    <AddCourse></AddCourse> */}