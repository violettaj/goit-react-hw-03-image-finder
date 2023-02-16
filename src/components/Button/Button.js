import css from './Button.module.css';

export const Button = ({ btnShow, handleMore }) => {
  return (
    <div className={css.load}>
      <button className={css.button} type="button" onClick={handleMore}>
        {btnShow}
      </button>
    </div>
  );
};
