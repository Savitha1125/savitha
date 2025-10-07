import React from "react";
import { useParams } from "react-router-dom";
function HomeDetails(){
      const params=useParams();
      return(
            <>
            <p>
                 Home-Details: This is home detail page
            </p>
            <p>Selected id:{params.id}</p>
            </>
      );
}
export default HomeDetails;