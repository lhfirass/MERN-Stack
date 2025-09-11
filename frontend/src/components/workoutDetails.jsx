const WorkoutDetails = ({ workout }) => {
    return ( 
        <div style={{ color: '#222222'}}>
            <h4>{workout.title}
                <p> <strong>workout-load:</strong> {workout.load}</p>
                <p> <strong>workout-reps:</strong> {workout.reps}</p>
            </h4>
        </div>
    );
}

export default WorkoutDetails;