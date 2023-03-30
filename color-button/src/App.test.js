import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox=screen.getByRole('checkbox', {name: "Disabled button"});
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray')

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red')
});

test('Clicked disabled button has gray background and reverts to blue',()=>{
  render(<App/>);
  const checkbox=screen.getByRole('checkbox', {name: 'Disabled button'});
  const colorButton=screen.getByRole('button', {name: 'Change to blue'});

  //change button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue')
})

describe('spaces before camel-case capitla letters', ()=>{
  test('Works for no inner capital letters', ()=>{
    expect(replaceCamelWithSpaces('Red')).tobe('Red');
  });
  test('Works for one inner capital letter', ()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).tobe('Midnight Blue');
  });
  test('Works for multiple inner capital letter', ()=>{
    expect(replaceCamelWithSpaces('MidiumVoiletRed')).tobe('Midum Violet Red');
  });
});
