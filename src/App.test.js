import {render} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it("should render App with error", () => {
        const { asFragment } = render(<App/>);
        expect(asFragment()).toMatchSnapshot();
    })
})