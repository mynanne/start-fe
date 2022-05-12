const $123 = document.getElementById("123")
const $text = document.getElementById("text")

const submit = () => {
    const url = `https://dapi.kakao.com/v2/search/web?query=${text.value}`
    const headers = {
        Authorization: 'KakaoAK 9aed85266af84164d73719adc8c9bb6c'
    }

    fetch(url, {headers})
        .then((response) => response.json())
        .then((data) => {
            while($123.hasChildNodes()) {
                $123.removeChild($123.childNodes[0])
            }

            for(let i of data.documents) {
                const asdf = document.createElement('div')
                asdf.innerHTML = i.contents
                asdf.style.marginBottom = "30px"

                $123.appendChild(asdf)
            }
        })
}