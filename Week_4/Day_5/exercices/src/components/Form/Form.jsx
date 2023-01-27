import React, { useState } from 'react';

function Form() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <form>
      <label>Try to scream 🙀 ➡️</label>
      &nbsp;
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="..."
      />
    </form>
  );
}

export default Form;