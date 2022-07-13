<script>
	import Header from '$lib/header/Header.svelte';
    export let img='';
    export let text='';

    $:src = "url("+img+")";

    function addPicture() {
        console.log('hi');
    }

</script>

<div class="border-solid border-2 border-black w-screen h-screen bg bg-no-repeat" style={'background-image:'+src} on:click={addPicture}>
    <div class="text-center z-5 ">{text}</div>
</div>

<style>

</style>