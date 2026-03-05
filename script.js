const traderURL = "https://encora.it/traders/vndyne";

async function fetchTraderData() {
    try {

        const response = await fetch(traderURL);
        const text = await response.text();

        document.getElementById("traderData").innerHTML = text;

    } catch (error) {
        document.getElementById("traderData").innerHTML =
            "Unable to fetch trader data.";
    }
}

fetchTraderData();
