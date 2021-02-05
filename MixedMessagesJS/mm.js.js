mm.js
let bibleQuotes = (opening, quote, closing) => {
return { 
    opening: opening,
    quote: quote,
    closing: closing,
    randomSelection() {
let opener = 'God says '
let quotes = ['for we walk by faith, not sight.', 'it is God who arms me with strength and makes my ways perfect.', 'the Lord gives strength to his people; the lord blesses his people with peace.']
let closer = [' Lean on Him.']
        for (let i = 0; i < quotes.length; i++) {
            console.log(opener + quotes[i] + closer)
        }
}
}
}
console.log(bibleQuotes);