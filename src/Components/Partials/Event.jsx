import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const { id,eventName, image, about } = event;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-sm m-5">
      <figure>
        <img className="object-cover h-48 w-96" src={image} alt={eventName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{eventName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <Link to={`/events/${id}`}>
            <button className="btn btn-sm btn-outline"> Read More </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;

Event.propTypes = {
  event: PropTypes.object,
};
