import Logement from ".";
import { render } from '@testing-library/react';

describe('Logement', () => {
  test('Should render without crash', async () => {
    render(<Logement />);
  })
})
