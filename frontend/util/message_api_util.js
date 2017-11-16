export const createMessage = (message) => {
  return $.ajax({
    method: "post",
    url: "api/messages",
    data: { message }
  });
};

export const deleteMessage = (id) => {
  return $.ajax({
    method: "delete",
    url: "api/messages/${id}"
  });
};
