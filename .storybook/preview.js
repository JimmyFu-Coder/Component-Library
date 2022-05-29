export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const wrapperStyle = {padding: '20px 40px'}

export const decorators = [
  (Story) => (
      <div style={wrapperStyle}>
        <h3> Component Display </h3>
        <Story />
      </div>
  ),
];