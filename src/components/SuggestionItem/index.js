// Write your code here

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails

  return (
    <li>
      <h1>{suggestion}</h1>
    </li>
  )
}

export default SuggestionItem
