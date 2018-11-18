let all_movies_span_tags = document.getElementsByTagName("span");
console.log(all_movies_span_tags);
console.log("content js injected");



for (var movie = 0; movie < all_movies_span_tags.length; movie++){
    let isRatingSpan =  all_movies_span_tags[movie].innerText.search("IMDB");
    if ( isRatingSpan != -1 ){
        let startPos = isRatingSpan+6
        let endPos = startPos+3;

        let theRating = all_movies_span_tags[movie].innerText.slice(startPos,endPos);

        if (theRating >= 7){
            all_movies_span_tags[movie].parentElement.parentElement.style.backgroundColor = "#00cc66";
        } else {
            //all_movies_span_tags[movie].parentElement.parentElement.style.backgroundColor = "red";
        }
    }
}
