let value = document.getElementById('money')

let moneyTo = document.getElementById('moneyTo')

let convertButton = document.getElementById('toConvert')

let convertionResults = document.getElementById('results')
let cachorro

convertButton.addEventListener('click',   ToConvert)



function  ToConvert() {

  const round = (num, places) => {
    return +(parseFloat(num).toFixed(places));
  }

  fetch('https://economia.awesomeapi.com.br/json/all')
  .then(function(response){
    return response.json()
  })
  .then(function (data){
      console.log(data)
      console.log(moneyTo.value)
      switch (moneyTo.value) {

        case 'ARS' :
          convertionResults.innerHTML = `${round( value.value / data.ARS.ask, 2)} ARS`
          break

        case 'AUD' :
          convertionResults.innerHTML = `${round( value.value / data.AUD.ask, 2)} AUD`
          break

        case 'BTC' :
          convertionResults.innerHTML = `${round(value.value / data.BTC.ask, 2)} BTC`
          break

        case 'CAD' :
          convertionResults.innerHTML = `${round(value.value / data.CAD.ask, 2)} CAD`
          break

        case 'CHF' :
          convertionResults.innerHTML = `${round(value.value / data.CHF.ask, 2)} CHF`
          break

        case 'CNY' :
          convertionResults.innerHTML = `${round(value.value / data.CHF.ask, 2)} CNY`
          break

        case 'ETH' :
          convertionResults.innerHTML = `${round(value.value / data.ETH.ask, 2)} ETH`
          break

        case 'EUR' :
          convertionResults.innerHTML = `${round(value.value / data.EUR.ask, 2)} EUR`
          break

        case 'GBP' :
          convertionResults.innerHTML = `${round(value.value / data.GBP.ask, 2)} GBP`
          break

        case 'ILS' :
          convertionResults.innerHTML = `${round(value.value / data.ILS.ask, 2)} ILS`
          break

        case 'JPY' :
          convertionResults.innerHTML = `${round(value.value / data.JPY.ask,2)}JPY`
          break

        case 'LTC' :
          convertionResults.innerHTML = `${round(value.value / data.LTC.ask, 2)} LTC`
          break

        case 'USD' :
          convertionResults.innerHTML = `${round(value.value / data.USD.ask, 2)}$ USD`
          break

        case 'USDT' :
          convertionResults.innerHTML = `${value.value / round(data.USDT.ask, 2)}$ USD`
          break

        case 'XRP' :
          convertionResults.innerHTML = `${round(value.value / data.XRP.ask, 2)} XRP`
          break

        default:
          convertionResults.innerHTML = ``
      }
  })
}







  

