// import axios to handle http request
import axios from "axios";

export const fetchMessages = (messages) => {
  return axios.get(
    "api/messages",
    messages
  );
}

export const createMessage = (message) => {
  return axios.post(
    "api/messages",
    message
  );
};

export const deleteMessage = (id) => {
  return axios.delete(
    `api/messages/${id}`
  );
};

export const updateMessage = (message) => {
  return axios.patch(
    `api/messages/${message._id}`,
    message
  );
};
