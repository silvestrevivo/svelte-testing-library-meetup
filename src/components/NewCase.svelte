<script>
  import CaseForm from "./CaseForm.svelte";

  function submitForm() {
    console.log("Form submitted");
  }
</script>

<div>
  <h1 data-testid="page-title">New Case</h1>
  <CaseForm {submitForm} />
</div>
