import React from "react";
import { Modal, Input } from "antd";
import axios from "axios";

const UpdateModal = ({ editing, setEditing }) => {
  const updateMovie = (movie) => {
    axios
      .put(
        `/api/movies/${movie.id}/`,
        {},
        {
          headers: {
            Authorization: "Token 48e6b4d813c078788df2f26464c935e19b55c7c6",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Modal">
      <Modal
        title="Basic Modal"
        visible={editing}
        onOk={() => setEditing(false)}
        onCancel={() => setEditing(false)}
      >
        <Input />
      </Modal>
    </div>
  );
};

export default UpdateModal;
