import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ stream, fetchStream, streamId, editStream }) => {
  useEffect(() => {
    fetchStream(streamId);
  }, [fetchStream, streamId]);

  const onSubmit = (formValues) => {
    editStream(streamId, formValues);
  };

  if (!stream) {
    return <div>Loading...</div>;
  }

  //INITIAL VALUES IS A SPECIFIC PROPERTY OF REDUX FORM
  return (
    <div>
      <h3>Edit a Stream</h3>
      {/* <StreamForm
        initialValues={{ title: stream.title, description: stream.description }}
        onSubmit={onSubmit}
      /> */}
      <StreamForm
        initialValues={_.pick(stream, "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  );
};

//ownProps its the props of component
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    streamId: ownProps.match.params.id,
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
