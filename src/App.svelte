<script>
  import Counter from "./components/counter.svelte";
  import NewCase from "./components/NewCase.svelte";
  import Fetch from "./components/Fetch.svelte";

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello, {name}</h1>
<Counter />
<NewCase />
<Fetch />
