import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with role of button and text of 'Change to blue'
  const colorButton=screen.getByRole('button', {name: 'Change to blue'})

  //expect the background color is red
  expect(colorButton).toHaveStyle({backgroundColor:'red'}) 

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  //expect the button text to be 'change to red'
  expect(colorButton.textContent).toBe('Change to red');

});

test('initial condtions', () => {
  render(<App />);

  //check that the button starts with enable
  const colorButton=screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox=screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
  
})

test('checkbox disabled button on first click and enable on second click', ()=>{
  render(<App/>);

const checkbox= screen.getByTestId('disable-button-checkbox');
const colorButton=screen.getByRole('button', {name: 'Change to blue'})

fireEvent.click(checkbox);
expect(colorButton).toBeDisabled();

fireEvent.click(checkbox);
expect(colorButton).toBeEnabled();
}) 