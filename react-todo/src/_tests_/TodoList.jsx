// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
