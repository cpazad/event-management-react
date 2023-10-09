import { Link } from "react-router-dom";


const EventDetails = () => {


  return (
    <div>
      <div>
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src="/Education_3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Title of the Post </h2>
            <p className="text-left"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque est, deserunt, nemo at soluta corrupti debitis sapiente minima vitae pariatur corporis impedit voluptas magnam maiores, tempora atque nobis fuga omnis modi accusamus? Laudantium veritatis labore ut in excepturi nesciunt ab officia, sed eveniet ipsam obcaecati, reiciendis maiores doloremque? Minima esse numquam officia sapiente in neque, voluptas asperiores inventore illo soluta blanditiis vero necessitatibus perspiciatis consectetur odit et quod corrupti est nihil assumenda maiores nam hic. Repellendus rem optio quidem ullam velit necessitatibus aliquid distinctio magni, veritatis commodi ad quisquam, dignissimos quibusdam architecto adipisci incidunt, ut molestiae! Cupiditate, laborum vero molestiae illo dignissimos doloribus sapiente minima sint nemo, laudantium alias iste beatae! Recusandae velit placeat voluptas architecto tenetur qui. Earum perferendis debitis esse, quas quam dicta modi amet quia impedit maxime voluptates repudiandae quisquam corrupti, eos laudantium delectus voluptate deserunt maiores! Provident natus, molestias impedit culpa distinctio repudiandae vel aut aliquid nobis nulla nisi, perferendis tempore, excepturi minima modi repellendus explicabo libero sed quis alias? Cum fugit, architecto ducimus nisi blanditiis dolor ea dicta. Iusto rem praesentium magnam, dolores, facilis voluptatibus non, similique voluptatum ratione voluptatem deserunt delectus doloribus aliquam facere vitae quos id ducimus repellat excepturi aspernatur magni? Atque, suscipit?</p>
            <div className="card-actions justify-end">
                <Link to="/">

              <button className="btn btn-primary">Back to Home </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EventDetails;
