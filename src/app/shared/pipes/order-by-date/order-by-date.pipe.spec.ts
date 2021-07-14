import { OrderByDatePipe } from './order-by-date.pipe';

describe('OrderByDatePipe', () => {
  it('management an instance', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe).toBeTruthy();
  });
});
