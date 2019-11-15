import { render } from "@testing-library/svelte";
import App from './App.svelte';

test('<App /> component exits and renders `Amsterdam SvelteJS meetup`', () => {

  const { getByText } = render(App, { props: { name: 'Amsterdam SvelteJS meetup' } });

  //* Using JEST
  const textAppComponent = () => getByText(/Hello, Amsterdam SvelteJS meetup/);
  expect(textAppComponent).not.toThrow();

  //* Using JEST-DOM
  expect(getByText('Hello, Amsterdam SvelteJS meetup')).toBeInTheDocument()
})
