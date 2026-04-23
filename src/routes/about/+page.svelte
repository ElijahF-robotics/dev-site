<script>
	import Grid from '$lib/Grid.svelte';
	import profilePic from '$lib/assets/ProfilePicture.jpg';
	import WordBox from '$lib/WordBox.svelte';
</script>

<Grid>
	<div class="flex h-full w-full flex-row items-center justify-center rounded-3xl bg-slate-100 p-4">
		<!--		The Profile Picture-->
		<img
			class="m-4 h-full w-auto rounded-2xl"
			src={profilePic}
			alt="Elijah Flader next to his dog, Birch"
		/>

		<!--		Text Box-->
		<div class="flex h-full w-full flex-col items-center justify-start rounded-2xl bg-white p-4">
			<h1 class="text-3xl mb-0">Hey, I'm Elijah</h1>
			<div class="flex w-full flex-col p-4">
				<!--Bio-->
				<h2 class="text-lg font-bold">- A Bit About Me -</h2>
				<p>
					Currently, I'm a student at Ohio University in Athens Ohio.
					I'm working on a double Bachelor's in Mathematics and Computer Science.
					When not studying I like to hike, play piano, and make small side projects.
					These can be anything from a simple piece of music to a small video game.
				</p>

				<!--Currently-->
				<h2 class="text-lg font-bold">- What I'm Doing Now -</h2>
				<p>
					I work with the University in the Learning Community programs as a Peer Leader.
					As a peer leader I work with students to introduce them to various University resources
					and help them connect with Alumni.
					On occasion I also help to lead and plan class.
					Besides this job, I also work with a non-profit, helping them to manage their website.
				</p>

				<!--Things I'm interested in-->
				<h2 class="text-lg font-bold">- Stuff I Like to Do -</h2>
				<div class="flex w-full flex-wrap">
					<WordBox color="bg-blue-200">Python</WordBox>
					<WordBox color="bg-yellow-200">JavaScript</WordBox>
					<WordBox color="bg-green-200">Rust</WordBox>
					<WordBox color="bg-purple-200">Piano</WordBox>
					<WordBox color="bg-red-200">Vercel</WordBox>
					<WordBox color="bg-green-200">Games</WordBox>
					<WordBox color="bg-pink-200">Calculus</WordBox>
					<WordBox color="bg-yellow-200">Finance</WordBox>
					<WordBox color="bg-green-200">Hiking</WordBox>
					<WordBox color="bg-purple-200">Music</WordBox>
				</div>

				<!--Contacts-->
				<h2 class="text-lg font-bold">- Talk With Me -</h2>
				<p class="pb-2">elijahflader@gmail.com</p>

			</div>

		</div>
	</div>
</Grid>
