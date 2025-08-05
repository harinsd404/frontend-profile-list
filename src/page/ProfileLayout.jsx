import { Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import '../style/ProfileLayout.css';

export default function ProfileLayout(){
    return (
        <>
            <Header />
            <div id="container">
                <Routes>
                    <Route path="/profileForm" element={<ProfileForm />}/>
                </Routes>
            </div>
            
        </>
    )
}