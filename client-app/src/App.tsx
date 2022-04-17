import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { HeaderContent,ListContent, ListItem } from 'semantic-ui-react';

function App() 
{
  const [activities,setActivies]= useState([]);

  useEffect(() => {
        axios.get('http://localhost:5000/api/activities').then(response => {

          console.log(response) ;   
          setActivies(response.data);

        })

  },[])//it will ensure axios run only one time

  
  return ( 
  
    <div >
      < HeaderContent as='h2' icon='users' content='Reactivities'/>
            
         <ListContent>
             {activities.map((activity: any) =>(
                  <ListItem key={activity.id}>
                     {activity.title}
                  </ListItem>
             ))}
         </ListContent> 
             
    </div>
  )
}

export default App;
