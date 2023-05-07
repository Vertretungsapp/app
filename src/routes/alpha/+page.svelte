<script>
	let count = 0;

	function click() {
		count++;
		if (count >= 20) {
			localStorage.setItem('alphaEnabled', 'true');
			window.location.href = '/';
		}
	}
</script>

<div class="w-[80%] m-auto mt-20">
	<h1 class="text-center">Vertretungsplan<span class="text-accent">42</span></h1>
	<p class="text-center">
		Diese App steht derzeit nur für eine bestimmte Personengruppe zur Verfügung.
	</p>
</div>

<div class="fixed bottom-0 right-0 w-1/3 h-48" on:keypress={() => {}} on:click={click} />
