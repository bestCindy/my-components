import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';

const defaultProps = {
  // Mock Function 可以模拟用户调用函数
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()

}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.queryByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.queryByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg class');
  })

  it('should render a link when btnType equals link and href id provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://dummmm">Link</Button>)
    const element = wrapper.queryByText('Link');
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  })

  it('should render disabled button props', () => {
    const wrapper = render(<Button {...disabledProps}>Nick</Button>)
    const element = wrapper.queryByText('Nick') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  })
})