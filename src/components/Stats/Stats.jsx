import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total) {
        return (
            <div>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
                <p>Positive feedback:{positivePercentage}</p>
            </div>
        )
    }
    function Notification(p) {
        const message = p.message;
        return <>{message}</>;
    }
    return (
        <div>
            <Notification message = "There is no feedback"/>    
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}