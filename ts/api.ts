import {apiUrl, apiKey} from "./config";
export function getRecepies () {
    return fetch(`${apiUrl}?apiKey=${apiKey}&addRecipeInformation=true`).then((resp) => {
        return resp.json();
    })
}