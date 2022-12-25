import React from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const IndividualPostDetails = ({ postItem }) => {
  const { image, id, likes, owner, publishDate, tags, text } = postItem;
  const { title, firstName, lastName, picture } = owner;
  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "235px", width: "365px" }}
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {text.length > 40 ? text.slice(0, 40) : text}
            <div className="flex items-center">
              {<FcLike />} <span>{likes}</span>
            </div>
          </h2>
          <div className="card-actions justify-start my-2">
            <div className="badge badge-outline">{tags[0]}</div>
            <div className="badge badge-outline">{tags[1]}</div>
            <div className="badge badge-outline">{tags[2]}</div>
          </div>
          <div className="flex items-center ">
            <div>
              <img
                style={{ height: "40px" }}
                className="mask mask-circle"
                src={picture}
                alt=""
              />
            </div>
            <div className="flex ml-3">
              <div>
                {" "}
                <span>By</span> {firstName} {lastName}
              </div>
              <div style={{ marginLeft: "inherit" }}>
                {publishDate.length > 10
                  ? publishDate.slice(0, 10)
                  : publishDate}
              </div>
            </div>
          </div>
          <div>
            <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cum eius quo temporibus ex doloribus, voluptatum animi ducimus inventore ratione eum, voluptates optio vero accusantium cumque a, maxime culpa quisquam deserunt minus impedit rerum aliquam! Dolore sequi hic non id, consequuntur voluptates minus. Ex, tempora nam dicta mollitia molestias pariatur accusamus ad eos sunt! Vel ipsam debitis fugiat ipsa praesentium nemo eum iure ipsum voluptates consequatur possimus impedit, nulla tenetur ad iusto sunt veniam delectus saepe? Similique officia corporis voluptatibus natus voluptate perferendis. Modi minus, voluptatibus, eius dolore eveniet reprehenderit sapiente beatae reiciendis, laboriosam sint similique. Ipsum asperiores minima quae ratione dolor. Tempore, reiciendis autem, officia nihil, delectus sint facere incidunt ea molestiae vel laboriosam dolore saepe quas quasi eum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPostDetails;
