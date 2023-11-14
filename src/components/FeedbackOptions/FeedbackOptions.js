export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    <div>
        {options.map(option => (
            <btn key={option} onClick={() => onLeaveFeedback(option)}>{option}
            </btn>
        ))}
    </div>
};