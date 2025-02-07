let searchBtn = document.getElementById('search-btn')
let countryInput = document.getElementById('country-input')

searchBtn.addEventListener('click', () => {
    let countryName = countryInput.value
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log('final URL', finalUrl)

    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img"></img>
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital: </h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent: </h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population: </h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency: </h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages: </h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}
                        </span>
                    </div>
                </div>
            `
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field can not be empty</h3>`
            } else {
                result.innerHTML = `<h3>Please enter a valid country name</h3>`
            }
        })

})