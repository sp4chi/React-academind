import React, { useState, useEffect } from 'react';
import classes from './AvailableSummary.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {

    const [loadedMeals, setLoadedMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch('https://react-http-sending-post-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');

            if (!response.ok) {
                throw new Error(`Error! Error code ${response.status}`);
            }
            const data = await response.json();

            const loadedData = [];
            for (const meal in data) {
                loadedData.push({
                    id: meal,
                    name: data[meal].name,
                    description: data[meal].description,
                    price: data[meal].price
                });
            }

            setLoadedMeals(loadedData);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false)
            setHttpError(error.message)
        });

    }, []);

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        )
    }


    const mealsList = loadedMeals.map((meal) => {
        return (
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )
    })
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;

