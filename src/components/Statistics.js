import {ItemStatistics} from './Statistics.styled.js'

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return (
        <>
            <ItemStatistics>Good: {good}</ItemStatistics>
            <ItemStatistics>Bad: {bad}</ItemStatistics>
            <ItemStatistics>Neutral: {neutral}</ItemStatistics>
            <ItemStatistics>Total: {total}</ItemStatistics>
            <ItemStatistics>Positive feedback: {positivePercentage}%</ItemStatistics>
        </>
    );
};