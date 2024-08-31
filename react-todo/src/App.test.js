// src/__tests__/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  
import App from './App';
import TodoList from './components/TodoList';

test('renders App component with TodoList', () => {
  render(<App />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/add new todo/i), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/add todo/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);

  // Ensure there's a todo item to toggle
  const todoItem = screen.getByText('Learn React');
  
  // Click to toggle the completion status
  fireEvent.click(todoItem);
  
  // Verify the item is now marked as completed
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  // Click again to toggle back
  fireEvent.click(todoItem);
  
  // Verify the item is no longer marked as completed
  expect(todoItem).toHaveStyle('text-decoration: none');
});
 
test('deletes a todo', () => {
  render(<TodoList />);
  
  // Find the delete button
  const deleteButtons = screen.getAllByText(/delete/i);
  expect(deleteButtons.length).toBeGreaterThan(0); // Ensure there is at least one delete button

  // Click the first delete button
  fireEvent.click(deleteButtons[0]);
  
  // Check that the deleted todo is no longer in the document
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

