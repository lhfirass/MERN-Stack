import { useState } from "react";
const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const workout = { title, load, reps };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            console.log('new workout added', json);
            setError(null);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>add a new workout</h3>
            <label>
                Title:
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>
            <label>
                Load:
                <input type="number" name="load" onChange={(e) => setLoad(e.target.value)} value={load} />
            </label>
            <label>
                Reps:
                <input type="number" name="reps" onChange={(e) => setReps(e.target.value)} value={reps} />
            </label>
            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;