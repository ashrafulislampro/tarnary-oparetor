import React from 'react';

const User = (props) => {
          const familiar = props.familiar;
          let greeting;
          if(familiar){
                    greeting =  <p>Welcome, my dear friend.</p>;
          }
          else{
                    greeting = <p>Who the hell are you?</p>;
          }
          return (
                    <div>
                              <div>
                                        <h3>Greeting</h3>
                                        {
                                                  greeting
                                        }
                                        
                              </div>
                              <div>
                                        <h3>Food</h3>
                                        {
                                                  familiar ? <p>I will buy food for you.</p> : <p>Let's eat his his whose whose.</p>
                                        }
                                       
                                        
                              </div>
                              <div>
                                        <h3>Connection</h3>
                                       {
                                                 familiar &&  <p>Connect to facebook.</p>
                                       }
                              </div>
                    </div>
          );
};

export default User;