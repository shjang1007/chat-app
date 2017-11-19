export const fetchUser = (userid) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userid}`
  })
}
