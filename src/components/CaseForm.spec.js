import { render, fireEvent } from "@testing-library/svelte";
import CaseForm from './CaseForm.svelte';

//* we can pass direclty the same function
//const submitForm = () => console.log('Form submitted');
//* or we can mock the function to test i the function is triggered
const submitForm = jest.fn();

test('<CaseForm />', async () => {
  const { getByTestId, getByText } = render(CaseForm, { props: { submitForm: submitForm }});
  expect(getByTestId('case-form')).toBeTruthy();

  //* Firing events
  await fireEvent.click(getByText('Submit'));

  //* We test that the function is triggered from the mock
  expect(submitForm).toHaveBeenCalledTimes(1);
  //* With the next content passed
  expect(submitForm).toHaveBeenCalledWith({
    text: ''
  });
})
