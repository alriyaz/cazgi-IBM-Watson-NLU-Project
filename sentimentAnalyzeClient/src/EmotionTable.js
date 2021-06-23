import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {

      if (this.props.emotions==="Bad Request: invalid request: content is empty") {
        return (  
          <div style={{ margin: "auto", width: "50%"}}>
             "Bad Request: invalid request: content is empty"
            </div>
            );}
            else if (this.props.emotions ==="Bad Request: Could not fetch URL: Unable to resolve host name"){
              return (  
                <div style={{ margin: "auto", width: "50%"}}>
                   "Bad Request: Could not fetch URL: Unable to resolve host name"
                  </div>
                  );}
           else{
            
      let listOfEvents = this.props.emotions;
      let listOfEventsAsArray = Object.entries(listOfEvents);
      let eventDetails = listOfEventsAsArray.map((emotion)=>{
        let eventListCollection = Object.entries(emotion[1])
        return <table className="table table-bordered">
          <tbody>
          <tr><td style={{color: "black",border: "1px solid black"}}>{"Sadness"}</td>
          <td style={{color: "black",border: "1px solid black"}}>{eventListCollection[0][1]}</td>
              </tr> 
              <tr>
                <td style={{color: "black",border: "1px solid black"}}>{"Joy"}</td>
                <td style={{color: "black",border: "1px solid black"}}>{eventListCollection[1][1]}</td>
                </tr> 
              <tr><td style={{color: "black",border: "1px solid black"}}>{"Fear"}</td>
              <td style={{color: "black",border: "1px solid black"}}>{eventListCollection[2][1]}</td>              
              </tr>
              <tr><td style={{color: "black",border: "1px solid black"}}>{"Disgust"}</td>
              <td style={{color: "black",border: "1px solid black"}}>{eventListCollection[3][1]}</td>
              </tr>
              <tr><td style={{color: "black",border: "1px solid black"}}>{"Anger"}</td>
              <td style={{color: "black",border: "1px solid black"}}>{eventListCollection[4][1]}</td>
              </tr>
          </tbody>
         
               </table>
               
          
        })

               return (  
                <div style={{ margin: "auto", width: "50%"}}>
                    {eventDetails
                    }
                  </div>
                  );
                }
            
     

          }
}
export default EmotionTable;