import React from 'react';
import './App.css';

//https://api.github.com/users/alikerhenry
function App({login}) {
  return(
    <div>
       <h1>Hello React Testing Library</h1>
    </div>
  );  
}

export default App;
// *-------|App test|--------*
/* export function App({login}){
  return login
}*/

//App.test.js

/* import App from "./App"
  test("First app test",() => {
    expect(App({login})).toBe({"alikerhenry"});
  })
*/
