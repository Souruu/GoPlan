<script context="module">
import Preview from "$lib/components/Preview.svelte";

	export const prerender = true;
</script>


<svelte:head>
	<title>GoPlan</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<div>
		<Preview text='hier könnte ihre webung stehen'img='https://img.wg-gesucht.de/media/up/2022/28/c761157252eb30168be23f8773e1025f4ac0200a21ed90f8ce10165314b2af88_photo_5364250935813061653_y.large.jpg'></Preview>
	</div>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

</style>
