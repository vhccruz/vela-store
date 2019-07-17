const Grid = ({children, template}) =>
  <div>
    {children}
  <style jsx>{`
    div {
      display: grid;
      grid-column-gap: 2rem;
    }
    @media only screen and (min-width: 768px) {
      div {
        grid-template-columns: ${template}
      }
    }
  `}</style>
  </div>

export default Grid

