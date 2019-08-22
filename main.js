const images = ['<img src="images/chiots.png">',
				'<img src="images/chatons.jpg">',
				'<img src="images/poussins.jpg">',
				'<img src="images/furet.jpg">',
				'<img src="images/dauphins.jpg">'];

const contenuSlider = document.getElementById('contenu_slider');

let prev = 4;
let actuel = 0;
let next = 1;

const slideGauche = () => {

	document.getElementById('contenu_slider').style.transform = "translateX(550px)";
	document.getElementById('contenu_slider').style.transition = "all 0.3s ease-out";
	actuel = prev;

	setTimeout(reinit,400);
};

const slideDroite = () => {
	document.getElementById('contenu_slider').style.transform = "translateX(-550px)";
	document.getElementById('contenu_slider').style.transition = "all 0.3s ease-out";
	actuel = next;

	setTimeout(reinit,400);
};

const reinit = () => {
	if(actuel === 0) {
		prev = 4;
		next = actuel + 1;
	}

	else if(actuel === 4) {
		prev = actuel - 1;
		next = 0;
	}

	else {
		prev = actuel - 1;
		next = actuel + 1;
	}

	contenuSlider.innerHTML = images[prev] + images[actuel] + images [next];
	document.getElementById('contenu_slider').style.transition = "none";
	document.getElementById('contenu_slider').style.transform = "translateX(0px)";
};

contenuSlider.innerHTML = images[prev] + images[actuel] + images [next];

document.getElementById('gauche').addEventListener('click',slideGauche);
document.getElementById('droite').addEventListener('click',slideDroite);