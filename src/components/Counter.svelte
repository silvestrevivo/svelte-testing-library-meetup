<script>
  let count = 0;

  function countHandler() {
    count = count + 1;
  }
</script>

<div>
  <button data-testid="counter-button" on:click={countHandler}>{count}</button>
</div>
