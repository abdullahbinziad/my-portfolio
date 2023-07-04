import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectsCard from '../../components/projects/ProjectsCard';

const Works = () => {
const [loadedData,setLoadedData] = useState([]) ;

useEffect(()=>{
    fetch('projects.json')
    .then(res=> res.json())
    .then(data => setLoadedData(data))
},[])

const ecommerce = loadedData.filter(n=> n.category =='ecommerce');
const realstate = loadedData.filter(n=> n.category =='realstate');
const association = loadedData.filter(n=> n.category =='association');
const booking = loadedData.filter(n=> n.category =='booking');
const lms = loadedData.filter(n=> n.category =='lms');
const enterprise = loadedData.filter(n=> n.category =='enterprise');
const others = loadedData.filter(n=> n.category =='others');



    return (
        <div className="p-2 md:p-0">
        <div className="md:p-14 p-8 bg-white dark:bg-my-dark rounded-2xl space-y-3">
         
<h1 className='text-3xl font-bold dark:text-white'>Projects</h1>

<div>
<Tabs>
    <TabList className="dark:text-white">
      <Tab>All- {loadedData.length}</Tab>
      <Tab>Ecommerce - {ecommerce.length}</Tab>
      <Tab>Realstate - {realstate.length}</Tab>
      <Tab>Booking- {booking.length}</Tab>
      <Tab>LMS- {lms.length}</Tab>
      <Tab>Enterprise- {enterprise.length}</Tab>
      <Tab>Others- {others.length}</Tab>
    </TabList>

    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        loadedData.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        ecommerce.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        realstate.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
   
    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        booking.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        lms.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        enterprise.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
    <TabPanel>
   <div className='grid grid-cols-2 gap-4 mt-6'>
   {
        others.map(n=> <ProjectsCard key={n._id} project={n}></ProjectsCard>)
     }
   </div>
    </TabPanel>
  
 
  </Tabs>
</div>

        </div>
      </div>
    );
};

export default Works;