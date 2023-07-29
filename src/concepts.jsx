
//written before return
let login=false; 


//we can also write if else block before return
if(login===true)
{
    return(
        <p>le dekh le bhai kya dekhna hai </p>
    )
}
else{
    return(
        <p>ja main nahi dikha raha jo karte bane kar le</p>
    )
}
//ternary operator written after return (simple one liner if else )
{login===true?<p>le bhai dekh le yaar </p>:<p style={{color:"red"}}>ja bhai apna kaam kar</p>}

// SYNTAX TO WRITE IF ELSE AFTER RETURN BLOCK BY CREATING => FUNCTION
{(()=>
    {
        if(login)
        {
            return(

            )
        }
        else
        {
            return(
                
            )

        }

})}()