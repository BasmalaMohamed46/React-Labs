import React, { Component, PureComponent } from 'react';
import axios from 'axios';

class ClassComponent extends PureComponent {
    state = {
        recipes: [],
        min: 0,
        max: 5
    }

    componentDidMount() {
        axios.get("https://dummyjson.com/recipes")
            .then(res => {
                this.setState({ recipes: res.data.recipes })
            }).catch(err => console.log(err))
    }

    NextRecipe = () => {
        const { min, max, recipes } = this.state;
        const newMin = min + 5;
        const newMax = max + 5;
        if (newMax >= recipes.length+1) {
            this.setState({ min: 0, max: 5 });
        } else {
            this.setState({ min: newMin, max: newMax });
        }
    }

    PrevRecipe = () => {
        const { min, max, recipes } = this.state;
        const newMin = min - 5;
        const newMax = max - 5;
        if (newMin < 0) {
            this.setState({ min: recipes.length - 5, max: recipes.length });
        } else {
            this.setState({ min: newMin, max: newMax });
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Servings</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Cuisine</th>
                            <th scope="col">Calories per serving</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.recipes.map(r => {
                            if (r.id > this.state.min && r.id <= this.state.max) {
                                return (
                                    <tr key={r.id}>
                                        <td>{r.id}</td>
                                        <td>{r.name}</td>
                                        <td>{r.servings}</td>
                                        <td>{r.difficulty}</td>
                                        <td>{r.cuisine}</td>
                                        <td>{r.caloriesPerServing}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button className="btn btn-dark btn-block mb-3" onClick={this.PrevRecipe}>Previous</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-dark btn-block mb-3" onClick={this.NextRecipe}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassComponent;
