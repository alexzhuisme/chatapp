import './Input.css'

export default function Input({message, setMessage,sendMessage}){
  return(
    <form className='form'>
      <input
        type="text"
        className='input'
        placeholder='Type a message'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event):null}
      />
      <button className="sendButton"
              onClick={(event)=>sendMessage(event)}>Send</button>
    </form>
  )
}