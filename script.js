function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_k01y6k7";
    const templateID = "template_bvy0op8";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Ton message vient d'être envoyé !")

        })
        .catch(err => console.log(err));

}


function showFeed(data) {
    var content = document.getElementById("feed");
    var itemsContainer = document.createElement("DIV");
    if (data.status == "ok") {
        for (var i = 0, j = 3; i < j; ++i) {
            var item = data.items[i];
            var itemContainer = document.createElement("DIV");
            var itemTitleElement = document.createElement("H2");
            var itemLinkElement = document.createElement("P");
            var itemLinkReadmore = document.createElement("A");
            var itemDescriptionElement = document.createElement("P");

            var itemPubDate = document.createElement("P");

            var itemPicture = document.createElement("image");
            var itemImgElement = document.createElement("IMG");
            itemsContainer.classList.add("wrap-feed");
            
            itemLinkElement.classList.add("feed-link");
            itemLinkElement.classList.add("feed-title");
            itemLinkElement.innerText = item.title;
            itemTitleElement.classList.add("titrePost-feed");
            itemTitleElement.appendChild(itemLinkElement);
            // note : make sure the content is XSS safe before using innerHTML
            var formatedDescription = item.description.replace(/<[^>]+>/g, "");
            itemDescriptionElement.innerHTML = formatedDescription;
            itemDescriptionElement.classList.add("text-feed");
            itemDescriptionElement.setAttribute("maxlength", 4);

            var date = item.pubDate;
            
            var strdate = date.slice(0, -9);
            itemPubDate.innerText = strdate;


            itemPicture.classList.add("divimage-feed");
            itemImgElement.classList.add("image-feed");

           

          
            var findImg = item.description;
            var img = $(findImg).find('img').eq(0).attr('src'); 

            function imgFeed() {
                var defaultImg = "default.jpg";
                if (img == null) {
                    return defaultImg;  
                } else {
                    return img;
                }
             }
            
            


            itemImgElement.src = imgFeed();
            itemPubDate.classList.add("pubDate");
            itemLinkReadmore.setAttribute("href", item.link);
            itemLinkReadmore.setAttribute("target", "_blank");
            itemLinkReadmore.classList.add("readmore-feed");
            itemLinkReadmore.innerText = "En savoir plus";
            itemContainer.classList.add("post-feeds");
            
            itemContainer.appendChild(itemPicture);
            itemContainer.appendChild(itemTitleElement);
            itemPicture.appendChild(itemImgElement);


            itemContainer.appendChild(itemDescriptionElement);

            itemContainer.appendChild(itemPubDate)

            itemContainer.appendChild(itemLinkReadmore);
            itemsContainer.appendChild(itemContainer);
        }
        content.appendChild(itemsContainer);
    }
}