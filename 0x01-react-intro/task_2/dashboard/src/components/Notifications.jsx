import React from 'react';
import '../Notifications.css';
import { getLatestNotification } from '../utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <span>Here is the list of notifications</span>
      <button onClick={()=>console.log("Close button has been clicked")} aria-label='close'>
        <img src='https://logowik.com/content/uploads/images/close1437.jpg'/>
      </button>
      <ul>
        <li data-priority="default">New course available</li>
         <li data-priority="urgent" >New resume available</li>
         <li data-priority="urgent" dangerouslySetInnerHTML={{__html:getLatestNotification()}}></li>
      </ul>
    </div>
  );
}
