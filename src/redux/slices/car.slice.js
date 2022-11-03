import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    loading: false,
    error: false
}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({car, id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateCar(id, car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id = action.payload)
            state.cars.splice(index, 1)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false;
                state.error = null
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
                state.loading = false;
                state.error = null
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const findCar = state.cars.find(value => value.id === action.payload.id)
                Object.assign(findCar, action.payload)
                state.carForUpdate = null
            })

});

const {reducer: carReducer, actions: {deleteCar, setCarForUpdate}} = carSlice;
const carActions = {
    getAll, deleteCar, createCar, updateCar, setCarForUpdate
}

export {carReducer, carActions}