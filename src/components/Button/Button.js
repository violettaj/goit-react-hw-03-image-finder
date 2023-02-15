export const Button = ({btnShow, handleMore}) => {
    return (
        <button type="button" onClick={handleMore}>{btnShow}</button>
    )
  };