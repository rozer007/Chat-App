import { useChatState } from "../Context/ChatProvider";
import {Box} from '@chakra-ui/react';
import SideDrawer from '../Components/miscellaneous/SideDrawer'
import MyChats from '../Components/MyChats'
import ChatBox from '../Components/ChatBox'
import { useEffect, useState } from "react";

const Chatpage = () => {

  const[fetchAgain,setFetchAgain]=useState()
  const [loggedUser,setLoggedUser]=useState()
  const {user}=useChatState();

  useEffect(()=>{
  setLoggedUser(JSON.parse(localStorage.getItem('userInfo')))
  },[])

  return (
      <div style={{width:"100%"}}>
          {user && <SideDrawer/>}
          <Box
            d='flex'
            justifyContent='space-between'
            w='100%'
            h='91.5vh'
            p='10px'>
          
            {user&& <MyChats fetchAgain={fetchAgain} loggedUser={loggedUser}/>}
            {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
          </Box>
      </div>
    )
}

export default Chatpage;