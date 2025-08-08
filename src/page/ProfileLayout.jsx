import { Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import ProfileList from '../components/ProfileList';
import ProfileModify from '../components/ProfileModify';
import '../style/ProfileLayout.css';

export default function ProfileLayout({profiles, setProfiles}){
    return (
        <>
            <Header />
            <div id="container">
                <Routes>
                    <Route path="/profileForm" element={<ProfileForm profiles={profiles} setProfiles={setProfiles} />}/>
                    <Route path="/profileList" element={<ProfileList profiles={profiles} setProfiles={setProfiles} />}/>
                    <Route path="/modify/:id" element={<ProfileModify profiles={profiles} setProfiles={setProfiles} />} />
                </Routes>
            </div>
            
        </>
    )
}