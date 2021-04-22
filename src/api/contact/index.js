export const createContact = (data) => {
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const content = JSON.stringify(data)
    const requestOptions = {
      method: 'POST',
      headers: header,
      body: content,
      redirect: 'follow'
    }
    return fetch ("https://api.volveraquiyahora.com/",requestOptions)
    .then(response => response.json())
}