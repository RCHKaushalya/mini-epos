import {useState, useEffect, use} from 'react'

function App() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetch('api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    fetch('api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, quantity: Number(quantity) }),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setItems([...items, newItem])
        setName('')
        setQuantity(1)
      })
  }

  return (
    <div>
      <h1>Items</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App