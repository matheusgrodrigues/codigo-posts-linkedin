export const ReactNodeExample: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

export const ReactNodeExampleInstance = () => (
   <ReactNodeExample>
      <h1>ReactNode Example</h1>
      {42}
      {null}
   </ReactNodeExample>
);

export const JSXElementExample = (): React.JSX.Element => <p>JSX Element</p>;

export const JSXElementExampleInstance = () => <JSXElementExample />;
