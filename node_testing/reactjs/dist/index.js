

const myelement =  React.createElement("h1",
{
  className : 'container',
  children: "hello world"
})

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(myelement);
