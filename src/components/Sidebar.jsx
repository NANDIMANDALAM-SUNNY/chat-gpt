import React, { useContext, useEffect, useRef, useState } from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { languageDropdown } from './utils/dropdown';
import { store } from '../App';
import Select from "react-select";




 
const Sidebar = () => {

    const {selectedOption, setSelectedOption} = useContext(store)
  // const [selectedOption, setSelectedOption] = useState('en-IN');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const [filteredItems, setFilteredItems] = useState(languageDropdown);
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = languageDropdown.filter((item) =>
      item.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor:"white",
      color: state.isSelected ? 'red' : 'black', 
      borderRadius: '10px',
      border:'none',
      outline:'none',
      // border: state.isFocused ? '2px solid #40414F' : '2px solid #40414F',
      boxShadow: 'none',
      '&:hover': {
        // border: '1px solid #0070f3'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'white',
      backgroundColor: state.isSelected ? '#0070f3' : '#343541',
      '&:hover': {
        backgroundColor: state.isSelected ? '#0070f3' : '#f5f5f5',
        color: state.isSelected ? '#fff' : '#333'
      }
    })
  };

 const [toggle,setToggle] = useState(true)
     useEffect(() => {
      const handleResize = () => {
        // console.log('Screen width:', window.innerWidth);
        
      };
      window.addEventListener('resize', handleResize);
      return () => {
        if(window.innerWidth<=412){
          setToggle(true)
        }
        else{
           setToggle(false)
        }
        window.removeEventListener('resize', handleResize);
      };
    }, [toggle]);
  return (
    <>
      <CDBSidebar className='sidebars' textColor="#fff" style={{height:"100vh"}} toggled={toggle}>
        <CDBSidebarHeader  prefix={<i className="fa fa-bars fa-large"></i>} >
          Chat Gpt by Sunny
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
              {/* <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
          
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
          
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem> */}
       
              <Select
                options={languageDropdown}
                value={selectedOption}
                onChange={setSelectedOption}
                isSearchable={true}
                styles={customStyles}
                placeholder="Select the language"
              />

          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
    </>
  )
}

export default Sidebar