import { useEffect, useState } from "react";
import Banner from "../../Components/Header/Banner";
import Event from "../../Components/Partials/Event";
import Blog from "../Blogs/Blog";
import Carousel from "../../Components/Partials/Carousel";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const [events, setEvents] = useState([])
  useEffect(()=>{
    fetch('events.json')
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])
    return (
    <div>
      <Helmet>
        <title> The Professor | Home </title>
      </Helmet>
      <Banner></Banner>
        <h3 className="text-4xl font-bold mt-10 uppercase"> Events List </h3>
   
      <div className="grid sm:grid-cols-3 p-10"> 
        {
            events.map((event,index) =><Event key={index} event={event}></Event>)
        }
      </div>
      <div className="bg-slate-200 py-10">
        <h3 className="text-4xl font-extrabold mb-3">Latest Blogs </h3>
        <Blog></Blog>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Home;
