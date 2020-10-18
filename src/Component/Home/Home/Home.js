import React from 'react';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import Company from '../Company/Company';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import WorkStation from '../WorkStation/WorkStation';
const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Company></Company>
           <Courses></Courses>
           <WorkStation></WorkStation>
           <ClientFeedBack></ClientFeedBack>
           <Footer></Footer>
        </div>
    );
};

export default Home;