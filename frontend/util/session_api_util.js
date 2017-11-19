export const signIn = (user) => {
  return $.ajax({
    method: "POST",
    url: `api/session/`
  })
}
