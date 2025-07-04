import {useSelector} from "react-redux"
import Alert from 'react-bootstrap/Alert';
const Error= ()=> {

    const errors = useSelector (state => state.ErrorReducer)
    return (
        <div>
{
    errors.map((el,i,t)=>  <Alert variant='danger'>
          {el.msg}
        </Alert>)
}
        </div>
    )
}

export default Error