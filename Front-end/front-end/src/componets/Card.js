import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import AvatarGroup from 'react-avatar-group';

function card() {
  return (
    <div className='grid-container'>
       
      <div class="card">
  <h2 className='title'>Tasks Progress</h2>
  <p className='title' id='sub'>Recent All Kind Of Running Tasks</p>
  <div className='Tasks'>
  <p>Web Ui Design</p> <p>5/10</p>
  </div>
  <Progress status="error"
  theme={{
    error: {
      symbol: '?',
      color: '#acb177'
    }
  }}
   percent={50}  />
   <div className='Tasks'>
  <p>Mobile App Design</p> <p>8/10</p>
  </div>
  <Progress status="error"
  theme={{
    error: {
      symbol: '?',
      color: '#d0a18f'
    }
  }}
   percent={80}  />
   <div className='Tasks'>
  <p>Web App Design</p> <p>7/10</p>
  </div>
  <Progress status="error"
  theme={{
    error: {
      symbol: '?',
      color: '#c68c8a'
    }
  }}
   percent={70}  />
</div>
<div class="card">
  <div className='title'>
<img id="team-logo" width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/organization-chart-people.png" alt="organization-chart-people"/>
  <h2>Our Team</h2>
  </div>
  <AvatarGroup id="Avatar"
      avatars={["James", "Amy", "Will","Samer","Alaa","Imen","Nour","Najet"]}
      
      initialCharacters={1}
      max={3}
      size={60}
      displayAllOnHover
      shadow={2}
    />
  
</div>
<div class="card">
  <div >
  <h2 className='title'>Total Incompleted Tasks</h2>
  <br/>
  <p className='title' id='number'>18</p>
  <p className='title'>Task Count</p>

  </div>
</div>
<div class="card">
  <div >
  <h2 className='title' id='sub'>Our Best performer</h2>
  
  </div>
</div>
    </div>
  )
}

export default card;
