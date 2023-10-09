import React from 'react';

const UserCard = ({ data }: any) => {
  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-400 text-white h-80 whitespace-normal shadow-md rounded-lg">
        <img
          alt={data.name.first}
          src={data.picture.large}
          className="w-32 h-32 rounded-full mx-auto mt-8"
        />
        <figcaption className="text-center mt-5">
          <p className="text-gray-700 font-semibold mb-2">
            {data.name.first} {data.name.last}
          </p>
          <p className="text-gray-500">
            {/* <span className="font-medium whitespace-normal">email: </span>{data.email} */}
          </p>
          <p className="text-gray-500">
            <span className="">phone: </span>
            {data.cell}
          </p>
          <p className="text-gray-500">
            <span className="">city: </span>
            {data.location.city}
          </p>
        </figcaption>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
