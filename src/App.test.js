import { render, screen, getByText, fireEvent, queryByText, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

test('renders app home page', () => {
  const {getByText} = render(
  <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
  );
  expect(getByText('Welcome to the color factory.')).toBeInTheDocument();
});

test('renders color form', () => {
  const {getByText} = render(
  <MemoryRouter initialEntries={['/colors/new']}>
    <App />
  </MemoryRouter>
  );
  expect(getByText('Color name')).toBeInTheDocument();
});

test('color form adds new color and redirects to /colors', () => {
  const {getByText, queryByText, getByLabelText} = render(
  <MemoryRouter initialEntries={['/colors/new']}>
    <App />
  </MemoryRouter>
  );
  const nameInput = getByLabelText('Color name'); 
  const valueInput = getByLabelText('Color value');
  const btn = queryByText('add')
  fireEvent.change(nameInput, {target: {value: 'black'}}); 
  fireEvent.change(valueInput, {target: {value: '#000000'}});
  fireEvent.click(btn);
  expect(getByText('black')).toBeInTheDocument(); 
});

test('testing color page', () => {
  const {getByText, queryByText, getByLabelText} = render(
  <MemoryRouter initialEntries={['/colors/new']}>
    <App />
  </MemoryRouter>
  );
  const nameInput = getByLabelText('Color name'); 
  const valueInput = getByLabelText('Color value');
  const btn = queryByText('add')
  fireEvent.change(nameInput, {target: {value: 'black'}}); 
  fireEvent.change(valueInput, {target: {value: '#000000'}});
  fireEvent.click(btn);
  const black = queryByText('black');
  fireEvent.click(black);
  expect(getByText('THIS IS BLACK!')).toBeInTheDocument();
});
