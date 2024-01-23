const app = document.getElementById("app") 


for (let badge of badges) {
	let a = document.createElement('div')
	a.classList.add('animal')
	let t = `<p class="titlecolor"><strong>PARENTS</strong></p>`
	for (let x of badge.Parents) {
		t += `<img src="./images/${x}.png">`
	}	
	t += `<p class="titlecolor"><strong>RESULT</strong></p>`
	t += `<img src="./images/${badge.Child}.png">`
	a.innerHTML = t
	app.appendChild(a)
}