async function loadTraderData() {

    try {
        const response = await fetch("trader.html");
        const data = await response.text();

        document.getElementById("traderData").innerHTML = data;

    } catch (error) {
        document.getElementById("traderData").innerHTML =
        "Trader data could not load.";
    }

}

loadTraderData();
