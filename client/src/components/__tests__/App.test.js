import { cleanup, render, fireEvent, getAllByTestId, getByText, prettyDOM } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

test('renders the app', () => {
  render(<App />);
});

it("opens the navbar", async () => {
  const { container } = render(<App />);

  const navMenuIcon = getAllByTestId(container, "navmenu-icon");
  const navmenu = getAllByTestId(container, "nav-menu");

  fireEvent.click(navMenuIcon[0]);

  expect(navmenu[0]).toHaveClass('nav-menu active');
});

it("closes the navbar", () => {
  const { container } = render(<App />);

  const navMenuIcon = getAllByTestId(container, "navmenu-icon");
  const navmenu = getAllByTestId(container, "nav-menu");

  fireEvent.click(navMenuIcon[0]);

  const navMenuCloseIcon = getAllByTestId(container, "CloseIcon");

  fireEvent.click(navMenuCloseIcon[0]);

  expect(navmenu[0]).not.toHaveClass('nav-menu active');
});