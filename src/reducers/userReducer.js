import data from "../data/user_data.json";

const userReducers = (state, action) => {
  // var { type, payload } = action;

  if (action.type === "LOGIN_USER") {
    var userInfo = JSON.parse(localStorage.getItem("user"));

    if (!userInfo) {
      alert("No user registered");
      return {
        ...state,
        auth: false,
      };
    } else {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        auth: true,
      };
    }
  }

  if (action.type === "REGISTER_USER") {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...state,
        id: Math.floor(Math.random() * 100),
        email: action.payload.email,
        name: action.payload.name,
        password: action.payload.password,
        auth: true,
      })
    );

    console.log(state);
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      auth: true,
    };
  }

  if (action.type === "GET") {
    return {
      ...state,
    };
  }
};

export default userReducers;
