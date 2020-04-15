var all_images = [
    "CapitalismIsAVirus_Protect All Workers",
    "CapitalismIsAVirus_Protect All Workers Icon",
    "CapitalismIsAVirus_Medicare 4 All",
    "CapitalismIsAVirus_Medicare 4 All Art",
    "CapitalismIsAVirus_Capitalism Can_t",
    "CapitalismIsAVirus_Capitalism Can_t Art",
    "CapitalismIsAVirus_People Over Profit",
    "CapitalismIsAVirus_People Over Profit Art",
    "CapitalismIsAVirus_Capitalism Virus",
    "CapitalismIsAVirus_Capitalism Virus Art",
    "CapitalismIsAVirus_Solidarity Forever",
    "CapitalismIsAVirus_Solidarity Forever Art",
    "CapitalismIsAVirus_Medicare Todos",
    "CapitalismIsAVirus_Medicare Todos Art",
    "CapitalismIsAVirus_Tenant Power",
    "CapitalismIsAVirus_Tenant Power Art",
    "CapitalismIsAVirus_No Work No Rent",
    "CapitalismIsAVirus_No Work No Rent Art",
    "CapitalismIsAVirus_We Keep Us Safe",
    "CapitalismIsAVirus_We Keep Us Safe Art",
    "CapitalismIsAVirus_We_ll Take Fair",
    "CapitalismIsAVirus_We_ll Take Fair Art",
    "CapitalismIsAVirus_Call Your Mother",
    "CapitalismIsAVirus_Call Your Mother Art",
    "CapitalismIsAVirus_Propaganda",
    "CapitalismIsAVirus_Propaganda Art",
]

// shuffle

function ImageList(il) {
    var images = []
    for (image of il) {
        images.push({ link: image });
    }
    this.images = images;
}

var num_sections = 3;
var images_per_scroller = Math.ceil(all_images.length / num_sections);
var image_lists = [];

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle_array(array) {
	var currentIndex = array.length
	, temporaryValue
	, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// all_images = shuffle_array(all_images);


for (var i = 0; i < all_images.length; i+= images_per_scroller) {
    var end = i + images_per_scroller;
    if (end > all_images.length) {
        end = all_images.length;
    }
    var images = new ImageList(all_images.slice(i, end));
    image_lists.push(images);
}
