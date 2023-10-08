import PropTypes from 'prop-types'

const Event = ({event}) => {
    const {eventName, image, about} = event
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-sm m-5">
      <figure>
        <img
          src= {image}
          alt={eventName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{eventName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-outline"> Read More </button>
        </div>
      </div>
    </div>
  );
};

export default Event;

Event.propTypes = {
    event:PropTypes.object
}

