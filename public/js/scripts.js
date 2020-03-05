let searchISBN = function() {
    console.log("pressed");
    let isbn = $("#isbn").val();
    $("#result").html("");
    $("#isbn").val('');
    $.ajax({
        method:"GET",
        url: `http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
        dataType: "json",
        success: function(data) {
            let imgLink = data[`ISBN:${isbn}`].cover.large;
            let title = data[`ISBN:${isbn}`].title;
            let author = data[`ISBN:${isbn}`].authors[0].name;
            let year = data[`ISBN:${isbn}`].publish_date;
            let publisher = data[`ISBN:${isbn}`].publishers[0].name;
            let pages = data[`ISBN:${isbn}`].number_of_pages;
            $("#result").append(`<div class="cover"><img src="${imgLink}"></div><div class="info"><div class="infoRow">Title: ${title}</div><div class="infoRow">Author: ${author}</div><div class="infoRow">Publish: ${year}</div><div class="infoRow">Publisher: ${publisher}</div><div class="infoRow">ISBN: ${isbn}</div><div class="infoRow">Pages: ${pages}</div></div>`)
            // console.log(data);
            // console.log(data[`ISBN:${isbn}`].cover.large);
            // console.log(data[`ISBN:${isbn}`].title);
            // console.log(data[`ISBN:${isbn}`].authors[0].name);
            // console.log(data[`ISBN:${isbn}`].publish_date);
            // console.log(data[`ISBN:${isbn}`].publishers[0].name);
            // console.log(`${isbn}`);
            // console.log(data[`ISBN:${isbn}`].number_of_pages);
        }
    });

}