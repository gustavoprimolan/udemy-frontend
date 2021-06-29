import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/edit/:id" exact component={StreamEdit}/>
          <Route path="/streams/delete/:id" exact component={StreamDelete}/>
          <Route path="/streams/show" exact component={StreamShow}/>
        </div>
      </Router>
    </div>
  );
};


// const PageOne = () => {
//   return (
//     <div>
//       {/* ANCHOR TAG IS BAD!!  BECAUSE IT LOADS ALL APPLICATION*/}
//       {/* <a href="/pagetwo">Navigate to page two</a> */}
//       PageOne
//       <Link to="/pagetwo">Navigate to page two</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       {/* ANCHOR TAG IS BAD!! */}
//       {/* <a href="/">Navigate to page one</a> */}
//       PageTwo<button>Click me</button>
//       <Link to="/">Navigate to page one</Link>
//     </div>
//   );
// };


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={PageOne} />
//           <Route path="/pagetwo" component={PageTwo} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

export default App;
