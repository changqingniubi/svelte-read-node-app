<script>
	import {cards} from './store'; // 引入 cards
	import Card from "./Card.svelte";
  import AddCard from "./AddCard.svelte";
	export let name;
</script>
<div id="app">
  {#each $cards as card, i}
    <Card {...card} index={i}/>
  {/each}
  <AddCard/>
</div>
<style>
	
</style>