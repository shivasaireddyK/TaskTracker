
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
      alert('clicked')
    }
    return (
        
          <header className = "header">
              <h1>{props.title}</h1>
              <Button onClick ={props.onAdd} color = {props.showAdd ? 'red' : 'green'} text ={props.showAdd ? 'Close':'Add'} />
             
              </header>
       
    )
}

export default Header
