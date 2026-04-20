interface SignupData {
    fullname: string;
    email: string;
    password?: string;
}


const API_URL = import.meta.env.VITE_API_BASE_URL;

export const signupUser = async(userData) => {
    try{
        const res = await fetch(`${API_URL}/signup`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        const data = await res.json()
        if(!res.ok) {
            return {
                success: false,
                fullError: data,
                message: data.message
            }
        }
        
        return {success: true, fulldata: data}
    }catch(internetError){
        console.log(internetError)
    }
}