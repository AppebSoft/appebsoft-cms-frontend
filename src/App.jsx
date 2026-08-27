import { useState } from "react";

import AppRoutes from "./routes/AppRoutes";

import Loader from "./components/layout/Loader";


function App() {


  const [loading,setLoading] = useState(true);



  return (

    <>

      {
        loading &&
        <Loader
          finishLoading={()=>setLoading(false)}
        />
      }


      <AppRoutes />


    </>

  );

}


export default App;