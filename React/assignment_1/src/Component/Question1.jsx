import React from 'react'
const Car =(props)=>{
    const car=props.mycar
    return <div>
        <div className='container'>
            <h3 className='m-3 text-center'>Assignment 1</h3>
            <h5 className='m-3 '>1) Create a component to print the details of following object</h5>
            <h3>Using Props</h3>
            <div >
                <h6>Model is : {car.model}</h6>
                <h6>Company is : {car.company}</h6>
                <h6>Price is : {car.price}</h6>
                <h6>Color is : {car.configuration.color}</h6>
                <h6>Fuel Type : {car.configuration.fuel}</h6>
                <h6>Cylinder : {car.configuration.cylinder}</h6>
                <h6>Fuel Tank capacity is : {car.configuration.fuelTankCapacity}</h6>
                <h6>Mileage in city : {car.configuration.mileage.city}</h6>
                <h6>Mileage on highway : {car.configuration.mileage.highway}</h6>
                <h6>Features: {car.features}</h6>
            </div>
            
        </div>
    </div>
}

function Question1() {
    const car = {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
            color: 'gray',
            fuel: 'petrol',
            cylinder: 4,
            fuelTankCapacity: 37,
            mileage: {
                city: 14,
                highway: 20,
            },
        },
        features: ['touch screen', ' bluetooth', ' alloy wheels', ' power steering'],
    }
    return (
        <div>
        <Car mycar={car} />
        
        <div className='container'>
            <h3>Without Using Props</h3>
            <div >
                <h6>Model is : {car.model}</h6>
                <h6>Company is : {car.company}</h6>
                <h6>Price is : {car.price}</h6>
                <h6>Color is : {car.configuration.color}</h6>
                <h6>Fuel Type : {car.configuration.fuel}</h6>
                <h6>Cylinder : {car.configuration.cylinder}</h6>
                <h6>Fuel Tank capacity is : {car.configuration.fuelTankCapacity}</h6>
                <h6>Mileage in city : {car.configuration.mileage.city}</h6>
                <h6>Mileage on highway : {car.configuration.mileage.highway}</h6>
                <h6>Features: {car.features}</h6>
            </div>
            <hr />
        </div>
        </div>
    )
}

export default Question1