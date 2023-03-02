const usersUrl = prompt("Please enter an URL:");
const urlWebpage = document.getElementById("url");

let onlyHttps = usersUrl.slice(0,8);

if (onlyHttps.toLowerCase() === "https://") {
    urlWebpage.innerHTML = usersUrl;
} else {
    urlWebpage.innerHTML = ("https://") + usersUrl;
}