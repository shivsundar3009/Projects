import { useEffect , useState } from 'react'
import axios from 'axios'
function GetOtherUsers() {


  const [otherUsers, setOtherUsers] = useState(null)

  useEffect(() => {

     async function getUsers(){


         try {
    
           const otherUsers = await axios.post(`http://localhost:5000/api/authRoutes/getOtherUsers`,
                {withCredentials:true}
           )
    
           setOtherUsers(otherUsers?.data || null)
           
         } catch (error) {
    
           console.log(error);
           
         }


     }

     getUsers()



  }, [])


  return otherUsers
}

export default GetOtherUsers