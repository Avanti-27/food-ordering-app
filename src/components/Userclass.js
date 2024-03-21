 import React from "react";
 
 class Userclass extends React.Component {

    constructor (props){
        super(props);
    }

    /* constructor (props){
        super(props);

        this.state = {
            userInfo: {
              name: "dummy",
              location: "Bangalore-",
            }
          }
      
        }
      
        async componentDidMount() {
      
          //const data = await fetch("  https://api.github.com/users")
          const json = data.json;
      
          this.setState({
            userInfo: json,
          })
    } */

    render() {
        // const [login, node_id, avatar_url] = this.state.userInfo[0];
        const [name, location] = this.props;
        return (
            <div className="users">
             <h2>Name: {name} </h2>
             <h3>Location: {location} </h3>
             <h3>Social Media: @avanti2710</h3>
     
            </div> 
            
         )
    }
 }

 export default Userclass;