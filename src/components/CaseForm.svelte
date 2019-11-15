<script>
  export let submitForm;
  let text = "";
</script>

<form
  data-testid="case-form"
  on:submit|preventDefault={() => submitForm({ text })}>
  <input type="text" />
  <button>Submit</button>
</form>
