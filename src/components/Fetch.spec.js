import { render, fireEvent, waitForElement } from "@testing-library/svelte";
import Fetch from './Fetch.svelte';

//* we need to mock fetch globally
global.fetch = require('jest-fetch-mock');

//* Errors
console.error = jest.fn();

test('<Fetch />', async () => {
  //* we mock the response from the API => this has to be on top of the test
  fetch.mockResponseOnce(JSON.stringify({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false }
  ));

  const {debug, getByText, getByTestId} = render(Fetch);

  //*======================= onMount ========================
  // await waitForElement(() => getByText('The title is delectus aut autem'));
  // debug();

  //* then we write the assertion to complete the test
  // expect(getByTestId('onMount').textContent).toBe('The title is delectus aut autem');

  //*======================= Async/Await ========================
  // *we test the botton is there
  expect(getByText('Generate Todo')).toBeTruthy();

  //* we trigger the bottom
  await fireEvent.click(getByText('Generate Todo'));
  debug();

  //* we wait till the elememnt is in the DOM
  await waitForElement(() => getByText('The title is delectus aut autem'));
  debug();

  //* then we write the assertion to complete the test
  expect(getByTestId('promise').textContent).toBe('The title is delectus aut autem');

  //* Error testing
  expect(console.error).not.toBeCalled();
})
