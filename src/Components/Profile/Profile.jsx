import React from 'react';

export default function Profile({userData}) {
    let{first_name,last_name,email,age}=userData;
  return (
    <>
      <div className="profile-info my-5">
        <h4 className='mb-5 p-3'>Name : {first_name} {last_name}</h4>
        <h4 className='mb-5 p-3'>Age : {age} years</h4>
        <h4 className='mb-5 p-3'>E-Mail : {email}</h4>
      </div>
    
    
    </>
  )
}
