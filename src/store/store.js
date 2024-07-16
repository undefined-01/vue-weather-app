import { createStore } from 'vuex';

export default createStore({
    state: {
        // initail state
        count: 0,
        weatherData: {
            icon: "icon",
            temp: 0,
            text: "text",
            location: "location",
            city: "seoul",
        },
        toggle: false,
    },
    mutations: {
        // mutations
        addCount(state, payload) {
            state.count += 1 + payload;
        },
        updateWeather(state, payload) {
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload) {
            state.weatherData.city = payload.value;
        },
        toggleButton(state) {
            state.toggle = !state.toggle;
        }
    },
    actions: {
        getWeather(context) {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&APPID=${API_KEY}`
            fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                    context.commit('updateWeather', data);
                })
                .catch(err => 
                    console.error(err)
                );
        }
    }
});