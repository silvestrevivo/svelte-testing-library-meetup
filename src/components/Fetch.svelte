<script>
  /*
  import { onMount } from "svelte";

  let todo;

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    todo = await res.json();
  });
  */

  let promise;

  async function getTodo() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const text = await res.json();

    if (res.ok) {
      return text.title;
    } else {
      throw new Error(text);
    }
  }

  function handleClick() {
    promise = getTodo();
  }
</script>

<!-- {#if !todo}
  <p>...waiting</p>
{:else}
  <p data-testid="onMount">The title is {todo.title}</p>
{/if} -->

<!-- --------------------------------------------- -->
<button on:click={handleClick}>Generate Todo</button>

{#await promise}
  <p>...waiting</p>
{:then title}
  <p data-testid="promise">The title is {title}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
