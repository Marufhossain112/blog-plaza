import React from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const IndividualPostDetails = ({ postItem }) => {
  const { image, id, likes, owner, publishDate, tags, text } = postItem;
  const { title, firstName, lastName, picture } = owner;
  return (
    <div className="flex justify-center">
      <div className="card pt-10 w-full bg-white shadow-xl">
        <figure>
          <img
            className="pt-2"
            style={{ height: "235px", width: "365px" }}
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">
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
                <span className="text-gray-300">By</span>{" "}
                <span className="text-slate-600">
                  {firstName} {lastName}
                </span>
              </div>
              <div style={{ marginLeft: "inherit" }}>
                {publishDate.length > 10
                  ? publishDate.slice(0, 10)
                  : publishDate}
              </div>
            </div>
          </div>
          <div>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              cum eius quo temporibus ex doloribus, voluptatum animi ducimus
              inventore ratione eum, voluptates optio vero accusantium cumque a,
              maxime culpa quisquam deserunt minus impedit rerum aliquam! Dolore
              sequi hic non id, consequuntur voluptates minus. Ex, tempora nam
              dicta mollitia molestias pariatur accusamus ad eos sunt! Vel ipsam
              debitis fugiat ipsa praesentium nemo eum iure ipsum voluptates
              consequatur possimus impedit, nulla tenetur ad iusto sunt veniam
              delectus saepe? Similique officia corporis voluptatibus natus
              voluptate perferendis. Modi minus, voluptatibus, eius dolore
              eveniet reprehenderit sapiente beatae reiciendis, laboriosam sint
              similique. Ipsum asperiores minima quae ratione dolor. Tempore,
              reiciendis autem, officia nihil, delectus sint facere incidunt ea
              molestiae vel laboriosam dolore saepe quas quasi eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores temporibus maxime pariatur fugiat, porro tenetur corrupti consequuntur repellendus vitae ea tempore nobis iure quos provident qui, esse cumque? Id hic, maxime nam unde ad labore minus vitae dolorum, repudiandae non placeat voluptatum animi. Quasi quidem illum ut fuga voluptatum facere sed officiis, molestias sapiente accusamus quis, quos atque quia quae! Provident, tenetur nostrum! Molestias eligendi perspiciatis tempora tenetur veniam sequi dolor reiciendis, porro facere debitis, quidem unde doloribus facilis veritatis laudantium quibusdam nemo, dignissimos accusamus! Nihil quasi odio optio beatae minima, quibusdam itaque inventore ratione odit, expedita id exercitationem ex officia culpa sapiente aliquam accusamus blanditiis deserunt? Esse numquam earum repudiandae dolor neque laudantium praesentium modi fugit placeat. Officiis accusantium amet provident. Dolor fuga eius nihil molestiae unde! Pariatur voluptatem saepe veniam quasi in eveniet sunt atque ipsum iusto beatae ipsam facere dolorem labore expedita explicabo blanditiis magnam, sequi veritatis deserunt voluptas distinctio provident repellendus ratione! Tempora, in quis cumque quibusdam vero similique inventore magni sapiente labore officia adipisci iste corrupti consectetur voluptatibus, architecto at! Nemo numquam deleniti aut. Illo velit, magnam totam, maxime deserunt provident unde dignissimos inventore iure eos vero ipsam nemo aut atque mollitia. Totam saepe quia doloribus minus necessitatibus non esse, quod explicabo vel eaque ratione culpa perferendis perspiciatis deserunt asperiores facilis enim voluptas maiores quis cumque beatae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPostDetails;
