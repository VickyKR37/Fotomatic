mm.js
let bibleQuotes = (opening, quote, closing) => {
return { 
    opening: opening,
    quote: quote,
    closing: closing,
    randomSelection() {
let opener = 'God says '
let quotes = ['For we walk by faith, not sight.', 'It is God who arms me with strength and makes my ways perfect.', 'The Lord gives strength to his people; the lord blesses his people with peace.']
let closer = ['Lean on Him.']
        for (let i = 0; i < quotes.length; i++) {
            console.log(opener + quotes[i] + closer)
        }
}
}
}