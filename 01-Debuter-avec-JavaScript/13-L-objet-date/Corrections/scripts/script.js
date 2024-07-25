// Question 1
class Event {
	constructor(titre, date, description) {
		this.titre = titre;
		this.date = new Date(date);
		this.description = description;
	}
	// Question 2
	affEvent() {
		let dateFormated = this.date.toLocaleDateString("fr-FR"); //Nous formatons la date avec la locale française.
		console.log(
			`-------- ${dateFormated} --------\nTitre de l’évènement : ${this.titre}\nDescription : ${this.description}`,
		);
	}
}

const event1 = new Event(
	"rdv medical",
	"2023-12-10T14:30:00",
	"visite medicale",
);

const event2 = new Event(
	"rdv medical",
	"2023-12-10T14:30:00",
	"visite medicale",
);

event.affEvent();
