import React from 'react';

/**
 * withTestId HOC that adds a data-testid attribute to the wrapped component
 * so it can be targeted in tests.
 *
 * @param {React.ComponentType} WrappedComponent The component to wrap.
 * @param {string} testId The value for the data-testid attribute.
 * @returns {React.FC} A new component with the data-testid attribute added.
 */
function withTestId(WrappedComponent, testId) {
  return function TestIdWrapper({ children, ...props }) {
    const enhancedChildren = React.Children.map(children, child => {
      return child;
    });

    return (
      <WrappedComponent {...props} data-testid={testId}>
        {enhancedChildren}
      </WrappedComponent>
    );
  };
}

export default withTestId;
