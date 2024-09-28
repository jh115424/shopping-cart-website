import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import icons from '../assets/icons.svg';


export default function ProfilePage() {
   const params = useParams<{profileId: string}>();


    return (
        <div>
            <h1>Profile Page{params.profileId}</h1>

      
        </div>
    );
}