import { it, describe, expect } from 'vitest';
import { FilterBox } from './FilterBox';
import { render } from '@testing-library/react';


describe('FilterBox Component', () => {
  it('should render the FilterBox component', () => {
    const { container } = render(
      <FilterBox
        minPrice={0}
        handlePriceChange={() => {}}
        handleCategoryChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
