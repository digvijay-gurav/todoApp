import { render, screen } from '@testing-library/react';
import App from './App';
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./redux/store";

test('renders learn react link', () => {
  // render(<Provider store={store}>
  //   <App />
  // </Provider>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // const { getByTestId } = render(<Provider store={store}><App /></Provider>);
  //       expect(getByTestId('count').textContent).toBe('0');
});
