const my_button = document.getElementById ("join_newsletter");

my_button.onclick=function(){
	event.preventDefault();
	const name = document.getElementById("name");
	let classNames = name.classList;
	if (name.value === "") {
		classNames.add("my_input_red");
	} else {
		classNames.remove("my_input_red");
	}
	const email = document.getElementById("email");
	let classEmail = email.classList;
	if (email.value === "") {
		classEmail.add("my_input_red");
	} else {
		classEmail.remove("my_input_red");
	}
	const form = document.getElementById("my_form");
	let classForm = form.classList;
	const message = document.getElementById("message");
	let classMessage = message.classList;
	if ( !(name.value === "") && !(email.value === "")) {
		classMessage.add("info_accepted");
		classForm.add("no_display");
	} else{
		classForm.remove("no_display");
		classMessage.remove("info_accepted");
	}
}