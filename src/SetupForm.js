import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz,handlechange,handleSubmit,handleChange,error} = useGlobalContext();


  return <main>
    <section className="quiz quiz-small">
      <form className="setup-form">
        {/*ammount*/}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50}
          />
        </div>
        {/*category*/}
        <div className="form-control">
          <label htmlFor="category">number of questions</label>
          <select
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
            className='form-input'
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        {/*difficulty*/}
        <div className="form-control">
          <label htmlFor="difficulty">number of questions</label>
          <select
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
            className='form-input'
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && <p className='error'>can't generate quesitons, please try different options</p>}
        <button className="submit-btn" onClick={handleSubmit}>start</button>
      </form>
    </section>
  </main>
}

export default SetupForm
