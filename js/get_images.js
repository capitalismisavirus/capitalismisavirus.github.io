var all_images = [
    "CapitalismIsAVirus v1.0-01.svg",
    "CapitalismIsAVirus v1.0-02.svg",
    "CapitalismIsAVirus v1.0-35.svg",
    "CapitalismIsAVirus v1.0-36.svg",
    "CapitalismIsAVirus v1.0-11.svg",
    "CapitalismIsAVirus v1.0-12.svg",
    "CapitalismIsAVirus v1.0-15.svg",
    "CapitalismIsAVirus v1.0-16.svg",
    "CapitalismIsAVirus v1.0-19.svg",
    "CapitalismIsAVirus v1.0-20.svg",
    "CapitalismIsAVirus v1.0-66.svg",
    "CapitalismIsAVirus v1.0-25.svg",
    "CapitalismIsAVirus v1.0-26.svg",
    "CapitalismIsAVirus v1.0-37.svg",
    "CapitalismIsAVirus v1.0-38.svg",
    "CapitalismIsAVirus v1.0-43.svg",
    "CapitalismIsAVirus v1.0-44.svg",
    "CapitalismIsAVirus v1.0-45.svg",
    "CapitalismIsAVirus v1.0-46.svg",
    "CapitalismIsAVirus v1.0-49.svg",
    "CapitalismIsAVirus v1.0-50.svg",
    "CapitalismIsAVirus v1.0-59.svg",
    "CapitalismIsAVirus v1.0-60.svg",
    "CapitalismIsAVirus v1.0-65.svg",
    "CapitalismIsAVirus v1.0-69.svg",
    "CapitalismIsAVirus v1.0-70.svg",
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
