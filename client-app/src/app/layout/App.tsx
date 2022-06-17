import React, { useEffect } from 'react';
import './styles.css';
import {  Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import {  observer } from 'mobx-react-lite'





export default observer(function App() 
{
  const {activityStore} = useStore();
  
   useEffect(() => {
        activityStore.loadingActivities();
  },[activityStore])//it will ensure axios run only one time

    
 if(activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>; 
        
   return ( 
  
    <div >
       <>
         <NavBar/>
         
         <Container style={{marginTop:'7em'}}>
         
             <ActivityDashboard/> 
            
         </Container>
        </>  
               
    </div>
  )
})




