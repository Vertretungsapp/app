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

<div class="m-auto mt-20 w-[80%]">
	<h1 class="text-center">Vertretungsapp<span class="text-accent">.</span></h1>
	<p class="text-center">
		Diese App steht derzeit nur für eine bestimmte Personengruppe zur Verfügung.
	</p>
</div>

<div class="fixed bottom-0 right-0 h-48 w-1/3" on:keypress={() => {}} on:click={click} />
