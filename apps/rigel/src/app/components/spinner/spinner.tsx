import './spinner.scss'

interface SpinnerProps {
  message?: string;
}

const bem = 'spinner'
export const defaultLoadingMessage = 'Loading...'

export const Spinner = (props:SpinnerProps) => (
  <div className={bem}>
    <div className={`${bem}__container`}>
      <div className={`${bem}__spin`} />
      {props?.message && (<p className={`${bem}__text`}>{props?.message}</p>)}
    </div>
  </div>
)

Spinner.defaultProps = {
  message: defaultLoadingMessage
}
