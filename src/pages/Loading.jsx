import React from 'react';

const Loading = () => {
    console.log("loading......")
    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
        </div>
    );
};

export default Loading;