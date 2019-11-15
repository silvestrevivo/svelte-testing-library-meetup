import Counter from './Counter.svelte';
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';


test('<Counter />', () => {
  const wrapper = render(Counter);
  //* if we want to debug
  wrapper.debug();
  //* we can retrieve info from the DOM
  console.log(wrapper.getByText('0'));
  //* or info form the testing-library API
  console.log(wrapper.getByText('0').textContent); // => 0
  console.log(wrapper.getByText('0').tagName); // => BUTTON
  //* now we can write our first assertion
  expect(wrapper.getByText('0').tagName).toBe('BUTTON');
})

test('<Counter /> destructuring and getting test by ID', () => {
  const {debug, getByTestId } = render(Counter);
  //* if we want to debug
  debug();
  //* Assertions with destructuring
  const button = getByTestId('counter-button');
  expect(button.tagName).toBe('BUTTON');
  expect(button.textContent).toBe('0');
})


//* just when we test actions, we need to do it with async/await
test('<Counter /> fireEvent', async () => {
  const { getByTestId, debug, getByText } = render(Counter);

  //* This can be used as "The component is rendered"
  const counterButton = getByTestId('counter-button');
  expect(counterButton.textContent).toBe('0');

  //* Another way to do it, retrieving the DOM printed if is failing.
  expect(getByTestId('counter-button')).toBeTruthy();

  //* If we click once
  await fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');

  //* If we click twice and so on
  await fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('2');

  //* Another approach
  await fireEvent.click(counterButton);
  const button = getByText('3'); // we can not retrieve a funcion like in React
  expect(button).toBeTruthy();

  //* Another option but too verbose
  await fireEvent(
    counterButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
  expect(button).toHaveTextContent('4')
});
