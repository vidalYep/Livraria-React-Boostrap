//É uma boa prática armazenar a URL dentro de uma variável.
const URL =
  "https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos";
export async function findAll() {
  const requestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer 12121314",
    },
  };

  //São necessário passar dois parâmetros no fetch, o primeiro é a URL e a segunda é qual o tipo de requisição.
  const responseHttp = await fetch(URL, requestInit);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    throw new Error("Falha ao consultar os contatos");
  }
}
