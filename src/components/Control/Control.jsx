export const FeedbackOptions = ({onFeedback}) => { 
    return (
        <div>
            <button onClick={() => onFeedback("good")}>good</button>
            <button onClick={() => onFeedback("neutral")}>neutral</button>
            <button onClick={() => onFeedback("bad")}>bad</button>
        </div>
    )
}
