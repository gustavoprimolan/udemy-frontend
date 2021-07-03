import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = ({ fetchStream, deleteStream, streamId, stream, ...props }) => {
  useEffect(() => {
    fetchStream(streamId);
  }, [fetchStream, streamId]);

  const actions = (
    <React.Fragment>
      <button onClick={() => deleteStream(streamId)} className="ui button negative">Delete</button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  };

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  return { stream: state.streams[streamId], streamId };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
