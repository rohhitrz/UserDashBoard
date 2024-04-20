import react, { useEffect, useState } from "react";
import axios from "axios";

const UserDashBoard = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setUserData(response.data.data);
            console.log(response.data);
            setError(null);
        }

        catch (error) {
            setError(error.message);
            setUserData(null);
            alert(error.message);

        }

    };

   


    useEffect(()=>{

        fetchData(1);


        
},[])

   
    

    return (
        <div>
            <h2>User DashBoard</h2>

            <div>
                <button onClick={() => fetchData(1)} >button 1</button>
                <button onClick={() => fetchData(2)}>button 2</button>
                <button onClick={() => fetchData(3)}>button 3</button>
                <button onClick={() => fetchData(100)}>button 100</button>
            </div>

            {/* {
                error && <div className="alert">{error}</div>

            } */}

            {
                userData &&
                (
                    <div>
                        <p>Email: {userData.email}</p>
                        <p>
                            Name: {userData.first_name} {userData.last_name}
                        </p>

                        <img src={userData.avatar} alt="" />
                    </div>

                )
            }



        </div>
    )




}


export default UserDashBoard
