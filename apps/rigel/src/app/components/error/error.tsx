import './error.scss'

interface ErrorProps {
  message?: string;
}

const bem = 'error'
export const defaultErrorMessage = 'Ups an error occurs'

export const Error = (props:ErrorProps) => (
  <div className={bem}>
    <i className={`${bem}__icon user secret icon massive`}/>
    <p className={`${bem}__message`}>{props.message}</p>
  </div>
)

Error.defaultProps = {
  message: defaultErrorMessage
}
