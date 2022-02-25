function CallContract() {
  const handleClick = () => {
    alert('todo')
  }

  return (
    <div className="flex gap-4">
      <button className="btn btn-primary" onClick={handleClick}>
        Call contract
      </button>

      <p>Result goes here</p>
    </div>
  )
}

export default CallContract
