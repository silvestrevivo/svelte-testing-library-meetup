import { render, fireEvent } from '@testing-library/svelte';
import NewCase from './NewCase.svelte';

test('<NewCase />', () => {
  const { debug, getByTestId, queryByTestId, container } = render(NewCase);
  expect(getByTestId('page-title').textContent).toBe('New Case');
  //* we can render the component and the nested one
  debug();
  //* A big diference with react, is that first way is going to work
  expect(getByTestId('case-form')).toBeTruthy();
  expect(queryByTestId('case-form')).toBeTruthy();
  //* we don't need to shallow the component

  //* Snapshot test
  //* Container is the HTML information of the component => object
  //* This generates a folder with the snapshot/info of the component
  expect(container.firstChild).toMatchSnapshot();
})
