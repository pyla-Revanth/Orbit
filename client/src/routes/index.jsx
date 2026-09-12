import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Feed from '../pages/Feed'
import Profile from '../pages/Profile'
import Messages from '../pages/Messages'
import ChatBox from '../Pages/ChatBox'
import Connections from '../pages/Connections'
import Discover from '../pages/Discover'
import CreatePost from '../pages/CreatePost'
import { useUser } from '@clerk/react'
import Layout from '../layouts'

const AppRouter = () => {
  const { user } = useUser();
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ !user ? <Login/> : <Layout/>}>
                <Route index element={<Feed/>}/>
                <Route path="messages" element={<Messages/>}/>
                <Route path="messages/:userId" element={<ChatBox/>}/>
                <Route path="connections" element={<Connections/>}/>
                <Route path="discover" element={<Discover/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="profile/:userId" element={<Profile/>}/>
                <Route path="create-post" element={<CreatePost/>}/>
            </Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;