import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from 'react-redux';
// import { createStream } from '../../actions';

// class StreamCreate extends React.Component {
//   // renderInput(formProps) {
//   // return (
//   // <input
//   //   onChange={formProps.input.onChange}
//   //   value={formProps.input.value}
//   // />
//   //SAME AS ABOVE
//   // <input {...formProps.input} />
//   // );
//   // }

//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   //meta return the errors sent by validate function
//   renderInput = ({ input, label, meta }) => {
//     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     this.props.createStream(formValues);
//   }

//   render() {
//     //THIS handleSubmit IS A CALLBACK FUNCTION PROVIDED BY REDUX FORM
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   //THE ERRORS MUST HAVE THE SAME NAME AS INPUT TITLES
//   const errors = {};

//   if (!formValues.title) {
//     errors.title = "You must enter a title";
//   }

//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }

//   return errors;
// };

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);
