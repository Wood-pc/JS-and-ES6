var dudes = [
    {
        "who": "Finn the Human",
        "wat": "Finn is a silly kid who wants to become a great hero one day. He might not look too tough, but if there's evil around, he'll slay it. That's his deal.",
        "comments": 4
    },

    {
        "who": "Jake the Dog",
        "wat": "Finn's best friend is a wise, old dog with a big heart. Jake has the magical ability to stretch and grow. When evil's not running amok, he plays viola with Lady Rainicorn.",
        "comments": 23
    },

    {
        "who": "Ice King",
        "wat": "Armed with a magic crown and an icy heart, the Ice King has only one goal: to secure a wife by any means necessary.",
        "comments": 10
    },

    {
        "who": "Princess Bubblegum",
        "wat": "As a millionaire nerd enthusiast, Princess Bubblegum immerses herself in every branch of geekdom from rocket science to turtle farming.",
        "comments": 44
    },

    {
        "who": "Marcy the Vampire",
        "wat": "Marceline is a wild rocker girl. Centuries of wandering the Land of Ooo have made her a fearless daredevil.",
        "comments": 10
    }
];

//dude.forEach( element => console.log( element ) );

dudes.forEach(myFunction);

function myFunction(dude, index){

	var h4 = document.createElement("h4"),
		name = document.createElement("a");
	name.innerHTML = dude['who'];

	var dudeWat = document.createElement("p");
	dudeWat.innerHTML = dude["wat"];

	var comments = document.createElement("footer");
	comments.innerHTML = dude["comments"];
	comments.className = "comments";

	var article = document.createElement("article");
	var row = document.getElementsByClassName("row");

	row[0].appendChild(article);

	article.appendChild(name);
	article.appendChild(dudeWat);
	article.appendChild(comments);
}


