import { useEffect, useState } from "react";
import Banner from "../../Components/Header/Banner";
import Event from "../../Components/Partials/Event";


const Home = () => {
  const [events, setEvents] = useState([])
  useEffect(()=>{
    fetch('events.json')
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])
    return (
    <div>
      <Banner></Banner>
      <div>
        <h3 className="text-4xl font-bold mt-5"> Events List </h3>
      </div>
      <div className="grid sm:grid-cols-3 py-5"> 
        {
            events.map((event,index) =><Event key={index} event={event}></Event>)
        }
      </div>
    </div>
  );
};

export default Home;
